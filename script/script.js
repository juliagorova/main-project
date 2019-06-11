// Init Google Map
function initMap() {
  var bakeryLocation = { lat: 49.8410154, lng: 24.0316713 };
  var map = new google.maps.Map(
      document.getElementById('map'), { zoom: 16, center: bakeryLocation });
  var marker = new google.maps.Marker({ position: bakeryLocation, map: map });
}

//Scroll to top functionality
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