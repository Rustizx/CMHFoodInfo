dev:
	docker-compose up
start:
	docker-compose up -d
login-client:
	docker exec -it cmhfoodinfo_client sh
login-server:
	docker exec -it cmhfoodinfo_server sh
login-database:
	docker exec -it cmhfoodinfo_database mongo