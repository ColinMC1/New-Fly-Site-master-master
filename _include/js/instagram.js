

$(document).ready(function() {

	var id =  '66d6fad4212c4100a81d1d5ba244631d';
	var photoCount = 6;

	$.ajax({
	  type: "GET",
	  dataType: "jsonp",
	  cache: false,
	  url: "https://api.instagram.com/v1/tags/flyqueenwest/media/recent?client_id=" + id, 
	  success: function(response) {
	  	console.log(response);
	    var length = response.data != 'undefined' ? response.data.length : 0;
	    var limit = photoCount != null && photoCount < length ? photoCount : length;
	    if(limit > 0) {
	      for(var i = 0; i < limit; i++) {
	        $('<img>', {
	          class: "span2",
	          src: response.data[i].images.standard_resolution.url
	        }).appendTo($("#instagram-feed-photos"));
	      }
	    }
	  }
	});
});