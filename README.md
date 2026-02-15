<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# AI Website

Gemini API를 사용해 AI 도구를 탐색하고 실행할 수 있는 Vite + React 기반 웹 애플리케이션입니다.

View your app in AI Studio: https://ai.studio/apps/drive/10tnnQ5xu2YQ-L3FKt2pJ39Du-8je_piN

## 로컬 실행 방법

**Prerequisites:** Node.js (권장: LTS)

1. 의존성 설치
   ```bash
   npm install
   ```
2. 환경 변수 설정
   - 프로젝트 루트에 `.env.local` 파일을 만들고 아래 값을 설정합니다.
   ```bash
   GEMINI_API_KEY=your_api_key_here
   ```
3. 개발 서버 실행
   ```bash
   npm run dev
   ```
4. 브라우저에서 출력된 로컬 주소(기본: `http://localhost:5173`)로 접속합니다.

## 사용 가능한 스크립트

- `npm run dev`: 개발 서버 실행
- `npm run build`: 프로덕션 빌드 생성
- `npm run preview`: 빌드 결과 미리보기

## 배포

프로덕션 배포 전 아래 명령으로 빌드가 정상 동작하는지 확인하세요.

```bash
npm run build
```
