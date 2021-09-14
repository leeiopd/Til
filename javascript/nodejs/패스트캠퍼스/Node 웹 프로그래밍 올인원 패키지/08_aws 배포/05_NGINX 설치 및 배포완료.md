# 패스트캠퍼스 - Node 웹 프로그래밍 올인원 패키지

### 08.AWS 배포

##### 05_NGINX 설치 및 배포완료

* 이전까지 사용하였던 port 3000 번을 NGINX 가 대신 접속하여 사용자에게 port 3000번이 노출되지 안도록 설정
  1. NGINX 설치 및 실행 확인
  2. 3000번 port 삭제
  3. NGINX 설정
     * 프록시 설정



* nginx 설치: sources.list 수정 -> 동작 X

  * sudo vi /etc/apt/sources.list
  * apt-get 으로 패키지를 설치 할 때, 경로에 대한 세부 설정

  ```bash
  // source.list
  
  // 추가 작성
  deb http://nginx.org/packages/ubuntu/ xenial nginx
  deb-src http://nginx.org/packages/ubuntu/ xenial nginx
  ```

  * sudo apt-get update
    * source.list 의 수정사항을 update



* nginx 설치

  ```bash
  $ sudo apt update
  $ sudo apt upgrade
  
  $ sudo dpkg-reconfigure tzdata
  // 시간 asia -> seoul 설정
  
  $ sudo apt install nginx
  ```

  



* 설치 확인

  ```bash
  $ nginx -v
  ```

  

* 동작

  ```bash
  $sudo service nginx start
  $sudo service nginx status
   nginx.service - nginx - high performance web server
     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
     Active: active (running) since Tue 2021-09-14 23:35:30 KST; 3s ago
       Docs: https://nginx.org/en/docs/
    Process: 5898 ExecStart=/usr/sbin/nginx -c /etc/nginx/nginx.conf (code=exited, status=0/SUCCESS)
   Main PID: 5901 (nginx)
      Tasks: 2
     Memory: 1.3M
        CPU: 4ms
     CGroup: /system.slice/nginx.service
             ├─5901 nginx: master process /usr/sbin/nginx -c /etc/nginx/nginx.con
             └─5902 nginx: worker process
  ```





* 보안그룹 설정
  * 3000 번 삭제
  * http (80번) 전체 접근 권한으로 추가





* nginx 설정

  ```
  // /etc/nginx/conf.d/defaul.conf
  
  server {
  
  	...
  	
  	
  	location / {
  		proxy_pass http://127.0.0.1:3000/;
  	}
  
  	...
  
  
  }
  ```

  * 3000 번 port 에 대한 접속을 처리

