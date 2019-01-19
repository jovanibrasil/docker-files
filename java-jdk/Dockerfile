# Esta imagem será baseada na imagem phusion/baseimage:0.9.17
FROM phusion/baseimage:0.9.17
# Adiciona repositório e instala alguns pacotes
RUN echo "deb http://archive.ubuntu.com/ubuntu trusty main universe" > /etc/apt/sources.list
RUN apt-get -y update
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y -q python-software-properties software-properties-common
# Define variáveis de ambiente
ENV JAVA_VER 8
ENV JAVA_HOME /usr/lib/jvm/java-8-oracle
# Realiza a instalação do Java JDK
RUN echo 'deb http://ppa.launchpad.net/webupd8team/java/ubuntu trusty main' >> /etc/apt/sources.list && \
 echo 'deb-src http://ppa.launchpad.net/webupd8team/java/ubuntu trusty main' >> /etc/apt/sources.list && \
 apt-key adv --keyserver keyserver.ubuntu.com --recv-keys C2518248EEA14886 && \
 apt-get update && \
 echo oracle-java${JAVA_VER}-installer shared/accepted-oracle-license-v1-1 select true | sudo /usr/bin/debconf-set-selections && \
 apt-get install -y --force-yes --no-install-recommends oracle-java${JAVA_VER}-installer oracle-java${JAVA_VER}-set-default && \
 apt-get clean && \
 rm -rf /var/cache/oracle-jdk${JAVA_VER}-installer
 
RUN update-java-alternatives -s java-8-oracle
RUN echo "export JAVA_HOME=/usr/lib/jvm/java-8-oracle" >> ~/.bashrc
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
# Comando de inicialização. Aqui foi definido um comando fake.
CMD ["/sbin/my_init"]


# Build da imagem -t acrescenta uma tag 
# sudo docker build -t meujava:8 .

# Realiza mapeamento de diretórios e compila a aplicação
# Mapeia diretório atual do host para o /app do container, e no container define o diretório de trabalho como /app.
# sudo docker run --rm -v $PWD:/app -w /app meujava:8 javac Main.java

# Executa o arquivo compilado.
# sudo docker run --rm -v $PWD:/app -w /app meujava:8 java Main