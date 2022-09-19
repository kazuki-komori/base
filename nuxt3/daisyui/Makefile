.PHONY: install
install:
	@echo ""
	@echo "------------------------"
	@echo "Install dependencies"
	@echo "------------------------"
	@echo ""
	npm ci
	@echo ""

.PHONY: fix
fix:
	@echo ""
	@echo "------------------------"
	@echo "formatting code..."
	@echo "------------------------"
	@echo ""
	npx eslint --ext .ts,.js,.vue . --fix
	@echo ""

.PHONY: lint
lint:
	@echo ""
	@echo "------------------------"
	@echo "checking code..."
	@echo "------------------------"
	@echo ""
	npx eslint --ext .ts,.js,.vue .
	@echo ""