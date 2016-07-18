$(document).ready(function(){
	// model
	var count = 0;

	// view
	function countUp() {
		count = count + 1;
		$('#count-display').html(count);
	};

	function countDown() {
		count = count - 1;
		$('#count-display').html(count);
	};

	// controller
	$('button#count-up').on('click', countUp);

	$('button#count-down').on('click', countDown);

	$('button#zero').on('click', resetZero);

	$('button').on('click', resetColor);

	function resetColor() {
		if (count > 100) {
			$('#count-display').removeClass();
			$('#count-display').addClass('text-red')
		} else if (count < 0) {
			$('#count-display').removeClass();
			$('#count-display').addClass('text-blue');
		} else {
			$('#count-display').removeClass();
		}
	}

	function resetZero() {
		count = 0;
		$('#count-display').html(count);
	}
})