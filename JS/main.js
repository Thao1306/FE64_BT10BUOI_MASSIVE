/*==============================================
  Init Window Scroll Event
===============================================*/
$(window).scroll(function () {
  handleStickyHeader();
  handleProgressBar();
  scrollFunction();
});

/*==============================================
  Add Sticky Header
===============================================*/
var handleStickyHeader = function () {
  if ($(window).scrollTop() >= 100) {
    $(".header").addClass("header-sticky");
  } else {
    $(".header").removeClass("header-sticky");
  }
};

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
  Init Portfolio Filter
===============================================*/
var portfolioList = $(".js-portfolio-list");
var mixer = mixitup(portfolioList);

/*==============================================
  Handle Progress Bar
===============================================*/
var handleProgressBar = function () {
  var progressBars = document.getElementsByClassName("js-progress-bar");

  Array.from(progressBars).forEach((bar) => {
    var windowTop = window.scrollY;
    var windowBottom = windowTop + window.innerHeight;

    var eleTop = bar.offsetTop - 20;
    var eleBottom = eleTop + bar.clientHeight;

    if (eleBottom <= windowBottom && eleTop >= windowTop) {
      bar.classList.add("active");
    }
  });
};

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
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
