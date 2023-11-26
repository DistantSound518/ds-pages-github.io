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
$(function() {
	$(window).scroll(function() {
			const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			if (scrollTop > 100) {
					$("header").addClass("header-active");
			} else {
					$("header").removeClass("header-active");
			}
	});

	const swiperBanner = new Swiper(".swiper-banner", {
			loop: true,
			observer: true,
			observeParents: true,
			speed: 1000,
			autoplay: {
					disableOnInteraction: false,
					delay: 3500
			}
	});

	$(".swiperTab1 .tab-head .item-head").each(function() {
			const a = $(this).index();
			$(this).on("click",
			function() {
					$(this).addClass("active").siblings().removeClass("active");
					b.slideTo(a);
			});
	});
	const b = new Swiper(".swiperTab1 .tab-content", {
			loop: false,
			observer: true,
			observeParents: true,
			on: {
					slideChange: function() {
							$(".swiperTab1 .tab-head .item-head").eq(this.activeIndex).addClass("active").siblings().removeClass("active");
					}
			}
	});
	$(".swiperTab2 .tab-head .item-head").each(function() {
			const a = $(this).index();
			$(this).on("click",
			function() {
					$(this).addClass("active").siblings().removeClass("active");
					c.slideTo(a);
			});
	});
	const c = new Swiper(".swiperTab2 .tab-content", {
			loop: false,
			observer: true,
			observeParents: true,
			on: {
					slideChange: function() {
							$(".swiperTab2 .tab-head .item-head").eq(this.activeIndex).addClass("active").siblings().removeClass("active");
					}
			}
	});
	$(".swiperTab3 .tab-head .item-head").each(function() {
			const a = $(this).index();
			$(this).on("click",
			function() {
					$(this).addClass("active").siblings().removeClass("active");
					d.slideTo(a);
			});
	});
	const d = new Swiper(".swiperTab3 .tab-content", {
			loop: false,
			observer: true,
			observeParents: true,
			on: {
					slideChange: function() {
							$(".swiperTab3 .tab-head .item-head").eq(this.activeIndex).addClass("active").siblings().removeClass("active");
					}
			}
	});
	$(".swiperTab4 .tab-head .item-head").each(function() {
			const a = $(this).index();
			$(this).on("click",
			function() {
					$(this).addClass("active").siblings().removeClass("active");
					e.slideTo(a);
			});
	});
	const e = new Swiper(".swiperTab4 .tab-content", {
			loop: false,
			observer: true,
			observeParents: true,
			on: {
					slideChange: function() {
							$(".swiperTab4 .tab-head .item-head").eq(this.activeIndex).addClass("active").siblings().removeClass("active");
					}
			}
	});
	$(".swiperTab5 .tab-head .item-head").each(function() {
			const a = $(this).index();
			$(this).on("click",
			function() {
					$(this).addClass("active").siblings().removeClass("active");
					f.slideTo(a);
			});
	});
	const f = new Swiper(".swiperTab5 .tab-content", {
			loop: false,
			observer: true,
			observeParents: true,
			on: {
					slideChange: function() {
							$(".swiperTab5 .tab-head .item-head").eq(this.activeIndex).addClass("active").siblings().removeClass("active");
					}
			}
	});
	$(".swiperTab6 .tab-head .item-head").each(function() {
			const a = $(this).index();
			$(this).on("click",
			function() {
					$(this).addClass("active").siblings().removeClass("active");
					g.slideTo(a);
			});
	});
	const g = new Swiper(".swiperTab6 .tab-content", {
			loop: false,
			observer: true,
			observeParents: true,
			on: {
					slideChange: function() {
							$(".swiperTab6 .tab-head .item-head").eq(this.activeIndex).addClass("active").siblings().removeClass("active");
					}
			}
	});
	$(".swiperTab7 .tab-head .item-head").each(function() {
			const a = $(this).index();
			$(this).on("click",
			function() {
					$(this).addClass("active").siblings().removeClass("active");
					h.slideTo(a);
			});
	});
	const h = new Swiper(".swiperTab7 .tab-content", {
			loop: false,
			observer: true,
			observeParents: true,
			on: {
					slideChange: function() {
							$(".swiperTab7 .tab-head .item-head").eq(this.activeIndex).addClass("active").siblings().removeClass("active");
					}
			}
	});
	$(".swiperTab8 .tab-head .item-head").each(function() {
			const a = $(this).index();
			$(this).on("click",
			function() {
					$(this).addClass("active").siblings().removeClass("active");
					i.slideTo(a);
			});
	});
	const i = new Swiper(".swiperTab8 .tab-content", {
			loop: false,
			observer: true,
			observeParents: true,
			on: {
					slideChange: function() {
							$(".swiperTab8 .tab-head .item-head").eq(this.activeIndex).addClass("active").siblings().removeClass("active");
					}
			}
	});
	$(".swiperTab9 .tab-head .item-head").each(function() {
			const a = $(this).index();
			$(this).on("click",
			function() {
					$(this).addClass("active").siblings().removeClass("active");
					j.slideTo(a);
			});
	});
	const j = new Swiper(".swiperTab9 .tab-content", {
			loop: false,
			observer: true,
			observeParents: true,
			on: {
					slideChange: function() {
							$(".swiperTab9 .tab-head .item-head").eq(this.activeIndex).addClass("active").siblings().removeClass("active");
					}
			}
	});
	$(".swiperTab10 .tab-head .item-head").each(function() {
			const a = $(this).index();
			$(this).on("click",
			function() {
					$(this).addClass("active").siblings().removeClass("active");
					k.slideTo(a);
			});
	});
	const k = new Swiper(".swiperTab10 .tab-content", {
			loop: false,
			observer: true,
			observeParents: true,
			on: {
					slideChange: function() {
							$(".swiperTab10 .tab-head .item-head").eq(this.activeIndex).addClass("active").siblings().removeClass("active");
					}
			}
	});
	$(".swiperTab11 .tab-head .item-head").each(function() {
			const a = $(this).index();
			$(this).on("click",
			function() {
					$(this).addClass("active").siblings().removeClass("active");
					l.slideTo(a);
			});
	});
	const l = new Swiper(".swiperTab11 .tab-content", {
			loop: false,
			observer: true,
			observeParents: true,
			on: {
					slideChange: function() {
							$(".swiperTab11 .tab-head .item-head").eq(this.activeIndex).addClass("active").siblings().removeClass("active");
					}
			}
	});
});