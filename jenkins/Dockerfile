FROM jenkins/jenkins:lts-alpine
LABEL maintainer="jovanibrasil@gmail.com"
USER root
    RUN mkdir /var/log/jenkins
    RUN mkdir /var/cache/jenkins
    RUN chown -R jenkins:jenkins /var/log/jenkins
    RUN chown -R jenkins:jenkins /var/cache/jenkins
    RUN apk update && apk add maven
    RUN apk upgrade
USER jenkins
    ENV JENKINS_OPTS="--handlerCountMax=300 --logfile=/var/log/jenkins/jenkins.log --webroot=/var/cache/jenkins/war"
