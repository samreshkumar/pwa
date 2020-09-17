$(document).ready(function() {
	var owl = $('.banner .owl-carousel');
	owl.owlCarousel({
	nav: true,
	autoplay:1000,
	loop: true,
	responsive: {
		0: {
		items: 1
		},
		600: {
		items: 1
		},
		1000: {
		items: 1
		}
	}
	})
})