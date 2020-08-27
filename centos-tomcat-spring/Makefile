clean:
	- docker stop spring-boot-docker
	- docker rm spring-boot-docker
build:
	docker build -t spring-boot-docker .
run: clean
	docker run -d --name=spring-boot-docker -p 8080:8080 spring-boot-docker

default-centos-run:
	docker run --name=centos -it --rm -d centos
default-centos-bash:
	docker exec -it centos bash