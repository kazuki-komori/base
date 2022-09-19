# env
# ==============================================================
ENV_FILE:=.env.local
# ==============================================================


include $(ENV_FILE)
ENV:=$(shell cat $(ENV_FILE))

# DIR
DIR_DATA:=./postgres/data

# Arg
ARG_WORK_DIR:=/go/src/github.com/$(PROJECT_OWNER)/$(ARG_PROJECT_NAME)

# commands
RM:=rm -rf

# Start Server
.PHONY: start
start:
	@echo ""
	@echo "------------------------"
	@echo "Start the docker-compose environment."
	@echo "Please wait ..."
	@echo "------------------------"
	@echo ""
	$(ENV) ENV_FILE=$(ENV_FILE) docker-compose up -d --build
	@echo ""
	@echo "The docker-compose environment has been successfully built."
	@echo ""
	$(ENV) ENV_FILE=$(ENV_FILE) docker-compose ps
	@echo ""

.PHONY: down
down:
	@echo ""
	@echo "------------------------"
	@echo "Down the docker-compose environment"
	@echo "Please wait ..."
	@echo "------------------------"
	@echo ""
	$(ENV) ENV_FILE=$(ENV_FILE) docker-compose down --rmi all --volumes --remove-orphans
	@echo ""
	@echo "The docker-compose environment has been successfully down."
	@echo ""

.PHONY: delete-db
delete-db:
	@echo ""
	@echo "------------------------"
	@echo "delete db ..."
	@echo ""
	$(RM) $(DIR_DATA)
	@echo ""
	@echo "delete db success"
	@echo "------------------------"
	@echo ""

# dbやcacheも削除してから再起動
.PHONY: re
re: delete-db down start

# log
.PHONY: log
log:
	$(ENV) ENV_FILE=$(ENV_FILE) docker-compose logs -f
