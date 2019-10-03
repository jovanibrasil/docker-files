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

.PHONY:logs

CURRENT_DIR=$(shell pwd)

clean:
	- docker stop vault-server
	- docker rm vault-server

run-prod: clean
	#docker run -d -p 8200:8200 --name=vault-server --network net --cap-add=IPC_LOCK -v ${CURRENT_DIR}:/vault -e 'VAULT_LOCAL_CONFIG={ "listener": [{ "tcp": { "address": "127.0.0.1:8200", "tls_disable" : 1 } }], "storage" :{ "file" : { "path" : "/vault/data" } }, "max_lease_ttl": "1000h", "default_lease_ttl": "1000h" }' vault server
	docker run -d -p 8200:8200 -v ${CURRENT_DIR}:/vault -m 128m --name=vault-server --cap-add=IPC_LOCK --network net vault
run-dev:
	docker run -d -p 8200:8200 -m 256m --name vault-server --network net -e 'VAULT_DEV_ROOT_TOKEN_ID=s8ynaMrJvQPVq2BEPRxgceHcG' -e 'VAULT_DEV_LISTEN_ADDRESS=0.0.0.0:8200' vault
start:
	docker start vault-server
bash:
	docker exec -i -t --user root vault-server /bin/sh

# Vault configuration tutorial: https://blog.ruanbekker.com/blog/2019/05/06/setup-hashicorp-vault-server-on-docker-and-cli-guide/
