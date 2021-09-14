# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 08.AWS 배포

##### 04_Mysql RDS

* AWS RDS : DB 에 대한 지원
  * aws Mysql 설치
  * backup 설정
  * err log 관리
  * 입력/수정/삭제 용 Master server 와 조회용 Slave server 설정





* RDS 보안그룹
  * 접속 권한 설정
  * ec2 의 접속 허가
    * 인바운드 설정에 ec2 의 보안그룹 id 를 추가
    * ec2 서버가 확장되어도 설정하지 않아도 접근 가능하게 함
  * local 에서 접속 허가
    * 인바운드 설정에 ip 추가





* Local 에서 RDS 의 MYsql 로 접속이 가능하게 하려면 퍼블릭 엑세스를 가능하도록 설정 하여야 한다.





