FROM tomcat
LABEL maintainer="jovanibrasil@gmail.com"

USER root
RUN apt-get -y update && apt-get -y install apt-utils vim

ARG VAULT_TOKEN
ENV VAULT_TOKEN=${VAULT_TOKEN}
ENV VAULT_ADDR=http://vault-server:8200

COPY ./configuration/ /usr/local/tomcat/conf

EXPOSE 8080
