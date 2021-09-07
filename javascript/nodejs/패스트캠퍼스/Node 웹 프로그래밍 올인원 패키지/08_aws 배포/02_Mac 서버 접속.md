# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 08.AWS 배포

##### 02_Mac 서버 접속

* ssh 방식으로 pem file 을 이용하여 접속



```bash
$chmod 700 test.pem
```

* pem file 을 수정하지 못하도록 권한 변경



```bash
$ssh -i test.pem ubuntu@"주소"
```

* 상용자 명: ubuntu
* 접속 주소: public DNS 또는 public IP

