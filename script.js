(function ($) {
  $(function () {
    $(".js-carousel").slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: ".js-ag-carousel-arrow_prev",
      nextArrow: ".js-ag-carousel-arrow_next",

      variableWidth: true,
      centerMode: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            variableWidth: false,
            centerMode: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            variableWidth: false,
            centerMode: false,
          },
        },
      ],
    });
  });
})(jQuery);

function reveal_r() {
  var reveals = document.querySelectorAll(".reveal-r");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
function reveal_l() {
  var reveals = document.querySelectorAll(".reveal-l");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
function reveal_up() {
  var reveals = document.querySelectorAll(".reveal-up");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
function revealf() {
  var reveals = document.querySelectorAll(".reveal-f");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal_r);
window.addEventListener("scroll", reveal_l);
window.addEventListener("scroll", reveal_up);
window.addEventListener("scroll", revealf);

let newHeight = $(window).height();
let newWidth = $(window).width();
let diff = newHeight - initHeight;
$('.about-bg-img').css('background-position', "85% " + (startHeightOffset + diff) + "px")
