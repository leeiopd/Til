# node 컨테이너
FROM node


# 작업디렉토리를 생성하고 
WORKDIR /src
# 현재위치 소스파일 전체 복사
ADD . /src

# src 폴더로 이동한 다음에 패키지를 install 한다
RUN cd /src && npm install

# Expose port
EXPOSE  3000

# CMD ["node", "/src/app.js"]

# netcat 설치
RUN apt-get update && apt-get install -y netcat

RUN chmod +x docker-entrypoint.sh
ENTRYPOINT ./docker-entrypoint.sh

# entrypoint 와 cmd 의 차이
# entrypoint 는 인자를 받을 수 있다.


