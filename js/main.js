//alert("Hello!")
$(document).ready(function(){
	
	var visited_menu = false
	var values = []
	
	$(".black").fadeOut(1500, function(){
		$(".animatable").animate({left:0});
	})
	
	$(".menu").click(function(){
		
		if(visited_menu == false){
			$(this).addClass("clicked_menu")
			name = $(this).attr("name");
			$(".animatable").animate({"left":"100vw"}, 1000, function(){
				$(".background").animate({"top":"-600px"}, 1000)
				$(".orange").animate({"height":"630px", "margin-top":"-580px"}, 900, function(){
					$(".opening_window_content").load(name+".html", function(){
						$(".opening_window_content").animate({"left":"0"}, 900)
						$(".opening_window_content")
					})
				})
			})
			visited_menu = true;
		}
		else{
			if($(".opening_window_content").is($(":animated")) || $(this).hasClass("clicked_menu")){
				return false
		
			}
			else{
	
				$(".menu").removeClass("clicked_menu")
				$(this).addClass("clicked_menu")
				name = $(this).attr("name")
				$(".opening_window_content").animate({"left":"100vw"}, 900, function(){
					$(".opening_window_content").empty()
					$(".opening_window_content").animate({"left":"-100vw"}, 0, function(){
						$(".opening_window_content").load(name+".html", function(){
							$(".opening_window_content").animate({"left":"0"}, 900)
						})
					})
				})	
			}
		}
		$(function () {
			"use strict";
			$("#abc").on("loadstart", function () {
				console.log(3);
			})
		})
	})
	
	$(".logo").click(function(){
		$(".menu").removeClass("clicked_menu")
		if(visited_menu == true){
			$(".opening_window_content").animate({"left":"100vw"}, 900, function(){
				$(".opening_window_content").animate({"left":"-100vw"}, 0, function(){
					$(".background").animate({"top":"0"}, 1000)
					$(".orange").animate({"height":"0", "margin-top":"0"}, 900, function(){
						$(".animatable").animate({"left":"-100vw"}, 0,function(){
							$(".animatable").animate({"left":"0"}, 1000)
						})
					})
				})
			})
		}
		visited_menu = false;
	})
})