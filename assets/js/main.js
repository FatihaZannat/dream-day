(function ($) {
  "use strict";

  /*
  |--------------------------------------------------------------------------
  | Template Name: Dream Day
  | Author: Laralink
  | Version: 1.0.0
  |--------------------------------------------------------------------------
  |--------------------------------------------------------------------------
  | TABLE OF CONTENTS:
  |--------------------------------------------------------------------------
  |
  | 
  | 1. Mobile Menu
  | 2. Sticky Header
  | 3. Dynamic Background
  
  |
  */

  /*--------------------------------------------------------------
    Scripts initialization
  --------------------------------------------------------------*/
  $.exists = function (selector) {
    return $(selector).length > 0;
  };


  $(window).on("scroll", function () {
    stickyHeader();
  });

  $(function () {
    dynamicBackground();
    stickyHeader();
    mainNav()
    slickInit()
    modalVideo()
    accordian()
  
  });
  // Run on window resize
  $(window).on("resize", function () {
    const mobileWidth = 1199;
    if ($(window).width() >= mobileWidth) {
      $(".cs_header_top,.cs_menu_toggle,.cs_nav_list_wrap").removeClass(
        "active"
      );
    }
  });
 

  /*--------------------------------------------------------------
    1. Mobile Menu
  --------------------------------------------------------------*/
  function mainNav() {
    $(".cs_nav").append('<span class="cs_menu_toggle"><span></span></span>');
    $(".menu-item-has-children").append(
      '<span class="cs_menu_dropdown_toggle"><span></span></span>'
    );
    $(".cs_menu_toggle").on("click", function () {
      $(this)
        .toggleClass("active")
        .siblings(".cs_nav_list_wrap")
        .toggleClass("active");
        stickyHeader()
        
    });
    $(".cs_menu_dropdown_toggle").on("click", function () {
      $(this).toggleClass("active").siblings("ul").slideToggle();
      $(this).parent().toggleClass("active");
    });
    $(".cs_search_toggler").on("click", function () {
      $(".cs_header_search").addClass("active");
      $(".cs_user_content").slideUp();
    });
    $(".cs_close, .cs_sidenav_overlay").on("click", function () {
      $(".cs_sidenav, .cs_header_search").removeClass("active");
    });
    $(".cs_user_toggler").on("click", function () {
      $(this).siblings(".cs_user_content").slideToggle();
    });
  }

  /*--------------------------------------------------------------
    2. Sticky Header
  --------------------------------------------------------------*/
  function stickyHeader() {
    var scroll = $(window).scrollTop();
    var isMenuActive = $(".cs_nav_list_wrap").hasClass("active")
    if (scroll >= 10 || isMenuActive) {
      $(".cs_sticky_header").addClass("cs_sticky_active");
    } else {
      $(".cs_sticky_header").removeClass("cs_sticky_active");
    }
  }
  /*--------------------------------------------------------------
    3. Dynamic Background
  --------------------------------------------------------------*/
  function dynamicBackground() {
    $("[data-src]").each(function () {
      var src = $(this).attr("data-src");
      $(this).css({
        "background-image": "url(" + src + ")",
      });
    });
  }

  /*--------------------------------------------------------------
    4. slider
  --------------------------------------------------------------*/
 
 function slickInit() {
      if ($.exists(".cs_slider")) {
        $(".cs_slider").each(function () {
          // Slick Variable
          var $ts = $(this).find(".cs_slider_container");
          var $slickActive = $(this).find(".cs_slider_wrapper");
          var $status = $(this).find(".cs_slider_number");
          // Auto Play
          var autoPlayVar = parseInt($ts.attr("data-autoplay"), 10);
          // Auto Play Time Out
          var autoplaySpdVar = 3000;
          if (autoPlayVar > 1) {
            autoplaySpdVar = autoPlayVar;
            autoPlayVar = 1;
          }
          // Slide Change Speed
          var speedVar = parseInt($ts.attr("data-speed"), 10);
          // Slider Loop
          var loopVar = Boolean(parseInt($ts.attr("data-loop"), 10));
          // Slider Center
          var centerVar = Boolean(parseInt($ts.attr("data-center"), 10));
          // Variable Width
          var variableWidthVar = Boolean(
            parseInt($ts.attr("data-variable-width"), 10)
          );
          // Pagination
          var paginaiton = $(this)
            .find(".cs_pagination")
            .hasClass("cs_pagination");
          // Slide Per View
          var slidesPerView = $ts.attr("data-slides-per-view");
          if (slidesPerView == 1) {
            slidesPerView = 1;
          }
          if (slidesPerView == "responsive") {
            var slidesPerView = parseInt($ts.attr("data-add-slides"), 10);
            var lgPoint = parseInt($ts.attr("data-lg-slides"), 10);
            var mdPoint = parseInt($ts.attr("data-md-slides"), 10);
            var smPoint = parseInt($ts.attr("data-sm-slides"), 10);
            var xsPoing = parseInt($ts.attr("data-xs-slides"), 10);
          }
          // Fade Slider
          var fadeVar = parseInt($($ts).attr("data-fade-slide"));
          fadeVar === 1 ? (fadeVar = true) : (fadeVar = false);
          /* Start Count Slide Number */
          $slickActive.on(
            "init reInit afterChange",
            function (event, slick, currentSlide, nextSlide) {
              var i = (currentSlide ? currentSlide : 0) + 1;
              $status.html(
                `<span class="cs_current_number" data-number="${i}"><span>${i}</span></span> <span class="cs_slider_number_seperator"></span> <span class="cs_total_numbers"  data-number="${slick.slideCount}"><span>${slick.slideCount}</span></span>`
              );
            }
          );
          /* End Count Slide Number */
          // Slick Active Code
          $slickActive.slick({
            autoplay: autoPlayVar,
            dots: paginaiton,
            centerPadding: "28%",
            speed: speedVar,
            infinite: loopVar,
            autoplaySpeed: autoplaySpdVar,
            centerMode: centerVar,
            fade: fadeVar,
            prevArrow: $(this).find(".cs_left_arrow"),
            nextArrow: $(this).find(".cs_right_arrow"),
            appendDots: $(this).find(".cs_pagination"),
            slidesToShow: slidesPerView,
            variableWidth: variableWidthVar,
            swipeToSlide: true,
            responsive: [
              {
                breakpoint: 1400,
                settings: {
                  slidesToShow: lgPoint,
                },
              },
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: mdPoint,
                },
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: smPoint,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: xsPoing,
                },
              },
            ],
          });
        });
      }
    }

  /*--------------------------------------------------------------
    4. slider
  --------------------------------------------------------------*/
 
function modalVideo() {
      if ($.exists(".cs_video_open")) {
        $("body").append(`
        <div class="cs_video_popup">
          <div class="cs_video_popup-overlay"></div>
          <div class="cs_video_popup-content">
            <div class="cs_video_popup-layer"></div>
            <div class="cs_video_popup_container">
              <div class="cs_video_popup-align">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="about:blank"></iframe>
                </div>
              </div>
              <div class="cs_video_popup_close"></div>
            </div>
          </div>
        </div>
      `);
        $(document).on("click", ".cs_video_open", function (e) {
          e.preventDefault();
          var video = $(this).attr("href");

          $(".cs_video_popup_container iframe").attr("src", `${video}`);

          $(".cs_video_popup").addClass("active");
        });
        $(".cs_video_popup_close, .cs_video_popup-layer").on(
          "click",
          function (e) {
            $(".cs_video_popup").removeClass("active");
            $("html").removeClass("overflow-hidden");
            $(".cs_video_popup_container iframe").attr("src", "about:blank");
            e.preventDefault();
          }
        );
      }
    }
  /*--------------------------------------------------------------
    8. Accordian
  --------------------------------------------------------------*/
  function accordian() {
    $(".cs_accordian").children(".cs_accordian_body").hide();
    $(".cs_accordian.active").children(".cs_accordian_body").show();
    $(".cs_accordian_head").on("click", function () {
      $(this)
        .parent(".cs_accordian")
        .siblings()
        .children(".cs_accordian_body")
        .slideUp(250);
      $(this).siblings().slideDown(250);
      $(this)
        .parent()
        .parent()
        .siblings()
        .find(".cs_accordian_body")
        .slideUp(250);
      /* Accordian Active Class */
      $(this).parents(".cs_accordian").addClass("active");
      $(this).parent(".cs_accordian").siblings().removeClass("active");
    });
  }

  /*--------------------------------------------------------------
    15. Light Gallery
  --------------------------------------------------------------*/
  function lightGallery() {
    $(".cs_lightgallery").each(function () {
      $(this).lightGallery({
        selector: ".cs_lightbox_item",
        subHtmlSelectorRelative: false,
        thumbnail: true,
        mousewheel: true,
      });
    });
  }

})(jQuery); // End of use strict
