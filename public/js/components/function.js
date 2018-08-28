 $(window).scroll(function() {
	$('.mov').each(function() {
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if(imagePos < topOfWindow + 900) {
			$(this).addClass('wobble');
		}
	})
})

$(window).scroll(function() {
	$('.mov2').each(function() {
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if(imagePos < topOfWindow + 900) {
			$(this).addClass('fadeInLeft');
		}
	})
})

$(window).scroll(function() {
	$('.mov3').each(function() {
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if(imagePos < topOfWindow + 900) {
			$(this).addClass('fadeInRight');
		}
	})
})

$(window).scroll(function() {
	$('.mov4').each(function() {
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if(imagePos < topOfWindow + 900) {
			$(this).addClass('rollIn');
		}
	})
})


$(window).scroll(function() {
	$('.new-info').each(function() {
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if(imagePos < topOfWindow + 900) {
			$(this).addClass('zoomInUp');
		}
	})
})

