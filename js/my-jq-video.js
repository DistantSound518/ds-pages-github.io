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
  
    $('.swiper-video-content').find('video').get(0).load();
	$(".btn-video-play").on("click", function () {
		$(this).hide();
		$(".btn-video-pause").show();
		$(this).parents(".swiper-video-content").find(".video")[0].play()
	});

	$(".btn-video-pause").on("click", function () {
		$(this).hide();
		$(".btn-video-play").show();
		$(this).parents(".swiper-video-content").find(".video")[0].pause();
	});

 	const videoTime = document.getElementById("video");
 	videoTime.onloadedmetadata = function () {
 		let minute = parseInt((videoTime.duration % 3600) / 60);
 		if (minute < 10) {
 			minute = "0" + minute;
 		}
 		let second = Math.ceil(videoTime.duration % 60);
 		if (second < 10) {
 			second = "0" + second;
 		}
 		let viTime =   minute + ":" + second + " 分/秒";
 
 		$(".swiper-video-content").find(".time").text(viTime);
 	}
});
 