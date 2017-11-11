setInterval(function() {
	if($('#stars').hasClass('starAnimate2')) {
		$('#stars').removeClass('starAnimate2');
		$('#stars').addClass('starAnimate3');
	}
	else if($('#stars').hasClass('starAnimate3')) {
		$('#stars').removeClass('starAnimate3');
	}
	else {
		$('#stars').addClass('starAnimate2');
	}
}, 800);