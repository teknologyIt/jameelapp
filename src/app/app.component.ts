import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jameelit';
 
  ngOnInit() {
    var navcollapse = $('.main-menu .navigation li');
    navcollapse.hover(function() {
        $(this).children('.submenu').stop(true, false, true).slideToggle(300);
    });
//Submenu Dropdown Toggle
if($('.main-menu .mobile-menu li.dropdown ul').length){
$('.main-menu .mobile-menu li.dropdown').append('<div class="dropdown-btn"></div>');

//Dropdown Button
$('.main-menu .mobile-menu li.dropdown .dropdown-btn').on('click', function() {
  $(this).prev('ul').slideToggle(500);
});
}
function stickyHeader () {
  if ($('.stricky').length) {
    var strickyScrollPos = 100;
    if($(window).scrollTop() > strickyScrollPos) {
      $('.stricky').removeClass('fadeIn animated');
          $('.stricky').addClass('stricky-fixed fadeInDown animated');
          $('.scroll-to-top').fadeIn(500);
    }
    else if($(this).scrollTop() <= strickyScrollPos) {
      $('.stricky').removeClass('stricky-fixed fadeInDown animated');
          $('.stricky').addClass('slideIn animated');
          $('.scroll-to-top').fadeOut(500);
    }
  };
}


function swithcerMenu () {
  if ($('.switch_menu').length) {

    $('.switch_btn button').on('click', function(){
      $('.switch_menu').toggle(300)
    });

    $("#myonoffswitch").on('click', function(){
      $(".header-lower").toggleClass("menu_fixed");
      $(".header-lower").toggleClass("fixed");
    });

    $("#boxed").on('click', function(){
      $(".layout_changer").addClass("home_boxed");
    });
    $("#full_width").on('click', function(){
      $(".layout_changer").removeClass("home_boxed");
    });
    $(".bg1").on('click', function(){
      $(".home_boxed").addClass("bg1");
      $(".home_boxed").removeClass("bg2 bg3 bg4");
    });
    $(".bg2").on('click', function(){
      $(".home_boxed").addClass("bg2");
      $(".home_boxed").removeClass("bg1 bg3 bg4");
    });
    $(".bg3").on('click', function(){
      $(".home_boxed").addClass("bg3");
      $(".home_boxed").removeClass("bg2 bg1 bg4");
    });
    $(".bg4").on('click', function(){
      $(".home_boxed").addClass("bg4");
      $(".home_boxed").removeClass("bg2 bg3 bg1");
    });

    $('#styleOptions').styleSwitcher({
      hasPreview: true,
      fullPath: 'css/custom/',
         cookie: {
          expires: 30,
          isManagingLoad: true
        }
    });

  };
}

 //Client Testimonial Carousel
 if ($('.client-testimonial-carousel').length && $('.client-thumbs-carousel').length) {

  var $sync3 = $(".client-testimonial-carousel"),
    $sync4 = $(".client-thumbs-carousel"),
    flag = false,
    duration = 500;

    $sync3
      .owlCarousel({
        loop:true,
        items: 1,
        margin: 0,
        nav: true,
        navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000
      })
      .on('changed.owl.carousel', function (e) {
        if (!flag) {
          flag = false;
          $sync4.trigger('to.owl.carousel', [e.item.index, duration, true]);
          flag = false;
        }
      });

    $sync4
      .owlCarousel({
        loop:true,
        margin:0,
        items: 1,
        nav: false,
        navText: [ '<span class="icon fa fa-long-arrow-left"></span>', '<span class="icon fa fa-long-arrow-right"></span>' ],
        dots: false,
        center: false,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
          0:{
                  items:1,
                  autoWidth: false
              },
              400:{
                  items:1,
                  autoWidth: false
              },
              600:{
                  items:1,
                  autoWidth: false
              },
              1000:{
                  items:1,
                  autoWidth: false
              },
          1200:{
                  items:1,
                  autoWidth: false
              }
          },
      })
      
  .on('click', '.owl-item', function () {
    $sync3.trigger('to.owl.carousel', [$(this).index(), duration, true]);
  })
  .on('changed.owl.carousel', function (e) {
    if (!flag) {
      flag = true;		
      $sync3.trigger('to.owl.carousel', [e.item.index, duration, true]);
      flag = false;
    }
  });
}



	//Main Slider Carousel
	if ($('.main-slider-carousel').length) {
		$('.main-slider-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			animateOut: 'slideOutDown',
    		animateIn: 'fadeIn',
    		active: true,
			smartSpeed: 1000,
			autoplay: 5000,
			navText: [ '<span class="fa fa-arrow-left"></span>', '<span class="fa fa-arrow-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
}



}
