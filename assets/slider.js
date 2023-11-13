const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,
    spaceBetween: 90,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
      },
    slidesPerView: 2,
    breakpoints: {
        320: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 90
        }
      }

  });
  const mybutton = document.querySelector('.totop')
  
  window.onscroll = function () {
    scrollFunction();
  }; 


  mybutton.addEventListener("click", backToTop);
    
    function backToTop() {
     window.scrollTo({ top: 0, behavior: 'smooth' });

    }


    function scrollFunction() {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          mybutton.style.zindex = "3";
          mybutton.style.opacity = "1";
        } else {
            mybutton.style.zindex = "-99";
            mybutton.style.opacity = "0";
        }
      }