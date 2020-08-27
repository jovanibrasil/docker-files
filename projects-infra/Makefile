compose-down:
	docker-compose down -v --remove-orphans
	- docker stop mongo-database
	- docker rm mongo-database
	- docker stop postgres
	- docker rm postgres
	- docker stop rabbitmq
	- docker rm rabbitmq	
compose-up: compose-down
	docker-compose -f docker-compose.yml --compatibility up --build 
	
mongo-bash:
	docker container exec -i -t --user root mongo-database bash
