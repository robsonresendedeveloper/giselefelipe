// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require jquery_ujs
//= require jquery3
//= require activestorage
//= require_tree .


$("document").ready(function(){
  $(".banner2").hide();
  $(".banner3").hide();

  	//alert($("#foto1").height());

	var img=1;
	setInterval(function(){
		switch(img) {
			case 1:
				img=2;
				$(".banner1").fadeOut(1600, function(){
          			$(".banner2").fadeIn(1600);
				});
			break;
			case 2:
				img=3;
				$(".banner2").fadeOut(1600, function(){
					$(".banner3").fadeIn(1600);
				});
			break;
			case 3:
				img=1;
				$(".banner3").fadeOut(1600, function(){
					$(".banner1").fadeIn(1600);
				});
			break;
		}
	}, 5000);

	$( ".photo-link" ).click(function(e) {
		e.preventDefault();
        $("html, body").animate({ scrollTop: "640px" });
    });
    $( ".infos-link" ).click(function(e) {
		e.preventDefault();
        $("html, body").animate({ scrollTop: "4664px" });
    });
    $( ".confirmation-link" ).click(function(e) {
		e.preventDefault();
        $("html, body").animate({ scrollTop: "5205px" });
    });

    $(window).scroll(function() {
    	
	  var yPos = -($(window).scrollTop()); 
		  if(yPos < -300) {
		  	$("header").css("height", "60px");
		  	$(".links").css("margin-top", "-45px");

		  	$("header .logo-space").css("width", "80px");
		  	$("header .logo-space").css("height", "80px");
		  	$("header .logo-space h1").css("font-size", "24px");
		  	$("header .logo-space h1").css("margin-top", "24px");
		  }

		  if(yPos >= -300) {
		  	$("header").css("height", "100px");
		  	$(".links").css("margin-top", "-56px");
		  	$("header .logo-space").css("width", "130px");
		  	$("header .logo-space").css("height", "130px");
		  	$("header .logo-space h1").css("font-size", "42px");
		  	$("header .logo-space h1").css("margin-top", "36px");
		  }
	  
	});

	$(".btn-menu-mobile").click(function(){
		$("header .mobile-mask").css("left", "0%");
		$("header .menu-mobile").css("left", "0%");
		$("header #logo-menu-mobile").css("left", "50%");
	});

	$(".exit-mobile").click(function(){
		$("header .mobile-mask").css("left", "-100%");
		$("header .menu-mobile").css("left", "-100%");
		$("header #logo-menu-mobile").css("left", "-50%");
	});
	$(".menu-mobile").click(function(){
		$("header .mobile-mask").css("left", "-100%");
		$("header .menu-mobile").css("left", "-100%");
		$("header #logo-menu-mobile").css("left", "-50%");
	});
});

