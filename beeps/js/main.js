$(function() {
  $('.hamburger').click(function() {
    $('.menu ul').slideDown();
    $('.hamburger').hide();
    $('.cross').show();
  });

  $('.cross').click(function() {
    $('.menu ul').slideUp();
    $('.hamburger').show();
    $('.cross').hide();
  });
});
