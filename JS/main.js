// Init Wow
new WOW().init();

// Init Window Scroll Event
$(window).scroll(function () {
  handleStickyHeader();
  handleProgressBar();
  scrollFunction();
});

// Add Sticky Header
var handleStickyHeader = function () {
  if ($(window).scrollTop() >= 100) {
    $("#header").addClass("header-sticky");
  } else {
    $("#header").removeClass("header-sticky");
  }
};

// Scroll to each section
$(document).on("click", 'a[href^="#"]', function (e) {
  e.preventDefault();

  var id = $(this).attr("href");
  var $id = $(id);
  var pos = $id.offset().top;

  if ($id.length === 0) {
    return;
  }

  $("body, html").animate({ scrollTop: pos }, 500);
});

// Init Portfolio Popup
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

// Init Portfolio Filter
var portfolioList = $(".js-portfolio-list");
var mixer = mixitup(portfolioList);

// Handle Progress Bar
var handleProgressBar = function () {
  var progressBars = document.getElementsByClassName("js-progress-bar");
  var skillSection = document.getElementById("skill");

  Array.from(progressBars).forEach((bar) => {
    var windowTop = window.scrollY;
    var windowBottom = windowTop + window.innerHeight;

    // Scroll when reach to number "70%, 80%, 90%, ..." => minus about 36px
    var eleTop = skillSection.offsetTop - 36;
    var eleBottom = eleTop + skillSection.clientHeight;

    if (eleBottom <= windowBottom && eleTop <= windowTop) {
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
