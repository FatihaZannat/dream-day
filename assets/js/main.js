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
    console.log('object');
    $("[data-src]").each(function () {
      var src = $(this).attr("data-src");
      $(this).css({
        "background-image": "url(" + src + ")",
      });
    });
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
