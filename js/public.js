/*
	* ==============================================================================
		_  _        _                 _                                 _                                               
	___| |(_) ___ _| |_  ____ _____ _| |_  ___   ___  _   _  _____  ___| |  _     _   _     _       _  _   _   _        
   / __  || |/ __|__  _|/ _  |  _  |_   _|/ __| / _ \| | | ||  _  |/ __  | |_| | |_  |_  | | |  /|   |  | |_  |_   /|   
  | (__| || |\__ \ | |_  (_| | | | | | |_ \__ \| |_| | |_| || | | | (__| |  _  |   |   | | | | |_|  _|  | | | | | |_|   
   \_____||_||___/ |___|\____|_| |_| |___||___/ \___/|_____||_| |_|\_____| |_| |  _|  _| | |_|   | |_   | |_| |_|   |   
 
	* CSS Document Css DsGrid Start 
	* Author: DistantSound 
	* Date: 2020 
	* IDE:  
  * ---------------------------------------------------------------------------------------------
*/

$(function () {
	$(window).scroll(function () {
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		if (scrollTop > 100) {
			$(".header").addClass("on-scroll");
		} else {
			$(".header").removeClass("on-scroll");
		}
	});



	//* load-more ------------------------------------- 
	if(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)) {  
		$(".load-more").each(function () {
			$(this).simpleLoadMore({
				item: 'li',
				count: 10,
				itemsToLoad: 5,
				counterInBtn: true,
				btnText: '加载更多'
			})
	   	})
	};
 


	$(".header-nav-close").hide();
	$(".header-nav-open").click(function () {
		$(".header, .nav-fixed-openclose").toggleClass("active");
	});



	$(".my-swiper-banner-top").click(function () {
		$("html,body").animate({ scrollTop: "860px" }, 800);
	});



	new Swiper(".swiper-banner", {
		loop: true,
		observer: true,
		observeParents: true,
		speed: 800,
		effect: "creative",
		creativeEffect: {
			prev: {
				shadow: true,
				translate: ["-20%", 0, -1]},
				next: {translate: ["100%", 0, 0]}
		},
		autoplay: {
			disableOnInteraction: false,
			delay: 3500
		},
		pagination: {
			el: ".swiper-pagination",
			bulletClass: "my-bullet"
		},
		navigation: {
			nextEl: '.my-swiper-button-next',
			prevEl: '.my-swiper-button-prev'
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
			}
		}
	});



	var swiper1 = new Swiper(".swiper-pic", {
		loop: true,
		observer: true,
		observeParents: true,
		speed: 800,
		effect: "creative",
		creativeEffect: {
			prev: {
				shadow: true,
				translate: ["-20%", 0, -1],
			},
			next: {
				translate: ["100%", 0, 0],
			},
		},
		autoplay: {
			disableOnInteraction: false,
			delay: 3500
		},
		navigation: {
			nextEl: '.my-swiper-button-next',
			prevEl: '.my-swiper-button-prev'
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
			}
		}
	});

	
	//* time-line
	var swiper3 = new Swiper('.time-line', {
		slidesPerView: 1.4,
		noSwiping : false,
		navigation: {
			nextEl: '.swiper-button-prev',
			prevEl: '.swiper-button-next',
		},
		breakpoints: {
			375: {slidesPerView: 1.4},
			576: {slidesPerView: 2.4},
			768: {slidesPerView: 2.4},
			992: {slidesPerView:3.4},
			1200: {slidesPerView:4.4} 
		}
	});



	//* icheckbox ------------------------------------- 
 	$(".check-box").each(function () {
 		$(this).iCheck({
 			checkboxClass: "icheckbox_minimal-orange",
 			radioClass: "iradio_minimal-orange",
 			increaseArea: "20%"
 		})
 	});
 	$(".check-box").each(function () {
		$(this).find(".icheck-input").on('ifChecked', function(event){
			$(this).parents(".check-box").find(".icheck-label").addClass("active");
		})
    });
	$(".check-box").each(function () {
		$(this).find(".icheck-input").on('ifUnchecked', function(event){
			$(this).parents(".check-box").find(".icheck-label").removeClass("active");
		})
    });

	
 
	//* page-box ------------------------------------- 
	$(".pager-content").each(function () {
		$(this).find(".pager-link").first().addClass("current");
		$(this).find(".pager-link").on("click", function () {
			$(this).siblings().removeClass("current");
			$(this).addClass("current");
		})
	});
  
	//*  发送验证码信息  ------------------------------------- 
	$(".button-yzm").each(function () {
		$(this).click(function () {
			verifyTime(this);
		});
	});

	//* focus blur +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	$(".focus-blur").each(function () {
		$(this).find(".input").focus(function () {
			$(this).parents(".focus-blur").css({ "border": "1px solid #ff4700"});
		});
		$(this).find(".input").blur(function () {
			$(this).parents(".focus-blur").css({ "border": "1px solid  #e2e2e2" });
		});
	});
 
	//* Swiper tab ---------------------------------------
	$(".tab-head .item-head").each(function(e) {
		let index = $(this).index();
		$(this).on('click',
		function() {
			$(this).addClass('active').siblings().removeClass('active');
			mySwiper.slideTo(index);
		})
	});
	var mySwiper = new Swiper('.tab-content', {
		loop: false,
		observer: true,
		observeParents: true,
		on: {
			slideChange: function() {
				$(".tab-head .item-head").eq(this.activeIndex).addClass('active').siblings().removeClass('active')
			}
		}
	})
});


//* 发送验证码 --------------------------------------------------------------------------------------------
var $wait = 10;
function verifyTime(o) {
	 let t = $(".button-yzm").text();
	if ($wait == 0) {
		$(".button-yzm").css({ "color": "#fff" });
		o.removeAttribute("disabled");
		$(".button-yzm").text("获取验证码");
		$wait = 60;
	} else {
		$(".button-yzm").css({ "color": "#fff" });
		o.setAttribute("disabled", true);
		$(".button-yzm").text(o.value = "重新发送(" + $wait + ")")
		$wait--;
		setTimeout(function () { verifyTime(o) }, 1000);
	}
};


var Ds_Right = { reset: false, distance: "600px", duration: 1000, easing: "ease", interval: 350, origin: "right", }
var Ds_Left = { reset: false, distance: "600px", duration: 1000, easing: "ease", interval: 350, origin: "left", };
var Ds_Down = { reset: false, distance: "600px", duration: 1000, easing: "ease", interval: 350, opacity: 0, origin: "top" };
var Ds_scale = { reset: false, distance: "600px", duration: 1000, easing: "ease", scale: 0.1, interval: 200 };
var Ds_up = { reset: false, distance: "600px", duration: 1000, easing: "ease", interval: 350, opacity: 0, origin: "bottom" };
(function () { window.sr = new ScrollReveal(); window.sr = new ScrollReveal(); sr.reveal(".ds-left", Ds_Left); sr.reveal(".ds-right", Ds_Right); sr.reveal(".ds-down", Ds_Down); sr.reveal(".ds-scale", Ds_scale); sr.reveal(".ds-up", Ds_up) })();