(function ($) {
	$(document).ready(function(){
		$.getJSON('data.js', function(data) {
			console.log(data.body.photos[0].tags[0]);
			var allAttributes = data.body.photos[0].tags[0];
			var centerX = allAttributes.center['x'];
			var centerY = allAttributes.center['y'];
			var faceW = allAttributes.width;
			var faceH = allAttributes.height;
			var eyeLX = parseInt(allAttributes.eye_left['x']) - 10;
			var eyeLY = parseInt(allAttributes.eye_left['y']) - 10;
			var eyeRX = parseInt(allAttributes.eye_right['x']) - 10;
			var eyeRY = parseInt(allAttributes.eye_right['y']) - 10;
			$("#image-area").append("<div style=\"width:"+faceW+"px;height:"+faceH+"px;position:absolute;top:"+centerY+"px;left:"+centerX+"px;margin-top:-"+faceH/2+"px;margin-left:-"+faceW/2+"px; border:solid 2px #000;\"></div>");
			$("#image-area").append("<div style=\"position:absolute;top:"+eyeLY+"px;left:"+eyeLX+"px; border:solid 2px #ff0000; width:20px; height:20px;\"></div>");
			$("#image-area").append("<div style=\"position:absolute;top:"+eyeRY+"px;left:"+eyeRX+"px; border:solid 2px #ff0000; width:20px; height:20px;\"></div>");
		})
	})
})(jQuery);