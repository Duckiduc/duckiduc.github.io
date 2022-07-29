/* eslint-disable no-undef */
$(window).load(function () {
  $("#status").fadeOut();
  $("#preloader").delay(550).fadeOut("slow");
  $("body").delay(550).css({
    overflow: "visible",
  });

  const $container = $(".portfolio_container");
  $container.isotope({
    filter: "*",
  });

  $(".portfolio_filter a").click(function () {
    $(".portfolio_filter .active").removeClass("active");
    $(this).addClass("active");
    const selector = $(this).attr("data-filter");
    $container.isotope({
      filter: selector,
      animationOptions: {
        duration: 500,
        animationEngine: "jquery",
      },
    });
    return false;
  });

  const offset = 300;
  const offsetOpacity = 1200;
  const scrollTopDuration = 700;
  const $backToTop = $(".cd-top");

  $(window).scroll(function () {
    $(this).scrollTop() > offset
      ? $backToTop.addClass("cd-is-visible")
      : $backToTop.removeClass("cd-is-visible cd-fade-out");
    if ($(this).scrollTop() > offsetOpacity) {
      $backToTop.addClass("cd-fade-out");
    }
  });

  $backToTop.on("click", function (event) {
    event.preventDefault();
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      scrollTopDuration
    );
  });

  $(".input-contact input, .textarea-contact textarea").focus(function () {
    $(this).next("span").addClass("active");
  });
  $(".input-contact input, .textarea-contact textarea").blur(function () {
    if ($(this).val() === "") {
      $(this).next("span").removeClass("active");
    }
  });
});
