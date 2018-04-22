rs.initiate({
	_id: "mongors2",
	members: [
		{ _id: 0, host: "mongors2n1:27019"},
		{ _id: 1, host: "mongors2n2:27019"},
		{ _id: 2, host: "mongors2n3:27019"},
	]
})
