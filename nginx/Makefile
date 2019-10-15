CURRENT_DIR=$(shell pwd)

stop:
	- docker stop nginx
clean: stop
	- docker rm nginx
build: clean
	docker build -t nginx .
run: clean
	docker run --name nginx -p 8080:80 -m 64mb \
	 -v ${CURRENT_DIR}/certificates:/etc/letsencrypt/live/ \
	 -v ${CURRENT_DIR}/logs:/var/log/nginx/  nginx 
#	docker run -p 8085:8080 -p 50000:50000 --name=jenkins-master -m 384m --memory-swap 512m --network net --mount source=jenkins-log,target=/var/log/jenkins --mount source=jenkins-data,target=/var/jenkins_home -d myjenkins
start:
	docker start nginx
bash:
	docker container exec -i -t --user root nginx /bin/sh
logs:
	docker logs nginx
