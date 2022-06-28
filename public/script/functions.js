jQuery(document).ready(function($) {

	'use strict';
   //  //***************************
   //  // Sticky Header Function
   //  //***************************
	  jQuery(window).scroll(function() {
	      if (jQuery(this).scrollTop() > 170){  
	          jQuery('body').addClass("tax-sticky");
	      }
	      else{
	          jQuery('body').removeClass("tax-sticky");
	      }
	  });

    $('.nav-mega-menu').parent('li').addClass('icon');





    var path = window.location.pathname.split("/").pop();      
        var target = $('a[href="'+path+'"]');
        target.addClass('active');
      target.parents("li.tax-side-dropdown").addClass("active");

    $(".tax-side-dropdown").click(function(){
        $(".tax-side-dropdown").not($(this)).removeClass('active');
        $(this).toggleClass("active");
    });





    //***************************
    // BannerOne Functions
    //***************************
      jQuery('.tax-banner-slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          infinite: true,
          dots: false,
          arrows: false,
          // prevArrow: "<span class='slick-arrow-left'><i class='fa fa-angle-left'></i></span>",
          // nextArrow: "<span class='slick-arrow-right'><i class='fa fa-angle-right'></i></span>",
          fade: true,
          responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });


      //***************************
    // BannerOne Functions
    //***************************
      jQuery('.testimonial-slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          infinite: true,
          dots: true,
          arrows: false,
          // prevArrow: "<span class='slick-arrow-left'><i class='fa fa-angle-left'></i></span>",
          // nextArrow: "<span class='slick-arrow-right'><i class='fa fa-angle-right'></i></span>",
          fade: false,
          responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });


//***************************
        // SearchToggle Function
        //***************************
        jQuery('.ec-search-popup-btn').on("click", function(){
            jQuery('.ec-search-popup').slideToggle('slow');
            return false;
        });

        jQuery('.tax-fr').on("click", function(){
            jQuery('.lang').slideToggle('slow');
            return false;
        });




$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


});


// Add smooth scrolling to all links
      $("a.bottom-scroll").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1000, function(){
          });
          return false;
        } // End if
      });
