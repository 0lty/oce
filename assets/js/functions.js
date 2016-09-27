$(document).ready(function() {
  $(".fancybox").fancybox();

  $('.section-container.webapps').hide();
  $('.section-container.maps').hide();
  $('.section-container.db').hide();

  $('.click-gis.webapss-show').click(function() {
      $('.section-container.maps').hide();
      $('.section-container.db').hide();
      $('.section-container.webapps').slideDown();

      $('html, body').animate({
        scrollTop: $(".section-container.webapps").offset().top
    }, 1000);
  });

  $('.click-gis.maps-show').click(function() {
      $('.section-container.webapps').hide();
      $('.section-container.db').hide();
      $('.section-container.maps').slideDown();

      $('html, body').animate({
        scrollTop: $(".section-container.maps").offset().top
    }, 1000);
  });

  $('.click-gis.db-show').click(function() {
      $('.section-container.maps').hide();
      $('.section-container.webapps').hide();
      $('.section-container.db').slideDown();

      $('html, body').animate({
        scrollTop: $(".section-container.db").offset().top
    }, 1000);
  });
});
