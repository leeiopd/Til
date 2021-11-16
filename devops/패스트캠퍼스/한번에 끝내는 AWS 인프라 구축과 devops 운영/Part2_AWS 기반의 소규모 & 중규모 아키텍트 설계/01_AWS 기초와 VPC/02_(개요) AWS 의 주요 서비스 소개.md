# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part2. AWS 기반 소규모 & 중규모 아키텍트 설계

### 01. AWS 기초와 VPC

#### 02_(개요) AWS 의 주요 서비스 소개



*  AWS 주요 서비스 - 컴퓨팅 서비스
  *  AWS EC2 (elastic)
    *  사양과 크키를 조절할 수 있는 컴퓨팅 서비스

  *  AWS Auto Scaling
    *  서버의 특정 조건에 따라 서버를 추가/삭제 할 수 잇는 서비스

  *  AWS Lightsail
    *  가상화 프라이빗 서버

  *  AWS Workspaces
    *  사내 pc를 가상화로 구성하여, 문서를 개인 pc에 보관하는 것이 아니라 서버에서 보관하게 하는 서비스

*  AWS 주요 서비스 - 네트워킹 서비스
  *  AWS Route 53
    *  DNS(domain name system) 웹 서비스

  *  AWS Direct Connect
    *  On-premise 인프라와 AWS 를 연결하는 네트워킹 서비스 
    *  On-premise : 데스크톱 / 노트북 등 실제 컴퓨터

  *  AWS VPC
    *  가상 네트워크를 클라우드 내에서 생성/구성

  *  AWS ELB
    *  부하 분산(로드 밸런싱) 서비스
    *  네트워킹의 방식으로 부하를 분산
    *  Auto Scaling 은 서버를 여러개를 두어 분산되는 것이 차이

*  AWS 주요 서비스 - 스토리지/데이터베이스 서비스
  *  AWS S3
    *  여러가지 파일을 형식에 구애 받지 않고 저장

  *  AWS RDS
    *  가상 SQL 데이터베이스 서비스

  *  AWS DynamoDB
    *  가상 NoSQL 데이터베이스 서비스

  *  AWS ElastiCache
    *  In-memory 기반의 cache 서비스
    *  빠른 속도 필요로 하는 서비스와 연계

*  AWS 주요 서비스 - 데이터 분석 & AI
  *  AWS Redshift
    *  데이터 분석에 특화된 스토리지 시스템

  *  AWS EMR
    *  대량의 데이터를 효율적으로 가공 & 처리

  *  AWS Sagemaker
    *  머신 러닝 & 데이터 분석을 위한 클라우드 환경 제공

