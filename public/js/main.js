$(document).ready(function(){
	$.ajax({
		url: "/instagram",
	}).done(function(data) {
		var parsed = JSON.parse(data);
		var picContainer = $("#picContainer");
		if(picContainer){
			for(var i = 0; i < parsed.length; i++){
		        picContainer.append("<img id='grid' src='" + parsed[i] + "'alt='pic' />");
		    }
		}
	});
});