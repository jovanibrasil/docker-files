stop:
	- docker stop postgres
clean: stop
	- docker rm postgres
build: clean
	docker build -t postgres .
run:
	docker run -p 5432:5432 --name=postgres --network net -d postgres
fresh-run: clean clean-data build run
start:
	docker start postgres 
bash:
	docker container exec -i -t postgres bash

