FROM mongo
LABEL maintainer="jovanibrasil@gmail.com"

ENV MONGO_INITDB_ROOT_USERNAME=root 
ENV MONGO_INITDB_ROOT_PASSWORD=root

ENV MONGO_INITDB_DATABASE=notesdb  

# All scripts in docker-entrypoint-initdb.d/ are automatically executed 
# during container startup when the database folder is empty.
COPY ./mongo-scripts/ /docker-entrypoint-initdb.d/
