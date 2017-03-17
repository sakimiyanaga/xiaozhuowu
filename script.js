  $(".navbar-nav li a[href^='#']").on('click', function () {
  	 var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });