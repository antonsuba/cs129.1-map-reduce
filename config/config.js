rs.initiate({
	_id: 'mapreduce_mongocfg1',
	configsvr: true,
	members: [
		{ _id: 0, host: 'mapreduce_mongocfg1:27017'},
		{ _id: 1, host: 'mapreduce_mongocfg2:27017'}
	]
})
