stop:
	- docker stop jenkins-master
clean: stop
	- docker rm jenkins-master
clean-data:  clean
	- docker volume rm jenkins-log
	- docker volume rm jenkins-data
build: clean
	docker build -t myjenkins .
create-data: clean-data
	docker volume create jenkins-data
	docker volume create jenkins-log
# cria um container jenkins, e entre outras coisas, monta os volumes para dados e logs
run: clean 
	docker run -p 8085:8080 -p 50000:50000 --name=jenkins-master -m 384m --memory-swap 512m --network net --mount source=jenkins-log,target=/var/log/jenkins --mount source=jenkins-data,target=/var/jenkins_home -d myjenkins
start:
	docker start jenkins-master 
bash:
	docker container exec -i -t --user root jenkins-master bash
logs:
	docker logs jenkins-master
