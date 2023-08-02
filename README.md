# Treatment_History
- 'FINTECH ACADEMY 인슈어테크 서비스 개발 과정 오픈 API 활용 보험 서비스 개발 실습' 했던 내용을 기반으로 만든 개인 프로젝트
- 교육 일시 : 2023.07.10 ~ 2023.07.14

# 개인프로젝트 : 1년동안 병원 및 약국 이용 내역 & 1년동안 복용한 약
- 오픈 API 활용을 실습하기 위한 프로젝트
- 첫 번째 오픈 API : [간편인증] mydatahub의 [건강보험_진료받은내용 조회(간편인증)](https://dataapi.co.kr/dLab/mdh_api.do)
- 두 번째 오픈 API : [공인인증서] tilkoblet의 [내가 먹는 약](https://tilko.net/Help/Api/POST-api-apiVersion-Hira-HIRAA050300000100)
- Main Page Capture Image<br>
<img width="624" alt="treatment_mainPage" src="https://github.com/kkh0331/Treatment_History/assets/99806443/1320ba59-81eb-49d0-81ac-5f2d1d0f6dda"><br>
[시연영상을 보실려면 여기를 클릭해주세요](https://youtu.be/xdIyiz7Aqzg)

# 구현을 위해 추가해야 할 사항
- treatment > server > treatment.js
  - 8~10의 token & encKey & encIV 추가 : mydatalab에서 로그인하여 MyPage로 들어가 토큰 및 암호화정보에서 관련 정보 찾아 추가
- treatment > server > drug.js
  - 7의 apiKey 추가 : tilkoblet에서 로그인하여 내정보 > API KEY로 들어가 관련 정보 추가
  - 76의 aesEncrypt의 세번째 인자에 본인의 공인인증서 비밀번호 추가
- 본인의 공인인증서의 signCert.der이랑 signPri.key를 treatment > server > certificate(폴더)에 추가

# Functions
- 오픈 API 활용
- 암호화 알고리즘

# 프로젝트 Architecture
Front-end<br>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/><br>
Back-end<br>
<img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white"/> <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/><br>
Cloud & Hosting : Local host로 작업<br>
Tools<br>
<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white"/> <img src="https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white"/><br>
