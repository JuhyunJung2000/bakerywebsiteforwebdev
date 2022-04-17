$(document).ready(function() {
  //cursor to pointer on question
  $("h4.question").hover(function() {
         $(this).css('cursor','pointer');
     });
     //fixate navigation bar
     $(document).scroll(function () {
        var scroll = $(this).scrollTop();
        var topDist = $("div.lower-header").position();
        if (scroll > topDist.top) {
            $('div.lower-header').css({"position":"fixed","top":"0"});
        } else {
            $('div.lower-header').css({"position":"static","top":"auto","width":"100%"});
        }
    });
});


//show question
$("h4.question").click(function(){
          $("p").toggle();
      });
//slideshow
      let slideIndex = 1;
      showSlides(slideIndex);

      function plusSlides(n) {
        showSlides(slideIndex += n);
      }

      function currentSlide(n) {
        showSlides(slideIndex = n);
      }

      function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
      }
