$(document).ready(function () {
  var scrollTop = $("#scrollToTop");

  // When "Scroll to top" element should be shown or hidden
  $(window).scroll(function() {
    var scrolled = $(this).scrollTop();
    if (scrolled > 100) {
      $(scrollTop).css("display", "block");
    } else {
      $(scrollTop).css("display", "none");
    }
  });

  // Scroll to top function
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500);
    return false;
  });
});