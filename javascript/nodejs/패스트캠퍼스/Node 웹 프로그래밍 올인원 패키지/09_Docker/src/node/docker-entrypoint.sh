
#!/bin/bash
# 아래 "db_url" 따옴표유지
mysql_host="db_url"
mysql_port=3306

# mysql container가 뜨기전엔 시작안함
while ! nc $mysql_host $mysql_port; do  
  >&2 echo "Mysql is unavailable"
  sleep 1
done

# Nodejs 시작
echo "Start nodejs"  
node  /src/server.js
