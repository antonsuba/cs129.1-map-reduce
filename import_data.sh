#!/bin/bash

docker exec mapreduce_mongos1 bash -c "mongoimport -d youtube-trending -c videos --type csv --file /app/dataset/USvideos.csv --headerline"
docker exec mapreduce_mongos1 bash -c "mongoimport -d youtube-trending -c videos --type csv --file /app/dataset/DEvideos.csv --headerline"
docker exec mapreduce_mongos1 bash -c "mongoimport -d youtube-trending -c videos --type csv --file /app/dataset/GBvideos.csv --headerline"
# docker exec mapreduce_mongos1 bash -c "mongoimport -d youtube-trending -c videos --type csv --file /app/dataset/FRvideos.csv --headerline"
# docker exec mapreduce_mongos1 bash -c "mongoimport -d youtube-trending -c videos --type csv --file /app/dataset/CAvideos.csv --headerline"
