#!/usr/bin/env bash
# description: init db with test data through server npm commands

NODE_CONTAINER='mentorship-portal_server_1'

# clean and remove any existing database 
docker exec -t -i $NODE_CONTAINER npm run db:clean
docker exec -t -i $NODE_CONTAINER npm run migrate:undo

# run migrate script in server docker container
docker exec -t -i $NODE_CONTAINER npm run migrate

# run seed:all script in server docker container
docker exec -t -i $NODE_CONTAINER npm run seed:all