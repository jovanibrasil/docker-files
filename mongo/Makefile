stop:
	- docker stop mongodb
clean: stop
	- docker rm mongodb
clean-data:  clean
	- docker volume rm mongodb-log
	- docker volume rm mongodb-data
create-data: clean-data
	docker volume create mongodb-data
	docker volume create mongodb-log
run: clean 
	docker run -p 27017:27017 -p 28017:28017 --name=mongodb --mount source=mongodb-log,target=/var/log/mongodb --mount source=mongodb-data,target=/var/lib/mongodb -e AUTH=no -d mongo
start:
	docker start mongodb
bash:
	docker container exec -i -t --user root mongodb bash
