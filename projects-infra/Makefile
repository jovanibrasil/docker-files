compose-down:
	docker-compose down	

compose-up: compose-down
	docker-compose -f docker-compose.yml --compatibility up -d --build 
	
mongo-bash:
	docker container exec -i -t --user admin mongo-database bash
