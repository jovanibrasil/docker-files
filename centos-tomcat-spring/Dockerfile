FROM centos

#RUN yum install -y java-8-openjdk
RUN yum install -y java-11-openjdk

# Directory that spring boot will store temp files
VOLUME /tmp 
# Add the application as myapp.jar
#ADD /spring-boot-web-0.0.1-SNAPSHOT.jar myapp.jar
ADD /pet-clinic-web-0.0.3.jar myapp.jar
# Update the date on the jar file. Could be important for static resources e.g. if we had cache. 
RUN sh -c 'touch /myapp.jar'
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/myapp.jar"]