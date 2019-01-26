stop:
	-docker stop tomcat-master
clean: stop
	-docker rm tomcat-master
clean-data:  clean
	-docker volume rm tomcat-log
	-docker volume rm tomcat-data
create-data: clean-data
	docker volume create tomcat-data
	docker volume create tomcat-log
# cria um container jenkins, e entre outras coisas, monta o volume criado para logs
run: clean 
	docker run -p 8086:8080 --name=tomcat-master --network net --mount source=tomcat-log,target=/usr/local/tomcat/log --mount source=tomcat-data,target=/usr/local/tomcat/webapps -d tomcat
start:
	docker start tomcat-master 
bash:
	docker container exec -i -t tomcat-master bash


# context.xml
# Aditional step to allow manager pages access
#<Context antiResourceLocking="false" privileged="true" >
#   <!--
#    <Valve className="org.apache.catalina.valves.RemoteAddrValve"
#         allow="127\.\d+\.\d+\.\d+|::1|0:0:0:0:0:0:0:1" />
#    -->
#</Context>

# tomcat-users.xml
# <role rolename="manager-script"/>
# <role rolename="manager-gui"/>
# <user username="jovani" password="jovani48" roles="manager-gui,manager-script"/>
