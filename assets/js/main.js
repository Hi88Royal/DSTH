/** Banner */
$(".banner-slide").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  height: 700,
  speed: 400,
  dots: false,
  focusOnSelect: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><div class='slick-icon-prev'></div></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><div class='slick-icon-next'></div></button>",
});
$(".slider-jun88-ds01").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  speed: 400,
  dots: false,
  focusOnSelect: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><div class='slick-icon-prev'></div></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><div class='slick-icon-next'></div></button>",
});

$(".slider-jun88-ds02").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  speed: 700,
  dots: false,
  focusOnSelect: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><div class='slick-icon-prev'></div></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><div class='slick-icon-next'></div></button>",
});

$(".slider-hi88-group01").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  speed: 1000,
  dots: false,
  focusOnSelect: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><div class='slick-icon-prev'></div></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><div class='slick-icon-next'></div></button>",
});

$(".slider-jun88-group02").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  speed: 1200,
  dots: false,
  focusOnSelect: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><div class='slick-icon-prev'></div></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><div class='slick-icon-next'></div></button>",
});

/** End Banner */

/** Post */
$(".slider-post").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  speed: 400,
  dots: false,
  focusOnSelect: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><div class='slick-icon-prev'></div></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><div class='slick-icon-next'></div></button>",
});

/** End Post */

/** Post */

$(".list-cups-hi88").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  speed: 400,
  dots: false,
  focusOnSelect: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><div class='slick-icon-prev'></div></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><div class='slick-icon-next'></div></button>",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: false,
        dots: false,
        slidesToShow: 1,
      },
    },
  ],
});

$(".list-cups-villarreal").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  speed: 400,
  dots: false,
  focusOnSelect: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><div class='slick-icon-prev'></div></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><div class='slick-icon-next'></div></button>",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: false,
        dots: false,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: false,
        dots: false,
        slidesToShow: 1,
      },
    },
  ],
});

$(".list-member-team").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  speed: 400,
  dots: false,
  focusOnSelect: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><div class='slick-icon-prev'></div></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><div class='slick-icon-next'></div></button>",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: false,
        dots: false,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: false,
        dots: false,
        slidesToShow: 1,
      },
    },
  ],
});

$("#tabs .tab_btn").each(function (index, value) {
  var _this = $(this);
  _this.on("click", function () {
    var tabNumber = $(this).data("tab-control");
    var _thisEl = $(this);

    $("#tabs .tab_btn .custom-button").removeClass("active");

    $(".content-tab .tab-content").each(function () {
      var tabContentNumber = $(this).data("content-tab");
      if (tabNumber == tabContentNumber) {
        $(this).addClass("active");
        _thisEl.find(".custom-button").addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  });
});
/** End Post */

/** Slider-history */

$(".slider-history").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: false,
  speed: 400,
  dots: false,
  focusOnSelect: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><div class='slick-icon-prev'></div></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><div class='slick-icon-next'></div></button>",
});
/** Slider-history */

/** Post */
$(".event-slider01").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  speed: 400,
  dots: false,
  focusOnSelect: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><div class='slick-icon-prev'></div></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><div class='slick-icon-next'></div></button>",
});

/** Post */

$(".event-slider02").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  speed: 500,
  dots: false,
  focusOnSelect: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><div class='slick-icon-prev'></div></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><div class='slick-icon-next'></div></button>",
});

$(".slide-album").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: false,
  dots: false,
  focusOnSelect: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><div class='slick-icon-prev'></div></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><div class='slick-icon-next'></div></button>",
});

/** End Post */

$(window).on("scroll", function (e) {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  if (
    $(window).scrollTop() >=
    $(".career-di-maria").offset().top - $(window).height()
  ) {
    if (!$(".career-di-maria").hasClass("animated")) {
      $(".count").each(function () {
        $(this)
          .prop("Counter", 100)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 4000,
              easing: "swing",
              step: function (now) {
                $(this).text(numberWithCommas(Math.ceil(now)));
              },
            }
          );
      });

      $(".count2").each(function () {
        $(this)
          .prop("Counter2", 10)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 4000,
              easing: "swing",
              step: function (now) {
                $(this).text(numberWithCommas(Math.ceil(now)));
              },
            }
          );
      });

      $(".career-di-maria").addClass("animated");
    }
  }
});

/** Video play */

$(document).ready(function () {
  $(".list-video .video-item .thumb-nail").each(function () {
    var elVideo = $(this);
    elVideo.on("click", function () {
      let url = $(this).data("url-youtobe");

      $(".video video source").attr("src", url);
      $(".video video")[0].load();
    });
  });
});

var localSaveStatusContent = "";
var statusCheck = "";
$(".handle").hide();
$(".icon-close").hide();

// Check default show page 1
if (localStorage.getItem("status") == null) {
  showTag("", $(".item-group:first"), 0);
}

// Check default handle site-bar

if (screen.width <= 768) {
  $(".site-bar").animate(
    {
      left: "-100px",
    },
    500
  );

  $(".handle").show();

  $(".handle").on("click", function () {
    $(".site-bar").animate(
      {
        left: "10px",
      },
      500
    );

    $(".icon-close").show();
    $(".handle").hide();
  });

  $(".icon-close").on("click", function () {
    $(".site-bar").animate(
      {
        left: "-100px",
      },
      500
    );

    $(".handle").show();
  });
}

// Check show with click bottom
$(".item-group.handle-click").on("click", function () {
  var url = $(this).data("url");
  localStorage.setItem("status", $(this).data("status"));

  if (screen.width <= 768) {
    url = $(this).data("url-sm");
  }

  showTag(url, $(this), statusCheck);
});

// Check show with status local storage
$(".item-group.handle-click").each(function () {
  statusCheck = $(this).data("status");
  let url = $(this).data("url");

  console.log(localStorage.getItem("status") + "test ==========");

  if (
    localStorage.getItem("status") == statusCheck &&
    localStorage.getItem("status") != null
  ) {
    showTag(url, $(this), localStorage.getItem("status"));
  }
});

// Check Function call Active Page
function showTag(url, el, statusCheck) {
  // $(".wp-thumb-nail").removeClass("active");
  // el.find(".wp-thumb-nail").addClass("active");

  if (screen.width <= 768) {
    el.find(".box").removeClass("active");
    $(".wp-thumb-nail").removeClass("active");
    $(".site-bar").animate(
      {
        left: "-100px",
      },
      500
    );

    $(".handle").show();
  }
}

$(document).on("mouseenter", ".item-group", function () {
  $(".site-bar").css("width", "300px");
  $(this).find(".box").addClass("active");

  if (screen.width <= 768) {
    $(this).find(".box").removeClass("active");
    $(".site-bar").css("width", "75px");
  }
});

$(".item-group").on("mouseleave", function () {
  $(".item-group").find(".box").removeClass("active");
  $(".site-bar").css("width", "150px");

  if (screen.width <= 768) {
    $(this).find(".box").removeClass("active");
    $(".wp-thumb-nail").removeClass("active");
    $(".site-bar").css("width", "75px");
  }
});

// Show text more
var moreText = $("#text_more");
var readLess = $(".readless_text");
var readMore = $(".readmore_text");

readMore.on("click", function () {
  moreText.show();
  $(this).hide();
});

readLess.on("click", function () {
  moreText.hide();
  readMore.show();
});
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('[data-toggle="modal"]');
  images.forEach((image) => {
    image.addEventListener("click", function () {
      const slideTo = this.parentElement.getAttribute("data-slide-to");
      const carousel = document.querySelector("#carousel4");
      $(carousel).carousel(parseInt(slideTo));
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Query all img elements
  let lazyImages = document.querySelectorAll("img[data-src]");

  // Add lazy class to each image
  lazyImages.forEach((img) => {
    img.classList.add("lazy");
  });

  if ("IntersectionObserver" in window) {
    // Set rootMargin to load images 500px before they enter the viewport
    let lazyImageObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.onload = () => lazyImage.classList.add("loaded");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      },
      {
        rootMargin: "500px 0px 500px 0px",
      }
    );

    lazyImages.forEach(function (img) {
      lazyImageObserver.observe(img);
    });
  } else {
    // Fallback for browsers without IntersectionObserver support
    lazyImages.forEach(function (img) {
      img.src = img.dataset.src;
      img.onload = () => img.classList.add("loaded");
    });
  }
});


var video = videojs("my_video_1").ready(function () {
  var player = this;
  var executed = false;
  player.on("ended", function () {
    if (!executed) {
      player.src({ type: "video/mp4", src: "res/vid/vid2.mp4" });
      player.play();
      executed = true;
    }
  });
});
