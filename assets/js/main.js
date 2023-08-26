/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
 navToggle= document.getElementById('nav-toggle'),
 navClose= document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });

}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });

}


/*=============== SCROLL HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    // When the scroll is greater than 40 viewport height, add the 'scroll-header' class to the header tag
    if (this.scrollY >= 40) {
      header.classList.add('scroll-header');
    } else {
      header.classList.remove('scroll-header');
    }
}
  
// Attach the scroll event listener to the window
window.addEventListener('scroll', scrollHeader);

  

/*=============== BRAND SWIPER ===============*/
var brandSwiper = new Swiper('.brand-swiper', {
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        450: {
            slidesPerView: 2,
            spaceBetween: 24,
        },  
        768: {
            slidesPerView: 3,
            spaceBetween: 24,
        },

        992: {
            slidesPerView: 4,
            spaceBetween: 24,
        },

        1200: {
            slidesPerView: 5,
            spaceBetween: 24,
        },
        
    },
});

/*=============== ANIME SWIPER ===============*/
var animeSwiper = new Swiper('.anime-swiper1', {
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    speed: 500,
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
    },
});

var animeSwiper = new Swiper('.anime-swiper', {
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 1000,
    },
    speed: 800,
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
    },
});







  
  

AOS.init({
    duration: 2000, // Set your desired duration here
});
  