FROM postgres
LABEL maintainer="jovanibrasil@gmail.com"

ENV POSTGRES_PASSWORD=postgres 
ENV POSTGRES_USER=postgres

# All scripts in docker-entrypoint-initdb.d/ are automatically executed 
# during container startup when the database folder is empty.
COPY ./postgres-scripts/ /docker-entrypoint-initdb.d/
COPY ./postgres-database-data /var/lib/
