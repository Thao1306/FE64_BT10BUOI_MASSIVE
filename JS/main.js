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


// back to top 

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}