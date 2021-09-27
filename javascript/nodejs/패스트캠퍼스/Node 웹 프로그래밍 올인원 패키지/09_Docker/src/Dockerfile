# centOS 이미지를 기반으로 작성
FROM centos:latest

# 아파치를 설치
RUN yum install -y httpd

# 현재 폴더의 index.html 파일을 아파치 첫호면으로 복사
COPY index.html /var/www/html/

# 아파치 실행
CMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]