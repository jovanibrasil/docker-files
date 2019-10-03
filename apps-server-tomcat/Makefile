stop:
	- docker stop apps-server
clean: stop
	- docker rm apps-server
build: clean
	docker build -t apps-server .
run: clean
	docker run -d -p 8090:8080 -m 256m --memory-swap 512m -e VAULT_TOKEN=${VAULT_TOKEN} --name=apps-server --network net apps-server
start: stop
	docker start apps-server
bash:
	docker container exec -i -t --user root apps-server bash
logs:
	docker logs apps-server
