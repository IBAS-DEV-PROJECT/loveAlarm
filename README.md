# 💖 Love Alarm

### IBAS - 인하대학교 25-1 동아리 박람회 프로젝트

## 📌 프로젝트 실행 방법

API 연결 작업 시, .env 설정이 필요합니다.

API 작업 없이 일차적으로 UI만 구성했습니다.  
따라서 페이지 이동은 직접 url 입력이 필요합니다.

```sh
<Route path="/" element={<LandingPage />} />
<Route path="/test" element={<TestPage />} />
<Route path="/loading" element={<LoadingPage />} />
<Route path="/result" element={<ResultPage />} />
```

### 백엔드(flask) 실행

```sh
python backend/app.py
```

### 1️⃣ 터미널에서 작업할 디렉토리로 이동

```sh
cd ~/dev/code
```

### 2️⃣ GitHub에서 레포지토리 클론

```sh
git clone https://github.com/IBAS-DEV-SIDE/loveAlarm.git
```

### 3️⃣ 프로젝트 폴더로 이동

```sh
cd ~/dev/code
```

### 4️⃣ 라이브러리 설치

```sh
npm install
```

### 5️⃣ 개발 서버 실행

```sh
npm run dev
```

## 📌 기여 방법

따로 포크 따거나 브랜치 생성할 필요 없이 바로 커밋 & 푸시해 주세요!

### 코드 작성 후 커밋

```sh
git add .
git commit -m "Feat: 테스트 결과 보내기 API 연결"
```

### GitHub에 푸시

```sh
git push origin main
```
