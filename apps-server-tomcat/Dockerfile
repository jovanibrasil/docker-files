FROM tomcat
LABEL maintainer="jovanibrasil@gmail.com"

USER root
RUN apt-get -y update && apt-get -y install apt-utils vim

ARG VAULT_TOKEN
ARG SPRING_PROFILES_ACTIVE

ENV VAULT_TOKEN=${VAULT_TOKEN}
ENV VAULT_ADDR=http://vault-server:8200
ENV SPRING_PROFILES_ACTIVE=$SPRING_PROFILES_ACTIVE

RUN mkdir -p /apps/blog/images/banners/
COPY ./configuration/ /usr/local/tomcat/conf

EXPOSE 8080
