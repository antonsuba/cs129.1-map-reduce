# Shards
mongod --shardsvr --replSet mongors1 --dbpath /data/mongors1n1 --port 27017
mongod --shardsvr --replSet mongors1 --dbpath /data/mongors1n2 --port 27018
mongod --shardsvr --replSet mongors1 --dbpath /data/mongors1n3 --port 27019

mongod --shardsvr --replSet mongors2 --dbpath /data/mongors2n1 --port 27020
mongod --shardsvr --replSet mongors2 --dbpath /data/mongors2n2 --port 27021
mongod --shardsvr --replSet mongors2 --dbpath /data/mongors2n3 --port 27022

mongod --shardsvr --replSet mongors3 --dbpath /data/mongors3n1 --port 27023
mongod --shardsvr --replSet mongors3 --dbpath /data/mongors3n2 --port 27024
mongod --shardsvr --replSet mongors3 --dbpath /data/mongors3n3 --port 27025

# Config servers
mongod --configsvr --replSet mongocfg --dbpath /data/mongocfg1 --port 27026
mongod --configsvr --replSet mongocfg --dbpath /data/mongocfg2 --port 27027

# Router
mongos --configdb mongocfg/localhost:27026,localhost:27027

# Config scripts
mongo --port 27026 < config/config.js

mongo --port 27017 < config/repl1.js
mongo --port 27020 < config/repl2.js
mongo --port 27023 < config/repl3.js

mongo < config/mongos.js
