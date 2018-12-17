$(document).ready(function() {

  window.onscroll = function() {show()};

  var navBar = document.getElementById('navvy');
  var banner = document.getElementById('banner');
  var banners = banner.offsetTop;

  function show() {
    if (window.pageYOffset >= banners) {
      navBar.classList.add('sticky');
    } else {
      navBar.classList.remove('sticky');
    }
  }

});
