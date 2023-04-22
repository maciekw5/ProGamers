$('.team-carousel').slick({
	arrows: false,
	autoplaySpeed: 500,
	autoplay: true,
	mobileFirst: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 768,
			settings: { slidesToShow: 2 },
		},

		{
			breakpoint: 992,
			settings: { slidesToShow: 3 },
		},
	],
});
