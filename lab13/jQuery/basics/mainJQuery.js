$( function() {
	output = $('.output');

	$('button').click( function (e) {
		console.dir(e);
		output.fadeOut(1000);
	})
});

