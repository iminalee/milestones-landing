# Color & Design Guide — The Pulse / Milestones.today

> 벤치마크 레퍼런스: Endel.io  
> 업데이트: 2026-04-05 (Endel 캡쳐 분석 반영)

---

## 1. 컬러 시스템

### Primary Palette

| 이름 | 헥스 | 용도 |
|------|------|------|
| Deep Navy | `#08101e` | 기본 배경 (body bg) |
| Navy Dark | `#0c1625` | 섹션 변주 배경 |
| Navy Mid | `#0f172a` | 카드 배경, 오버레이 |
| Pure Black | `#000000` | 최강조 배경 (히어로 오버레이) |

### Gold Accent Palette

| 이름 | 헥스 | 용도 |
|------|------|------|
| Gold Deep | `#92400e` | 호버 상태, 그림자 |
| Gold Core | `#d97706` | Primary CTA, 강조 |
| Gold Light | `#f59e0b` | 아이콘, 링 |
| Gold Bright | `#fbbf24` | 텍스트 강조, 배지 |
| Gold Pale | `#fef3c7` | 배경 틴트 |

### Glass / Alpha Values

```css
--glass-bg:        rgba(255, 255, 255, 0.04);
--glass-border:    rgba(255, 255, 255, 0.08);
--glass-hover:     rgba(255, 255, 255, 0.07);
--gold-glow-soft:  rgba(245, 158, 11, 0.08);
--gold-glow-mid:   rgba(245, 158, 11, 0.15);
--gold-glow-hard:  rgba(245, 158, 11, 0.35);
```

### Text Hierarchy (다크 배경 기준)

| 단계 | 값 | 용도 |
|------|-----|------|
| Primary | `#ffffff` | 헤드라인, 주요 텍스트 |
| Secondary | `rgba(255,255,255,0.65)` | 서브카피, 본문 |
| Muted | `rgba(255,255,255,0.4)` | 보조 설명, 날짜 |
| Faint | `rgba(255,255,255,0.2)` | 구분선, 푸터 |

---

## 2. 타이포그래피

### 폰트 스택

```css
/* 헤드라인 — Serif 감성, 신뢰감 + 고급스러움 */
font-family: 'Noto Serif KR', Georgia, serif;
font-weight: 700;
font-style: italic;  /* 강조 시 */

/* 본문 — 가독성 최우선, Light weight */
font-family: 'Pretendard', -apple-system, sans-serif;
font-weight: 300;  /* body */
font-weight: 400;  /* 일반 본문 */
font-weight: 600;  /* 강조 레이블 */
font-weight: 700;  /* 버튼, CTA */
```

### 타입 스케일

| 용도 | 크기 | 행간 | 자간 |
|------|------|------|------|
| Hero H1 | `clamp(2.8rem, 7vw, 5rem)` | 1.1 | -0.03em |
| Section H2 | `clamp(1.9rem, 4.5vw, 3rem)` | 1.05 | -0.04em |
| Card Title | `1.1rem` | 1.4 | -0.02em |
| Body | `0.95rem` | 1.85 | -0.01em |
| Label | `0.62rem` | 1.4 | +0.14em (대문자) |
| Caption | `0.68rem` | 1.5 | +0.08em |

### 헤드라인 스타일 원칙 (Endel 벤치마크 반영)

- H1: Serif + Italic + 대형 → "의식적 선언"의 느낌
- H2 이하: 세미볼드 산세리프 → 신뢰감 있는 정보 전달
- `em` 태그: 금색 그라디언트 텍스트로 핵심어 강조
- 대문자 + 자간 넓은 레이블: 섹션 맥락 안내

---

## 3. 글래스모피즘 카드

```css
/* 기본 Glass Card */
.glass-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: background 0.2s, border-color 0.2s;
}

/* 호버 상태 */
.glass-card:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(245, 158, 11, 0.25);
}

/* 상단 골드 선 강조 */
.glass-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(245,158,11,0.5), transparent);
}
```

### Endel 벤치마크에서 가져온 카드 특성

- **배경 투명도 낮게** (0.03~0.05): Endel처럼 배경이 "비쳐 보이는" 느낌
- **테두리 미세하게** (0.06~0.1 alpha): 명확한 선 없이 공간감으로 구분
- **코너 라운딩 크게** (20~28px): 부드럽고 현대적인 감각
- **블러 강하게** (16~24px): 깊이감 표현

---

## 4. Portal Orb (핵심 시각 요소)

Endel의 원형 사운드스케이프 비주얼을 The Pulse의 "포털 오브"로 재해석.

```css
/* 코어 */
.orb-core {
  width: 72px; height: 72px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #fef3c7, #fde68a 50%, #d97706);
  box-shadow:
    0 0 30px rgba(217, 119, 6, 0.4),
    0 0 60px rgba(217, 119, 6, 0.2),
    inset 0 0 20px rgba(255,255,255,0.1);
  animation: corePulse 2.5s ease-in-out infinite;
}

/* 확장 링 */
.orb-ring {
  position: absolute; inset: 0;
  border-radius: 50%;
  border: 1px solid rgba(217, 119, 6, 0.35);
  animation: ringExpand 3s ease-out infinite;
}

@keyframes ringExpand {
  0%   { transform: scale(0.85); opacity: 0.7; }
  100% { transform: scale(2.2); opacity: 0; }
}

@keyframes corePulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 30px rgba(217,119,6,0.4), 0 0 60px rgba(217,119,6,0.2);
  }
  50% {
    transform: scale(1.06);
    box-shadow: 0 0 50px rgba(217,119,6,0.6), 0 0 100px rgba(217,119,6,0.3);
  }
}
```

### Orb 크기 스펙

| 화면 | Orb 전체 | Core |
|------|---------|------|
| 데스크탑 | 140×140px | 72×72px |
| 태블릿 | 120×120px | 62×62px |
| 모바일 | 110×110px | 58×58px |

---

## 5. 배경 시각 요소

### 스타필드 파티클 (Endel 벤치마크)

Endel 히어로 섹션의 별/입자 효과를 The Pulse 브랜드에 적용.

```css
/* 파티클 점 */
.star {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  animation: twinkle var(--duration) ease-in-out infinite var(--delay);
}

@keyframes twinkle {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50%       { opacity: 0.8; transform: scale(1.3); }
}
```

**파라미터:**
- 개수: 60~100개 (페이지 크기에 따라)
- 크기: 1~3px (80% 2px, 20% 3px)
- 투명도: 0.1~0.5 (랜덤)
- 지속시간: 2~6s (랜덤)

### 배경 글로우

```css
.bg-glow {
  background:
    radial-gradient(ellipse 55% 45% at 50% 40%, rgba(217,119,6,0.06) 0%, transparent 65%),
    radial-gradient(ellipse 30% 25% at 20% 80%, rgba(100,60,200,0.04) 0%, transparent 50%),
    radial-gradient(ellipse 25% 20% at 80% 20%, rgba(245,158,11,0.03) 0%, transparent 50%);
}
```

---

## 6. 버튼 시스템

### Primary CTA (골드)
```css
.btn-primary {
  background: var(--gold-core);
  color: #fff;
  border: none;
  border-radius: 14px;
  padding: 15px 28px;
  font-weight: 700;
  box-shadow: 0 4px 20px rgba(217, 119, 6, 0.35);
  transition: background 0.2s, transform 0.1s, box-shadow 0.2s;
}
.btn-primary:hover {
  background: #b45309;
  box-shadow: 0 8px 32px rgba(217, 119, 6, 0.45);
  transform: translateY(-2px);
}
```

### Secondary CTA (Glass)
```css
.btn-secondary {
  background: rgba(245, 158, 11, 0.08);
  border: 1px solid rgba(245, 158, 11, 0.25);
  color: var(--gold-bright);
  border-radius: 14px;
  padding: 15px 28px;
  font-weight: 700;
  transition: all 0.25s;
}
.btn-secondary:hover {
  background: rgba(245, 158, 11, 0.15);
  border-color: rgba(245, 158, 11, 0.45);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(217, 119, 6, 0.2);
}
```

### Ghost (Minimal)
```css
.btn-ghost {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.65);
  border-radius: 12px;
  transition: all 0.25s;
}
.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(255, 255, 255, 0.15);
  color: #fff;
}
```

---

## 7. 네비게이션 (Endel 벤치마크)

Endel 사이트의 고정 상단 네비게이션을 벤치마크:
- **위치**: Fixed top, 100% width
- **배경**: `rgba(8,16,30,0.6)` + `backdrop-filter: blur(20px)`
- **테두리**: `1px solid rgba(255,255,255,0.06)` 하단 선
- **높이**: 60~70px
- **로고**: 좌측 / CTA: 우측 / 링크: 중앙

---

## 8. 간격 시스템

| 단계 | 값 | 용도 |
|------|-----|------|
| xs | 8px | 인라인 요소 간격 |
| sm | 16px | 컴포넌트 내부 |
| md | 24px | 카드 패딩 |
| lg | 40px | 섹션 내 여백 |
| xl | 64px | 섹션 간 |
| 2xl | 96px | 대형 섹션 패딩 |

---

## 9. Endel 분석에서 추가 반영된 인사이트

### 새로 캡쳐 분석 (2026-04-05 업데이트)

1. **히어로 레이아웃**: 중앙 정렬 + 대형 제품 목업 이미지 배치 (세로형 스크린 중앙)
2. **별/파티클 배경**: 앱 프리뷰 섹션 배경에 흰색 점들이 흩뿌려진 형태
3. **기능 카드**: 하단에 4열 그리드 형태의 다크 카드 (아이콘 + 제목 + 설명 + Learn More)
4. **통계 섹션**: `#1`, `7x`, `3.6x`, `95%` — 대형 볼드 숫자 + 위쪽 방향 화살표 이미지
5. **온보딩 화면**: 풀스크린, 중앙 일러스트, "Begin" 단일 버튼 — 극도로 심플한 CTA
6. **리뷰 그리드**: 별점 + 사용자명 + 후기 텍스트 다중 컬럼 — 사회적 증거 밀도 높음

### The Pulse 적용 우선순위

- ✅ 파티클 배경 → 히어로/앱 섹션에 적용
- ✅ 대형 통계 표시 → "과학적 근거" 섹션 스타일로 활용
- ✅ 온보딩 화면 풀스크린 단순화 → app/index.html Coming Soon 페이지
- ⬜ 4열 기능 카드 그리드 → 랜딩페이지 도구 섹션 개편 시 적용

---

*The Pulse · Color & Design Guide v1.1 — Endel 벤치마크 반영*
