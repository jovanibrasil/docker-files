stop:
	- docker stop apps-server
clean: stop
	- docker rm apps-server
build: clean
	docker build -t apps-server .
run: clean
	docker run -d -p 8090:8080 -m 1024m --memory-swap 1024m -e VAULT_TOKEN=${VAULT_TOKEN} \
	    -v /var/www/blog/images/banners:/apps/blog/images/banners   \
	    -e SPRING_PROFILES_ACTIVE=${SPRING_PROFILES_ACTIVE} --name=apps-server --network net apps-server
start: stop
	docker start apps-server
bash:
	docker container exec -i -t --user root apps-server bash
logs:
	docker logs apps-server
