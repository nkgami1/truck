$(function () {
  var pagetop = $("#page-top");
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $("body, html").animate({ scrollTop: 0 }, 500);
    return false;
  });
});
$(".h-btn").click(function () {
  $(this).toggleClass("active");
  $(".h-menu").toggleClass("active");
  $(".menu-black").toggleClass("active");
});
$(".h-menu").click(function () {
  $(this).toggleClass("active");
  $(".h-btn").toggleClass("active");
  // $("")
});
$(".menu-black").click(function () {
  $(this).removeClass("active");
  $(".h-menu").removeClass("active");
  $(".h-btn").removeClass("active");
});
