// ================================================================
// Milestones.today — 웨이팅 리스트 Google Apps Script
// ================================================================

const ADMIN_EMAIL = "iam.minalee@gmail.com";
const CONTACT_EMAIL = "5milestones.today@gmail.com";

// ================================================================
// POST 요청 처리
// ================================================================
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // 문의 폼 처리
    if (data.type === "contact") {
      sendContactEmail(data.name, data.email, data.message);
      return respond({ success: true, message: "문의 전달 완료" });
    }

    // 웨이팅 리스트 처리
    const email = data.email;
    const name = data.name || "구독자";

    if (!email || !email.includes("@")) {
      return respond({ success: false, message: "유효하지 않은 이메일" });
    }

    saveToSheet(name, email);
    sendWelcomeEmail(name, email);
    sendAdminNotification(name, email);

    return respond({ success: true, message: "등록 완료" });

  } catch (err) {
    return respond({ success: false, message: err.message });
  }
}

function doGet(e) {
  return respond({ success: true, message: "Milestones.today GAS 작동 중" });
}

// ================================================================
// Google Sheets 저장
// ================================================================
function saveToSheet(name, email) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName("웨이팅 리스트");

  if (!sheet) {
    sheet = ss.insertSheet("웨이팅 리스트");
    sheet.appendRow(["이름", "이메일", "신청일시", "상태"]);
    sheet.getRange("1:1").setFontWeight("bold");
  }

  // 중복 이메일 체크
  const emails = sheet.getRange("B:B").getValues().flat();
  if (emails.includes(email)) return;

  sheet.appendRow([
    name,
    email,
    new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }),
    "신청완료"
  ]);
}

// ================================================================
// 신청자에게 웰컴 이메일 발송
// ================================================================
function sendWelcomeEmail(name, email) {
  const subject = "[APEX BPS] 시그널 수신 예약이 완료되었습니다, " + name + "님!";

  const body = name + "님, 안녕하세요!\n\n" +
    "미래에 가능한 최상의 나로부터 소식을 듣는 시스템, APEX BPS를 구독해주셔서 감사합니다.\n" +
    "준비가 완료되는 대로 가장 먼저 소식을 전해드리겠습니다.\n\n" +
    "당신이 원하는 것을 이루어낸 Apex BPS를 불러내 내 안으로 데리고 오는 경험을 준비하고 있습니다.\n\n" +
    "지금의 당신은 지속 가능한 상태입니까?\n" +
    "그 질문에 답하는 순간, 역방향 진화가 시작됩니다.\n\n" +
    "— APEX BPS 팀 드림\n\n" +
    "──────────────────────────────\n" +
    "이 이메일은 milestones.today 웨이팅 리스트 신청으로 발송되었습니다.";

  GmailApp.sendEmail(email, subject, body, {
    name: "APEX BPS · Milestones.today",
  });
}

// ================================================================
// 관리자에게 신규 신청 알림
// ================================================================
function sendAdminNotification(name, email) {
  GmailApp.sendEmail(
    ADMIN_EMAIL,
    "[Milestones.today] 새 신청: " + name + " (" + email + ")",
    "새로운 얼리 액세스 신청이 들어왔습니다.\n\n이름: " + name + "\n이메일: " + email + "\n시간: " + new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }),
    { name: "Milestones 알림봇" }
  );
}

// ================================================================
// 응답 헬퍼
// ================================================================
function respond(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// ================================================================
// 문의 이메일 전달
// ================================================================
function sendContactEmail(name, email, message) {
  const subject = "[Milestones.today 문의] " + name + "님으로부터";
  const body = "보낸 사람: " + name + " (" + email + ")\n\n" +
    "──────────────────────────────\n\n" +
    message + "\n\n" +
    "──────────────────────────────\n" +
    "milestones.today 문의 폼에서 자동 발송됨";

  GmailApp.sendEmail(CONTACT_EMAIL, subject, body, {
    name: "Milestones.today 문의봇",
    replyTo: email,
  });
}

// ================================================================
// 테스트용 함수 (Apps Script 에디터에서 직접 실행)
// ================================================================
function testEmail() {
  sendWelcomeEmail("Mina", "iam.minalee@gmail.com");
  Logger.log("테스트 완료");
}
