# Success Pulse — 컬러 시스템 & 디자인 가이드

> **핵심 콘셉트: "평행세계의 포탈"**
> 
> 칠흑 같은 밤하늘에 골드빛 포탈이 열리고, 그 안에서 가장 완성된 내가 조용히 손을 내미는 순간.

---

## 📋 목차

1. [핵심 철학](#핵심-철학)
2. [컬러 팔레트](#컬러-팔레트)
3. [컬러 의미 체계](#컬러-의미-체계)
4. [타이포그래피](#타이포그래피)
5. [핵심 디자인 요소](#핵심-디자인-요소)
6. [섹션별 구현 가이드](#섹션별-구현-가이드)
7. [성능 & 안전 체크리스트](#성능--안전-체크리스트)
8. [무드보드 키워드](#무드보드-키워드)

---

## 핵심 철학

### "다크 UI"가 아니라 "깊이감 있는 포탈"

| 하지 말 것 | 할 것 |
|-----------|------|
| ❌ 순수 블랙(#000)은 죽은 느낌 | ✅ 깊은 네이비/다크 퍼플로 깊이감 주기 |
| ❌ 단순한 어두운 배경 | ✅ 여러 레이어의 다크톤으로 공간감 창조 |
| ❌ 밝기만 높인 포인트 | ✅ 골드/앰버 글로우 = "또 다른 나"의 빛 |

**차이:**
- 게임/크립토 사이트처럼 보이지 않으면서도
- 신비감 있으면서도 "제품이 뭔지" 명확하게 전달

---

## 컬러 팔레트

### CSS 변수로 정의

```css
:root {
  /* ── 배경 레이어 (깊이감) ── */
  --bg-void: #07080F;           /* 가장 깊은 배경: 거의 블랙이지만 미세한 블루 */
  --bg-deep: #0C0F1A;           /* 메인 배경: 깊은 네이비 */
  --bg-surface: #121628;        /* 카드/서피스 배경 */
  --bg-elevated: #1A1F38;       /* 호버/강조 영역 */
  
  /* ── 빛 = "또 다른 나"의 컬러 ── */
  --glow-primary: #F5A623;      /* 골드/앰버 — 주요 포인트 */
  --glow-warm: #E8944A;         /* 따뜻한 골드 — 서브 포인트 */
  --glow-hot: #FF6B35;          /* 강한 오렌지 — CTA 버튼 */
  
  /* ── 신비감 컬러 ── */
  --mystic-purple: #8B5CF6;     /* 보라 글로우 — 포탈 효과 */
  --mystic-blue: #3B82F6;       /* 파랑 글로우 — 변환의 순간 */
  --mystic-teal: #14B8A6;       /* 청록 — 데이터/진행률 */
  
  /* ── 텍스트 ── */
  --text-bright: #F1F5F9;       /* 헤드라인용 밝은 텍스트 */
  --text-muted: #94A3B8;        /* 본문 텍스트 */
  --text-dim: #475569;          /* 캡션/서브텍스트 */
  
  /* ── 유리/프로스트 효과 ── */
  --glass: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-glow: rgba(245, 166, 35, 0.15);
}
```

### 색상표 시각 참고

```
배경 계열:
  #07080F  (void)      ████████████████████ 가장 어두움
  #0C0F1A  (deep)      ███████████████████░ 메인 배경
  #121628  (surface)   ██████████████████░░ 카드
  #1A1F38  (elevated)  █████████████████░░░ 호버

포인트 계열:
  #F5A623  (gold)      ███████████████░░░░░ 골드 (주로 사용)
  #E8944A  (warm)      ██████████████░░░░░░ 따뜻한 톤
  #FF6B35  (hot)       ████████░░░░░░░░░░░░ CTA 강조

신비감 계열:
  #8B5CF6  (purple)    ██████████░░░░░░░░░░ 포탈 효과
  #3B82F6  (blue)      ██████░░░░░░░░░░░░░░ 변환 순간
  #14B8A6  (teal)      ██████░░░░░░░░░░░░░░ 진행/데이터

텍스트 계열:
  #F1F5F9  (bright)    ███████████████████░ 헤드라인
  #94A3B8  (muted)     █████████░░░░░░░░░░░ 본문
  #475569  (dim)       ███████░░░░░░░░░░░░░ 캡션
```

---

## 컬러 의미 체계

### 각 색이 나타내는 개념

| 색상 | 코드 | 의미 | 사용 사례 |
|------|------|------|---------|
| **골드/앰버** | #F5A623 | "미래의 나"가 보내는 빛, 목표, 방향 | 하이라이트, 글로우, 메인 CTA |
| **깊은 네이비** | #0C0F1A | 현재의 나, 아직 깨닫지 못한 잠재력 | 배경, 기본 톤 |
| **보라 글로우** | #8B5CF6 | 두 세계를 잇는 포탈, 전환의 순간 | 배경 오브, 신비감 |
| **청록** | #14B8A6 | 실행, 데이터, 진행 (현실의 증거) | 진행률, 데이터 시각화 |
| **밝은 회색** | #F1F5F9 | 명확한 메시지, 텍스트 | 헤드라인, 본문 텍스트 |

---

## 타이포그래피

### 폰트 조합

```css
/* 헤드라인: 무게감 있는 세리프 */
h1, h2 {
  font-family: 'Noto Serif KR', serif;
  font-weight: 700;
  letter-spacing: -0.02em;    /* 글자 사이를 좁혀서 무게감 */
  line-height: 1.3;
}

/* 서브 헤드라인: 가늘고 신비로운 */
.subtitle, .section-label {
  font-family: 'Pretendard', sans-serif;
  font-weight: 200;           /* 매우 가벼움 */
  letter-spacing: 0.15em;     /* 넓은 자간 (신비감) */
  text-transform: uppercase;
  font-size: 13px;
  color: var(--text-dim);
}

/* 본문 */
p, .body-text {
  font-family: 'Pretendard', sans-serif;
  font-weight: 300;
  line-height: 1.8;           /* 넉넉한 줄간격 */
  color: var(--text-muted);
}
```

### 타이포그래피 계층

```
────────────────────────────────────────

T H E  O T H E R  S I D E       ← 가늘고 넓은 자간 (신비감)
(13px, Weight 200, Letter-spacing 0.15em)

미래의 나를                          ← 굵은 세리프 (무게감)
(56-64px, Weight 700, Serif)

당신의 가장 바람직한 모습은           ← 가벼운 본문 (공기감)
(18px, Weight 300, Line-height 1.8)

────────────────────────────────────────
```

### 핵심 트릭

| 요소 | 방법 | 효과 |
|------|------|------|
| **무게감** | 헤드라인이 굵고 큼 (세리프 Bold, 48~64px) | 권위감, 확신 |
| **신비감** | 서브텍스트가 가볍고 자간이 넓음 (Sans Light, 0.15em) | 거리감, 우아함 |
| **대비** | 위 둘을 함께 배치 | "무겁지만 신비로운" 톤 |

---

## 핵심 디자인 요소

### 1️⃣ 글로우 오브 (Portal Orb)

**개념:** "평행세계의 포탈"을 상징하는 빛나는 구체

**구현:**

```css
.portal-orb {
  width: 600px;
  height: 600px;
  border-radius: 50%;
  position: absolute;
  
  /* 다층 그라데이션으로 신비감 */
  background: radial-gradient(
    circle at 30% 30%,
    rgba(245, 166, 35, 0.4) 0%,      /* 중심: 골드 */
    rgba(139, 92, 246, 0.2) 40%,     /* 중간: 보라 */
    rgba(59, 130, 246, 0.1) 60%,     /* 외곽: 파랑 */
    transparent 70%                   /* 점점 투명 */
  );
  
  filter: blur(60px);                 /* 부드러운 글로우 */
  animation: breathe 6s ease-in-out infinite;
}

@keyframes breathe {
  0%, 100% { 
    transform: scale(1); 
    opacity: 0.6;         /* 약한 상태 */
  }
  50% { 
    transform: scale(1.1); 
    opacity: 0.8;         /* 강한 상태 */
  }
}
```

**위치:** 히어로 섹션 배경 (상단 뒤에 배치)

**효과:** "차원의 문이 열린 것 같은" 느낌

---

### 2️⃣ 글래스모피즘 카드

**개념:** 어둠 속에 떠 있는 반투명 카드 (미래적, 우아함)

**구현:**

```css
.glass-card {
  background: rgba(255, 255, 255, 0.03);  /* 거의 투명 */
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  backdrop-filter: blur(20px);            /* 유리처럼 보임 */
  padding: 32px;
  
  /* 미묘한 골드 글로우 */
  box-shadow: 
    0 0 40px rgba(245, 166, 35, 0.03),    /* 외부 글로우 */
    inset 0 1px 0 rgba(255, 255, 255, 0.05); /* 내부 하이라이트 */
}

/* 호버 상태 */
.glass-card:hover {
  border-color: rgba(245, 166, 35, 0.15);  /* 골드 테두리 */
  box-shadow: 
    0 0 60px rgba(245, 166, 35, 0.08),    /* 더 강한 글로우 */
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  
  transition: all 0.3s ease-out;
}
```

**사용 사례:** 
- 6개 도구 소개 카드
- 특징 설명 박스
- 추천사 섹션

---

### 3️⃣ 텍스트 글로우

**개념:** 핵심 문장이 빛나는 효과

**구현 (히어로 제목):**

```css
.hero-title {
  font-family: 'Noto Serif KR', serif;
  font-size: 56px;                    /* 모바일: 40px */
  font-weight: 700;
  color: #F1F5F9;
  text-shadow: 0 0 80px rgba(245, 166, 35, 0.3);  /* 글자 주변 글로우 */
  line-height: 1.3;
}

/* 강조 단어 (예: "소환") */
.highlight {
  background: linear-gradient(135deg, #F5A623, #FF6B35);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  /* 글자 뒤 글로우 효과 */
  filter: drop-shadow(0 0 20px rgba(245, 166, 35, 0.3));
}
```

**예시:**

```html
<h1 class="hero-title">
  미래의 나를<br />
  오늘로 <span class="highlight">소환</span>하라.
</h1>
```

결과: **"소환"**만 골드 그라데이션으로 빛남

---

### 4️⃣ 미묘한 파티클/별

**개념:** 배경에 아주 느리게 움직이는 미세한 점들 (다른 차원의 공기 입자)

**구현 (React + Framer Motion):**

```jsx
import { motion } from 'framer-motion';

function Particles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/10"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, Math.random() * -200],    /* 위로 천천히 */
            opacity: [0, 0.6, 0],                /* 페이드 인/아웃 */
          }}
          transition={{
            duration: Math.random() * 8 + 6,    /* 6~14초 */
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}
    </div>
  );
}

export default Particles;
```

**효과:** 자연스럽고 신비로운 움직임 (과하지 않음)

---

### 5️⃣ 리플렉션/미러 효과

**개념:** "평행세계의 나" 콘셉트에 딱 맞는 반사 효과

**구현:**

```css
.mirror-reflection {
  position: relative;
}

.mirror-reflection::after {
  content: '';
  position: absolute;
  bottom: -50%;                    /* 아래쪽에 반사 */
  left: 0;
  right: 0;
  height: 50%;
  
  background: inherit;             /* 부모 이미지 상속 */
  transform: scaleY(-1);           /* 상하 뒤집기 */
  
  /* 위에서 아래로 점점 투명해지기 */
  mask-image: linear-gradient(
    to bottom, 
    rgba(0,0,0,0.15) 0%, 
    transparent 60%
  );
  
  filter: blur(2px);               /* 약간 흐릿하게 */
}
```

**사용 사례:**
- 앱 목업 아래
- 핵심 비주얼 아래
- 서비스 로고 아래

**효과:** "거울 너머 또 다른 세계" 느낌

---

## 섹션별 구현 가이드

### 📍 섹션 구조 전체 흐름

```
┌─────────────────────────────────────────────┐
│  1️⃣ 히어로 섹션                             │
│  ═════════════════                          │
│  칠흑 배경 + 골드 오브 + "소환하라"           │
│  → 첫인상: "여긴 뭔가 다르다"                │
└─────────────────────────────────────────────┘
         ⬇️ (자연스러운 스크롤)
┌─────────────────────────────────────────────┐
│  2️⃣ 문제 제기 섹션                          │
│  ═══════════════                            │
│  약간 밝아진 다크 서피스 + 질문 형태 텍스트   │
│  → "원하는 삶은 그려지는데, 왜 안 변하는가"   │
└─────────────────────────────────────────────┘
         ⬇️
┌─────────────────────────────────────────────┐
│  3️⃣ 세계관 소개 섹션                        │
│  ══════════════════                        │
│  포탈 오브 + 리플렉션 비주얼                  │
│  → "당신의 최선의 모습은 이미 존재한다"      │
│  → 서비스 철학을 신비롭게 전달              │
└─────────────────────────────────────────────┘
         ⬇️
┌─────────────────────────────────────────────┐
│  4️⃣ 6개 도구 소개 섹션                      │
│  ═══════════════════                       │
│  글래스모피즘 카드 그리드 (2x3 또는 3x2)     │
│  → 각 도구가 어둠 속에 빛나는 보석처럼      │
│  → BIND ◆ BUILD ◆ BE + 3개                 │
└─────────────────────────────────────────────┘
         ⬇️
┌─────────────────────────────────────────────┐
│  5️⃣ 앱 프리뷰 섹션                         │
│  ═════════════════                         │
│  다크 배경에 떠 있는 앱 화면 + 반사 효과     │
│  → 골드 글로우로 감싸기                     │
│  → "안을 들여다보면" 느낌                    │
└─────────────────────────────────────────────┘
         ⬇️
┌─────────────────────────────────────────────┐
│  6️⃣ 최종 CTA 섹션                          │
│  ════════════════                          │
│  오브가 가장 크고 밝게 + "지금, 소환하세요"  │
│  → 클라이맥스: 빛이 가장 강한 순간           │
│  → 이메일 입력 + 버튼 (CTA 행동 유도)      │
└─────────────────────────────────────────────┘
```

---

### 💻 히어로 섹션 완전한 예시

```jsx
import { motion } from 'framer-motion';
import Particles from './Particles';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center 
      justify-center overflow-hidden bg-[#07080F]">
      
      {/* 1. 배경 포탈 오브 */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 
          -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: `
            radial-gradient(
              circle at 30% 30%,
              rgba(245, 166, 35, 0.4) 0%,
              rgba(139, 92, 246, 0.2) 40%,
              rgba(59, 130, 246, 0.1) 60%,
              transparent 70%
            )
          `,
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* 2. 날아다니는 파티클 */}
      <Particles />
      
      {/* 3. 메인 콘텐츠 */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        
        {/* 서브 라벨 */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.5 }}
          className="text-xs tracking-[0.3em] text-slate-500 
            uppercase mb-8 font-light"
        >
          FROM THE OTHER SIDE OF YOU
        </motion.p>
        
        {/* 메인 헤드라인 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="font-serif text-5xl md:text-7xl font-bold 
            text-slate-100 leading-tight mb-8"
          style={{
            textShadow: '0 0 80px rgba(245, 166, 35, 0.3)',
          }}
        >
          미래의 나를<br />
          오늘로{' '}
          <span 
            className="bg-gradient-to-r from-amber-400 
              to-orange-500 bg-clip-text text-transparent"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(245, 166, 35, 0.3))',
            }}
          >
            소환
          </span>
          하라.
        </motion.h1>
        
        {/* 설명 텍스트 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg text-slate-400 font-light 
            leading-relaxed mb-12 max-w-xl mx-auto"
        >
          당신의 가장 바람직한 모습은<br />
          이미 어딘가에 존재합니다.
          <br />
          <br />
          그 사람이 오늘의 당신에게<br />
          건네는 첫 번째 질문.
        </motion.p>
        
        {/* CTA 버튼 */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r 
            from-amber-500 to-orange-600 rounded-full 
            text-white font-medium text-sm tracking-wide
            shadow-lg shadow-amber-500/20
            hover:shadow-amber-500/40 
            transition-all duration-300
            cursor-pointer"
        >
          나의 소환을 시작하다 →
        </motion.button>
        
        {/* 신청 정보 텍스트 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="text-xs text-slate-500 mt-6"
        >
          ✦ 사전 신청 시 가장 먼저 초대합니다
        </motion.p>
      </div>
      
      {/* 4. 하단 페이드 (스크롤 유도) */}
      <div className="absolute bottom-0 left-0 right-0 
        h-32 bg-gradient-to-t from-[#07080F] to-transparent 
        pointer-events-none" />
      
    </section>
  );
}
```

---

## 성능 & 안전 체크리스트

### ✅ 디자인 검증 체크리스트

```markdown
### 신비감 관련
- [ ] 글로우가 과하지 않은가? (1~2개 포인트에만)
- [ ] 텍스트 대비가 충분한가? (WCAG AA 이상)
- [ ] 신비감 70% + 명확함 30% 비율 유지?
- [ ] 제품 설명은 직설적인가?

### 성능 관련
- [ ] 애니메이션이 4~8초 주기인가? (숨쉬기 속도)
- [ ] 파티클 개수가 30개 이하인가?
- [ ] 모바일에서 글로우 효과가 가벼운가?
- [ ] 페이지 로딩 시간이 3초 이내인가?

### 접근성
- [ ] 텍스트가 배경에서 읽힐 수 있는가?
- [ ] 색상만으로 정보를 전달하지 않는가?
- [ ] 폰트 크기가 모바일에서도 충분한가?
- [ ] 링크와 버튼이 충분히 큰가?

### 브라우저 호환성
- [ ] Chrome/Safari/Firefox에서 테스트했는가?
- [ ] 모바일 (iOS/Android)에서 테스트했는가?
- [ ] 글래스모피즘이 지원되지 않는 브라우저 대응은?
- [ ] backdrop-filter 폴백 준비했는가?
```

### 위험 신호 & 해결책

| 문제 | 원인 | 해결책 |
|------|------|--------|
| 텍스트 안 읽힘 | 대비 부족 | 텍스트-배경 대비 최소 4.5:1 유지 |
| 게임/크립토처럼 봄 | 글로우 과함 | 글로우 opacity 줄이기, 색상 톤 다운 |
| 제품이 뭔지 모름 | 설명 부족 | 카피에서 직설적으로 설명 추가 |
| 답답함 | 애니메이션 느림 | 지속 시간을 4~6초로 줄이기 |
| 느린 로딩 | 이펙트 과다 | blur 값 줄이기, 파티클 개수 감소 |

---

## 무드보드 키워드

### 디자이너나 AI 이미지 생성에 쓸 수 있는 키워드

```
Primary Keywords:
Dark UI, Deep Navy, Ambient Glow, Gold Accent,
Glassmorphism, Portal, Parallel Universe,
Ethereal, Premium Minimal, Sophisticated Dark

Supporting Keywords:
Cinematic, Breathing Light, Reflection, Depth,
Calm Mystery, Interstellar, Headspace-inspired,
Luxury Dark Mode, Mystical Gateway

Visual References:
- Calm 앱 (색감의 차분함)
- Headspace (신뢰감 있는 톤)
- Endel (앰비언트 라이팅)
- Figma Dark Mode (글래스모피즘)
```

### 한 문장 브리프

> **"칠흑 같은 밤하늘에 골드빛 포탈이 열리고, 그 안에서 가장 완성된 내가 조용히 손을 내미는 순간."**

---

## 현재 상태 vs 새 방향 비교

### Success Pulse 진화 방향

| 요소 | 이전/기본 | Success Pulse (새 방향) |
|------|---------|----------------------|
| **배경** | 화이트 + 네이비 섹션 | 전체 다크 + 깊이감 레이어 |
| **포인트 컬러** | 기본 오렌지 | 골드/앰버 (격상된 오렌지) |
| **일러스트** | 없음 | 글로우 오브 + 미니멀 라인아트 |
| **카드 스타일** | 솔리드 배경 | 글래스모피즘 (투명 + 글로우) |
| **타이포** | 볼드 산세리프 | 볼드 세리프 + 라이트 산세리프 믹스 |
| **여백** | 보통 | 더 넉넉하게 (호흡감) |
| **애니메이션** | 거의 없음 | 느린 페이드 + 글로우 숨쉬기 |
| **분위기** | 자기계발 앱 느낌 | "차원을 여는 도구" 느낌 |
| **CTA 톤** | "시작하기" | "소환을 시작하다" |

---

## 마지막 체크: 절대 하지 말 것

### ❌ 피해야 할 실수들

```
1. 신비감으로 인한 이해도 저하
   ❌ 글로우가 과해서 뭐 하는 서비스인지 모르게 됨
   ✅ 설명은 직설적으로, 시각은 신비롭게

2. 접근성 무시
   ❌ 색상만으로 상태/정보 전달
   ❌ 텍스트 크기가 너무 작음
   ✅ WCAG AA 이상 대비, 최소 16px 폰트

3. 성능 무시
   ❌ 너무 많은 애니메이션 (30개 파티클, 2초 주기)
   ❌ 모바일에서도 동일한 글로우 (배터리 소모)
   ✅ 데스크톱: 풀 이펙트, 모바일: 가벼운 버전

4. 일관성 없음
   ❌ 어떤 섹션은 밝고 어떤 섹션은 어두움
   ✅ 전체 로드맵에서 점진적 밝기 변화

5. 기술 한계 무시
   ❌ IE 11 지원 요구 (backdrop-filter 미지원)
   ❌ 낮은 GPU 기기에서 애니메이션 끊김
   ✅ 폴백 계획 세우기
```

---

## 구현 시작하기

### 우선순위 (MVP → Full)

#### Phase 1: MVP (필수)
- ✅ 배경 컬러 시스템 적용
- ✅ 히어로 섹션 (제목 + 글로우 오브)
- ✅ 기본 타이포그래피
- ✅ CTA 버튼 스타일

#### Phase 2: Core (권장)
- ✅ 글래스모피즘 카드
- ✅ 섹션별 레이아웃
- ✅ 파티클 애니메이션
- ✅ 반응형 디자인

#### Phase 3: Polish (선택)
- ✅ 리플렉션 효과
- ✅ 고급 애니메이션
- ✅ 마이크로 인터랙션
- ✅ 성능 최적화

---

## 문의 및 조정사항

이 가이드는 **생동적인 문서**입니다. 

다음 내용이 필요하면 말씀해주세요:

- 🎨 특정 색상의 RGB 값 추가
- 📐 상세한 spacing/padding 가이드
- 🎬 Framer Motion 애니메이션 예시 추가
- 📱 모바일 반응형 세부사항
- 🔧 TailwindCSS/CSS-in-JS 설정 예시
- ♿ 접근성 체크리스트 확장

---

**최종 업데이트:** 2026.04.05  
**담당자:** Success Pulse Design System  
**상태:** 작업 중 (v1.0)
