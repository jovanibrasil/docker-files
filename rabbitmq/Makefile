#15672 - HTTP API clients, management UI and rabbitmqadmin
#5671 e 5672 - used by AMQP
default-rabbitmq:
	- docker stop rabbitmq
	- docker rm rabbitmq
	docker run -p 8080:15672 -p 5671:5671 -p 5672:5672 \
	--name=rabbitmq -e RABBITMQ_DEFAULT_USER=user -e RABBITMQ_DEFAULT_PASS=password \
	-d rabbitmq:3-management

stop:
	- docker stop rabbitmq
clean: stop
	- docker rm rabbitmq
build: clean
	docker build -t rabbitmq .
stop:
	- docker stop rabbitmq
	- docker rm rabbitmq
run: stop
	docker run -d --hostname rabbitmq --network net --name rabbitmq -p 8080:15672 -p 5672:5672 rabbitmq
