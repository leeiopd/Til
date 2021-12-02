# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part2. AWS 기반 소규모 & 중규모 아키텍트 설계

### 03. 중규모 아키텍트

#### 03_(인프라) Docker 개요



##### Docker 개요

* 문제점 발생

  ![03_01_Docker개요 문제점 발생](./imgs/03_01_Docker개요 문제점 발생.png)

  * 개발 환경을 그대로 복제해서 같은 환경에서 배포하고 싶다.
  * 같은 서버에서 개발 환경을 여러개로 분리하고 싶다.

* 가상환경과 Docker

  * 가상환경
    * 하나의 서버 내에서 프로그램별로 환경을 구분
    * 각 가상환경별로 컴퓨팅 자원를 분리하여 나누어 사용
      * 비효율성 발생
  * Docker
    * 컨테이너 형태로 환경을 구분
    * 이미지를 통해 같은 환경의 가상 컴퓨터(컨테이너)를 무한히 생성 가능 = Auto Scaling
    * 컴퓨팅 자원을 유동적으로 공유해서 사용

* Docker

  * Docker 구성

    ![03_02_Docker개요 Docker 구조](./imgs/03_02_Docker개요 Docker 구조.png)

  * Docker-Compose

    ![03_02_Docker개요 Docker-Compose](./imgs/03_02_Docker개요 Docker-Compose.png)

    * 여러 개의 Docker Container 를 한번에 배포 할 수 있게 하는 툴
    * Docker 컨테이너들의 상호작용을 도와줌
      * Docker 컨테이너들의 관계를 정의

    
