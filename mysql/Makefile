stop:
	- docker stop mysql-master
clean: stop
	- docker rm mysql-master
clean-data:  clean
	- docker volume rm mysql-data
create-data: clean-data
	docker volume create mysql-data
# cria um container com o mysql montando o volume criado para os dados
run:
	docker run -p 3306:3306 --name=mysql-master --mount source=mysql-data,target=/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root -d mysql
# rodando o container criado
start:
	docker start mysql-master 
bash:
	docker container exec -i -t mysql-master bash

# mysql -u root -p
