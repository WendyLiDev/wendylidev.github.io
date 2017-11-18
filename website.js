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

	// if($('#rocks').hasClass('rocks2')) {
	// 	$('#rocks').removeClass('rocks2');
	// 	$('#rocks').addClass('rocks3');
	// }
	// else if($('#rocks').hasClass('rocks3')) {
	// 	$('#rocks').removeClass('rocks3');
	// }
	// else {
	// 	$('#rocks').addClass('rocks2');
	// }
}, 800);
