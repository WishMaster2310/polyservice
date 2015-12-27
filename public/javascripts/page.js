$(document).ready(function() {

	// init mosaiflow
	// docs here --> [https://github.com/sapegin/jquery.mosaicflow/blob/master/Readme.md]
	$('.works').mosaicflow({
	    itemSelector: '.works__item',
	    minItemWidth: 300,
	    columnClass: 'works__col'
	});

	// init wow scroll animations
	new WOW().init();

});