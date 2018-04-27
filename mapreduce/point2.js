var map = function(){
	var raw_date = this.components.trending_date; //data set date format: yy.dd.mm
	var year = "20" + raw_date.substr(0,2);
	var day = raw_date.substr(3,2);
	var month = raw_date.substr(6,2);
	var date = year + "-" + day + "-" + month;

	emit(
		{
			country: this.components.country, 
			category: this.components.category_id,
			week: {$week: new Date(date)}
		},
		{	
			count: 1
		}
	)
} 

var reduce = function(key, values){
	var count = 0;
	for(var i = 0; i < values.length; i++){
		count++
	}

	return {
		count: count
	};
}

db.runCommand({
	mapReduce: 'videos',
	map: map,
	reduce: reduce,
	out: 'videos.report2'
});
