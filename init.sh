#!/bin/bash

docker exec mapreduce_mongocfg1 bash -c "mongo --port 27017 < /app/config/config.js"

docker exec mapreduce_mongors1n1 bash -c "mongo --port 27018 < /app/config/repl1.js"
docker exec mapreduce_mongors2n1 bash -c "mongo --port 27019 < /app/config/repl2.js"
docker exec mapreduce_mongors3n1 bash -c "mongo --port 27020 < /app/config/repl3.js"

echo "Waiting for replica set config to finish"
sleep 20

docker exec mapreduce_mongos1 bash -c "mongo < /app/config/mongos.js"
docker exec -it mapreduce_mongos1 mongo
