var map = function(){
	emit(
		{
			category: this.components.category_id,
			trending_date: this.components.trending_date
		},
		{	
			videos: [this.components.title],
			total_views: this.components.views,
			count: 1
		}
	)
} 

var reduce = function(key, values){
	var total_views = 0;
	var videos = [];
	var count = 0;
	for(var i = 0; i < values.length; i++){
		total_views += values[i].total_views;
		videos[i] = values[i].videos[0];
		count++
	}

	return {
		videos: videos,
		total_views: total_views,
		count: count
	};
}