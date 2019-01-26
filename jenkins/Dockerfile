FROM jenkins/jenkins:lts
LABEL maintainer="jovanibrasil@gmail.com"
USER root
    RUN mkdir /var/log/jenkins
    RUN mkdir /var/cache/jenkins
    RUN chown -R jenkins:jenkins /var/log/jenkins
    RUN chown -R jenkins:jenkins /var/cache/jenkins
    RUN apt-get update && apt-get install -y maven
    RUN apt-get upgrade -y
USER jenkins
    ENV JENKINS_OPTS="--handlerCountMax=300 --logfile=/var/log/jenkins/jenkins.log --webroot=/var/cache/jenkins/war"
