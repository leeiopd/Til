# mysql 컨테이너
FROM mysql

# 환경변수
# mysql 이미지의 예약어로 설정됨
ENV MYSQL_ROOT_PASSWORD example
ENV MYSQL_DATABASE company

# 파일 복사
COPY ./sql-scripts/ /docker-entrypoint-initdb.d/

# Run app
CMD ["--default-authentication-plugin=mysql_native_password"]