/*
  * ==============================================================================
        _  _        _                 _                                 _                                               
    ___| |(_) ___ _| |_  ____ _____ _| |_  ___   ___  _   _  _____  ___| |  _     _   _     _       _  _   _   _        
   / __  || |/ __|__  _|/ _  |  _  |_   _|/ __| / _ \| | | ||  _  |/ __  | |_| | |_  |_  | | |  /|   |  | |_  |_   /|   
  | (__| || |\__ \ | |_  (_| | | | | | |_ \__ \| |_| | |_| || | | | (__| |  _  |   |   | | | | |_|  _|  | | | | | |_|   
   \_____||_||___/ |___|\____|_| |_| |___||___/ \___/|_____||_| |_|\_____| |_| |  _|  _| | |_|   | |_   | |_| |_|   |   
   
  * CSS Document public js Start 
  * Author: DistantSound / DistantSound@126.com
  * Date: 2020 
  * IDE :  
  * ---------------------------------------------------------------------------------------------
*/ 

$(function () {
	$(window).scroll(function () {
		var scrollTop = $(window).scrollTop();
		if (scrollTop > 200) {
			$(".header").addClass("header-active");
		} else {
			$(".header").removeClass("header-active");
		}
	});

	$(".hader-nav-close").hide();
	$(".hader-nav-close").hide();
	$(".hader-nav-open").on("click", function () {
		$(".hader").css("right", "0");
		$(".hader-nav-close").css({color: "#36694b"}).show();
		$(".hader-nav-open").hide();
	});

	$(".hader-nav-close, .a-link").on("click", function () {
		$(".hader").css("right", "-60%");
		$(".hader-nav-close").hide();
		$(".hader-nav-open").show();
	});
 
	$(".my-swiper-banner-top").click(function () {
		$("html,body").animate({scrollTop: "720px"}, 800);
	});

	new Swiper(".swiper-banner", {
		loop: true,
		observer: true,
		observeParents: true,
		speed: 1000,
		autoplay: {
			disableOnInteraction: false,
			delay: 3500,
		},
		pagination: {
			el: ".swiper-pagination",
			bulletClass: "my-bullet",
		},
		navigation: {
			nextEl: '.my-swiper-button-next',
			prevEl: '.my-swiper-button-prev',

		},
		on: {
			init: function () {
				swiperAnimateCache(this);
				this.emit("slideChangeTransitionEnd");
			},
			slideChangeStart: function () {
				swiperAnimate(this);
			},
			slideChangeTransitionEnd: function () {
				swiperAnimate(this);
			},
		},
	});

	var swiper = new Swiper(".swiper-group-pic", {
		slidesPerView: 2,
		slidesPerColumn: 1,
		slidesPerGroup: 2,
		pagination: {
			el: ".swiper-pagination",
			bulletClass: "my-bullet",
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
				slidesPerColumn: 1,
				slidesPerGroup: 2,
			},
			768: {
				slidesPerView: 3,
				slidesPerColumn: 1,
				slidesPerGroup: 3,
			},
			992: {
				slidesPerView: 4,
				slidesPerColumn: 2,
				slidesPerGroup: 4,
			},
			1200: {
				slidesPerView: 4,
				slidesPerColumn: 2,
				slidesPerGroup: 4,
			},
		},
	});
	$(".pager-content").each(function () {
		$(this).find(".span-s").first().addClass("current");
		$(this).find(".span-s").on("click", function () {
			$(this).siblings().removeClass("current");
			$(this).addClass("current");
		});
	});
});
