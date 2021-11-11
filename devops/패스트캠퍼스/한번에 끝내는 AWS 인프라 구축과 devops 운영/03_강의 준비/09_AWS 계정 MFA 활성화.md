# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part1. DevOps 기본 개념 및 강의 준비

### 03. 강의 준비

#### 09_AWS 계정 MFA 활성화



* 목차
  
  * MFA 소개
  * AWS MFA 소개
  * AWS 계정에 MFA 적용
  





* MFA 소개
  * 다단계 인증, MFA (Mujlti Factor Authenication)
  * 정규 자격증명 방법 외에 서비스 제공자가 지원하는 추가 보안 인증 방법을 수행하는 것
    * SMS / E-mail / ARS 인증
    * OTP 하드웨어
    * YubiKey 등 U2F 디바이스
  * MFA 를 활성호하면 계정에 대한 추가 보안 레이어를 구축함으로써 혹시 모를 보안사고에 대비할 수 있음





* AWS MFA 소개
  * AWS의 다단계 인증
    * AWS 루트 계정 및 IAM 사용자에 적용 가능
    * 웹 콘솔 로그인 및 CLI 사용 모두에 MFA 활성화 가능
  * 지원하는 MFA 유형
    * 가상 MFA 디바이스
      * 스마트폰 또는 기타 디바이스에서 실행되며 물리적 디바이스를 에뮬레이션 하는 소프트웨어 어플리케이션
      * Google Authenticator / Authy / Azure Authenicator / 1Password
    * U2F 보안키
      * YubiKey 와 같은 컴퓨터의 USB 포트에 연결하는 디바이스
    * 다른 하드웨어 MFA 디바이스
      * 동기화된 1회 암호 알고리즘에 따라 여섯자리 숫자 코드를 생성하는 하드웨어 디바이스
    * SMS 문자 메시지 기반 MFA
      * IAM 사용자만 사용가능





* AWS 계정에 MFA 적용
  1. AWS 웹 콘솔 우측 상단 - 내 보안 자격증명
  2. 멀티 팩터 인증(MFA) - MFA 활성화
  3. 가상 MFA 디바이스
  4. 가상 MFA 앱 설치 후 등록 - MFA 코드1 / MFA 코드 2 입력 - MFA 할당
  5. 로그인 시, 비밀번호 입력후 MFA 코드 입력 적용







