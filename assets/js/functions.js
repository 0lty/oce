$(document).ready(function() {
  $(".fancybox").fancybox();

  $('.section-container.webapps').hide();
  $('.section-container.maps').hide();
  $('.section-container.db').hide();

  $('.w-show').click(function() {
      $('.section-container.maps').hide();
      $('.section-container.db').hide();
      $('.section-container.webapps').slideDown();

      $('html, body').animate({
        scrollTop: $(".section-container.webapps").offset().top
    }, 1000);
  });

  $('.m-show').click(function() {
      $('.section-container.webapps').hide();
      $('.section-container.db').hide();
      $('.section-container.maps').slideDown();

      $('html, body').animate({
        scrollTop: $(".section-container.maps").offset().top
    }, 1000);
  });

  $('.db-show').click(function() {
      $('.section-container.maps').hide();
      $('.section-container.webapps').hide();
      $('.section-container.db').slideDown();

      $('html, body').animate({
        scrollTop: $(".section-container.db").offset().top
    }, 1000);
  });
});
