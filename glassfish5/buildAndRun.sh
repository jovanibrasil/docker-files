#!/bin/sh
mvn clean package && docker build -t glassfish5 .
docker rm -f glassfish5 || true && docker run -d -p 8080:8080 -p 4848:4848 --name glassfish5 glassfish5 
