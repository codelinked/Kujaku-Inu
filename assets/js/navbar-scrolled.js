$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav-scroll");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});