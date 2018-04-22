mongod.exe --replSet book --port 27017 --dbpath ./mongo1 --bind_ip 192.168.1.228
mongod.exe --replSet book --port 27018 --dbpath ./mongo2 --bind_ip 192.168.1.228
mongod.exe --replSet book --port 27019 --dbpath ./mongo3 --bind_ip 192.168.1.228

mongo.exe --host 192.168.1.228:27017 book

var cfg = {
	"_id": "book",
	"version": 1,
	"members": [
		{
			"_id": 0,
			"host": "192.168.1.228:27017",
			"priority": 1
		},
		{
			"_id": 1,
			"host": "192.168.1.228:27018",
			"priority": 0
		},
		{
			"_id": 2,
			"host": "192.168.1.228:27019",
			"priority": 0
		}
	]
}

rs.initiate( cfg );

db.getMongo().setReadPref('nearest')

rs.status

db.name.insert(
	{
		name: "Noel Victorino"
	}
)

db.name.find()

db.setSlaveOK(true)
----------------------- Sharding -----------------------

cd Desktop
mkdir mongo_sharding
cd mongo_sharding

mkdir config
mkdir config2

mkdir node10
mkdir node11
mkdir node12

mkdir node20
mkdir node21
mkdir node22

-- Powershell #2 --

cd Desktop
cd mongo_sharding

mongod --configsvr --replSet config --dbpath config --bind_ip localhost --port 27010

rs.initiate({
	_id: "config",
	configsvr: true,
	members: [
		{ _id: 0, host: "localhost:27010"},
		{ _id: 1, host: "localhost:27011"}
	]
})

mkdir config2
mongod --config svr --replSet config --dbpath config2 --bind_ip localhost --port 27011

-- Powershell #3-6 --

mongod --shardsvr --replSet node1 -dbpath node10 --bind_ip localhost --port 27012
mongod --shardsvr --replSet node1 -dbpath node11 --bind_ip localhost --port 27013
mongod --shardsvr --replSet node2 -dbpath node20 --bind_ip localhost --port 27015
mongod --shardsvr --replSet node2 -dbpath node21 --bind_ip localhost --port 27016

-- Powershell #7 --

cd Desktop
cd mongo_sharding

mongo --port 27012

rs.initiate({
	_id: "node1",
	members: [
		{ _id: 0, host: "localhost:27012"},
		{ _id: 1, host: "localhost:27013"}
	]
})

exit

mongo --port 27015

rs.initiate({
	_id: "node2",
	members: [
		{ _id: 0, host: "localhost:27015"},
		{ _id: 1, host: "localhost:27016"}
	]
})

exit

mongos.exe --configdb config/localhost:27010,localhost:27011 --bind_ip localhost --port 27018

-- Powershell #8 --

cd Desktop
cd mongo_sharding

mongo --port 27018
sh.addShard('node1/localhost:27012')
sh.addShard('node2/localhost:27015')

-- import first --

sh.enableSharding('book')