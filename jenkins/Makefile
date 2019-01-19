stop:
	- docker stop jenkins-master
clean: stop
	- docker rm jenkins-master
clean-data:  clean
	- docker volume rm jenkins-log
	- docker volume rm jenkins-data
build:
	docker build -t myjenkins .
create-data: clean
	docker volume create jenkins-data
	docker volume create jenkins-log
# cria um container jenkins, e entre outras coisas, monta o volume criado para logs
run: create-data
	docker run -p 8085:8080 -p 50000:50000 --name=jenkins-master --mount source=jenkins-log,target=/var/log/jenkins --mount source=jenkins-data,target=/var/jenkins_home -d myjenkins
bash:
	docker container exec -i -t jenkins-master bash