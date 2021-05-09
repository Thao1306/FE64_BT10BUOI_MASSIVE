/*==============================================
  Add Sticky Header
===============================================*/
$(window).scroll(function () {
  if ($(window).scrollTop() >= 100) {
    $(".header").addClass("header-sticky");
  } else {
    $(".header").removeClass("header-sticky");
  }
});

/*==============================================
  Init Wow
===============================================*/
new WOW().init();

/*==============================================
  Init Portfolio Popup
===============================================*/
$(".js-portfolio-popup").magnificPopup({
  type: "image",
  gallery: {
    enabled: true,
  },
});

$(".js-portfolio-popup2").magnificPopup({
  type: "image",
  gallery: {
    enabled: true,
  },
});

/*==============================================
  Portfolio Filters
===============================================*/
var portfolioList = $(".js-portfolio-list");
var mixer = mixitup(portfolioList);
