// Add shards
sh.addShard('mongors1/mongors1n1:27018')
sh.addShard('mongors1/mongors1n2:27018')
sh.addShard('mongors1/mongors1n3:27018')

sh.addShard('mongors2/mongors2n1:27019')
sh.addShard('mongors2/mongors2n2:27019')
sh.addShard('mongors2/mongors2n3:27019')

sh.addShard('mongors3/mongors3n1:27020')
sh.addShard('mongors3/mongors3n2:27020')
sh.addShard('mongors3/mongors3n3:27020')

// Configure sharding
sh.enableSharding('youtube-trending')

db.createCollection('videos')
db.videos.ensureIndex({'_id': 'hashed'})
sh.shardCollection('youtube-trending.videos', {'_id': 'hashed'})
