$(document).ready(function () {
  var scrollTop = $("#scrollToTop");

  $(window).scroll(function() {
    var scrolled = $(this).scrollTop();
    if (scrolled > 100) {
      $(scrollTop).css("display", "block");
    } else {
      $(scrollTop).css("display", "none");
    }
  });

  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 900);
    return false;
  });
});