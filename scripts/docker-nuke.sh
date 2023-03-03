#!/usr/bin/env bash


CLIENT_IMAGE='mentorship-portal_server_1'
SERVER_IMAGE='mentorship-portal_server_1'
CLIENT_CONTAINER='mentorship-portal_server_1'
SERVER_CONTAINER='mentorship-portal_server_1'


# remove app containers and images
docker container stop $CLIENT_CONTAINER
docker container rm $CLIENT_CONTAINER
docker image rm $CLIENT_IMAGE

# remove api containers and images
docker container stop $SERVER_CONTAINER
docker container rm $SERVER_CONTAINER
docker image rm $SERVER_IMAGE

# remove db containers and images
docker container stop mentorship-portal-postgres-1
docker container rm mentorship-portal-postgres-1 -f
docker image rm postgres -f

# remove server->db volume
docker volume rm mentorship-portal_server-db
# remove network 
docker network rm mentorship-portal_default