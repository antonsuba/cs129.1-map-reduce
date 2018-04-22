mongod --replSet mongors1 --dbpath /data/mongors1n1 --port 27017
mongod --replSet mongors1 --dbpath /data/mongors1n2 --port 27018
mongod --replSet mongors1 --dbpath /data/mongors1n3 --port 27019
mongod --replSet mongors2 --dbpath /data/mongors2n1 --port 27020
mongod --replSet mongors2 --dbpath /data/mongors2n2 --port 27021
mongod --replSet mongors2 --dbpath /data/mongors2n3 --port 27022
mongod --replSet mongors3 --dbpath /data/mongors3n1 --port 27023
mongod --replSet mongors3 --dbpath /data/mongors3n2 --port 27024
mongod --replSet mongors3 --dbpath /data/mongors3n3 --port 27025

mongod --configsvr --replSet mongocfg --dbpath /data/mongocfg1 --port 27026
mongod --configsvr --replSet mongocfg --dbpath /data/mongocfg2 --port 27027

mongos --configdb localhost:27026,localhost:27027
