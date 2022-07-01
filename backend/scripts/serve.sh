#!/bin/bash

set -e 

export DB_NAME=debateDB
export DB_PSWRD=123456
export DB_USR=panther
export WORKING_DIR="$PWD"
export DB_HOST=localhost
export VOL="debatedata"


function finish {
  echo "Cleaning up...."
  docker kill "$DB_NAME" &> /dev/null
}

trap finish EXIT

docker ps &> /dev/null || {
  echo "Check to see if container is up"
}

if [ ! "$(docker volume ls -q -f name=$VOL)" ]; then
  echo "Creating volume"
  docker volume create --name="$VOL" &> /dev/null
fi 

echo "Starting db..."
if [ ! "$(docker ps -aq -f name=$DB_NAME)" ]; then

  docker run --name="$DB_NAME" -e "POSTGRES_DB=$DB_NAME" \
    -e "POSTGRES_PASSWORD=$DB_PSWRD" -e "POSTGRES_USER=$DB_USR" \
    -v "$VOL":/var/lib/postgresql/data -d -p 5432:5432 postgres
    echo 
else
  docker start "$DB_NAME" &> /dev/null
fi

sleep 3

yarn run dev
echo "Starting server"