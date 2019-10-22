# Instructions:
# 1. sudo make run
# 2. sudo make start
# 3. sudo make bash
# 4. export VAULT_ADDR='http://127.0.0.1:8200'
# 5. vault operator init
# Unseal the vault cluster
# 6. vault operator unseal {key1}
# 7. vault operator unseal {key2}
# 8. vault operator unseal {key3}
# View status
# 9. vault status -format=json
# 10. vault login {token}
# Enable secrets engine
# 11. vault secrets enable -version=1 -path=secret kv
# Create secrets
# 12. vault kv put secret/app/prod app-cred.url=vault.com app-cred.username=root app-cred.password=secret
#	  vault kv put secret/blog-api/prod blog-cred.url=jdbc:mysql://mysql-database:3306/blogdb blog-cred.username=root blog-cred.password=root

.PHONY:logs build image publish clean run-prod run-dev start bash

REGISTRY_NAME?=docker.io/hashicorp
IMAGE_NAME=vault-server
VERSION=1.2.3
IMAGE_TAG=$(REGISTRY_NAME)/$(IMAGE_NAME):$(VERSION)

VAULT_DEV_ROOT_TOKEN=s8ynaMrJvQPVq2BEPRxgceHcG

CURRENT_DIR=$(shell pwd)

clean-data:  clean
	- docker volume rm vault-logs
	- docker volume rm vault-data

create-data: clean-data
	docker volume create vault-data
	docker volume create vault-logs

clean:
	- docker stop ${IMAGE_NAME}
	- docker rm ${IMAGE_NAME}

build:
	docker build --build-arg VAULT_VERSION=$(VERSION) --no-cache -t ${IMAGE_NAME} .

run-prod: clean
	docker run -d -p 8200:8200 -m 256m --name=${IMAGE_NAME} \
	 -v vault-logs:/vault/logs -v vault-data:/vault/file \
	 --cap-add=IPC_LOCK --network net ${IMAGE_NAME}

run-dev: clean
	docker run -d -p 8200:8200 -m 256m --name vault-server --network net \
	 -e 'VAULT_DEV_ROOT_TOKEN_ID=${VAULT_DEV_ROOT_TOKEN}' -e 'VAULT_DEV_LISTEN_ADDRESS=0.0.0.0:8200' vault
	docker exec -i -t vault-server /bin/sh -c "export VAULT_ADDR='http://127.0.0.1:8200' && \
	       vault login ${VAULT_DEV_ROOT_TOKEN} && \
	       vault kv put secret/blog-api/dev blog-cred.url=jdbc:mysql://mysql-database:3306/blogdb blog-cred.username=root blog-cred.password=root"
start:
	docker start vault-server

bash:
	docker exec -i -t --user root vault-server /bin/sh

# Vault configuration tutorial: https://blog.ruanbekker.com/blog/2019/05/06/setup-hashicorp-vault-server-on-docker-and-cli-guide/

#build: image publish

#image: #
#	docker build --build-arg VAULT_VERSION=$(VERSION)+ent --no-cache -t $(IMAGE_TAG)_ent .
#	docker build --build-arg VAULT_VERSION=$(VERSION)+ent.hsm --no-cache -t $(IMAGE_TAG)_ent.hsm .

#publish: 
#	docker push $(IMAGE_TAG)_ent
#	docker push $(IMAGE_TAG)_ent.hsm
