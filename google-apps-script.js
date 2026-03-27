// ================================================================
// Milestones.today — 웨이팅 리스트 Google Apps Script
// ================================================================
// 사용 방법:
// 1. Google Sheets 새 파일 만들기
// 2. 확장 프로그램 → Apps Script → 이 코드 붙여넣기
// 3. 배포 → 새 배포 → 웹 앱 → "모든 사용자" 접근 허용 → 배포
// 4. 생성된 URL을 index.html 의 GAS_URL 에 교체
// ================================================================

// ▼ 본인 Gmail 주소로 교체하세요
const ADMIN_EMAIL = "iam.minalee@gmail.com";

// ▼ 자동 발송 이메일 내용 (수정 가능)
const EMAIL_SUBJECT = "Milestones.today 얼리 액세스 신청이 완료되었습니다 🎯";
const EMAIL_BODY = `
안녕하세요!

Milestones.today 얼리 액세스 신청을 해주셔서 감사합니다.

저희가 런칭 준비를 마치는 즉시 가장 먼저 알려드리겠습니다.
얼리 액세스 유저에게는 특별 혜택이 제공될 예정입니다.

기대해 주세요. 곧 다시 연락드릴게요!

— Milestones.today 팀

──────────────────────────────
이 이메일은 milestones.today 웨이팅 리스트 신청으로 발송되었습니다.
`;

// ================================================================
// POST 요청 처리 (랜딩 페이지에서 이메일 제출 시 호출됨)
// ================================================================
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const email = data.email;

    if (!email || !email.includes("@")) {
      return respond({ success: false, message: "유효하지 않은 이메일" });
    }

    // 1. Google Sheets 에 이메일 저장
    saveToSheet(email);

    // 2. 신청자에게 자동 이메일 발송
    sendWelcomeEmail(email);

    // 3. 관리자(본인)에게 알림
    sendAdminNotification(email);

    return respond({ success: true, message: "등록 완료" });

  } catch (err) {
    return respond({ success: false, message: err.message });
  }
}

// GET 요청 (배포 테스트용)
function doGet(e) {
  return respond({ success: true, message: "Milestones.today GAS 작동 중" });
}

// ================================================================
// Google Sheets 저장
// ================================================================
function saveToSheet(email) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName("웨이팅 리스트");

  // 시트가 없으면 생성
  if (!sheet) {
    sheet = ss.insertSheet("웨이팅 리스트");
    sheet.appendRow(["이메일", "신청일시", "상태"]);
    sheet.getRange("1:1").setFontWeight("bold");
  }

  // 중복 체크
  const emails = sheet.getRange("A:A").getValues().flat();
  if (emails.includes(email)) return; // 이미 등록된 이메일이면 스킵

  // 신규 추가
  sheet.appendRow([
    email,
    new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }),
    "신청완료"
  ]);
}

// ================================================================
// 신청자에게 웰컴 이메일 발송
// ================================================================
function sendWelcomeEmail(email) {
  GmailApp.sendEmail(email, EMAIL_SUBJECT, EMAIL_BODY, {
    from: ADMIN_EMAIL,
    name: "Milestones.today",
  });
}

// ================================================================
// 관리자에게 신규 신청 알림
// ================================================================
function sendAdminNotification(email) {
  GmailApp.sendEmail(
    ADMIN_EMAIL,
    `[Milestones.today] 새 신청: ${email}`,
    `새로운 얼리 액세스 신청이 들어왔습니다.\n\n이메일: ${email}\n시간: ${new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}`,
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
