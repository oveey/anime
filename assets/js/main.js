document.addEventListener('DOMContentLoaded', () => {
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navLinks = document.querySelectorAll('.nav__link'); // Assuming this is your navigation links

  // Toggle the navigation menu
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show-menu');
    });
  }

  // Close the navigation menu
  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  }

  // Close the navigation menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  });
});




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


// Smooth scrolling behavior for internal navigation links
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');

    if (targetId.startsWith('#')) { // Check if the link is internal
      e.preventDefault();

      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav__link');
  const subscribeLink = document.querySelector('.nav__link[href="#Subscribe"]');
  const subscribeSection = document.getElementById('subscribe');

  subscribeLink.addEventListener('click', (event) => {
    event.preventDefault();
    const scrollToOptions = {
      top: subscribeSection.offsetTop,
      behavior: 'smooth'
    };
    window.scrollTo(scrollToOptions);
  });

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        const targetLinkId = `#${section.id}`;
        const activeLink = document.querySelector(`.nav__link[href="${targetLinkId}"]`);

        if (activeLink) {
          navLinks.forEach(link => link.classList.remove('active-link'));
          activeLink.classList.add('active-link');
        }
      }
    });
  });
});



// const plans = document.querySelector('.plan');
// const circle = card.querySelector('.circle');

// let isDragging = false;

// circle.addEventListener('mousedown', (e) => {
//   isDragging = true;
// });

// document.addEventListener('mousemove', (e) => {
//   if (!isDragging) return;

//   const Rect = card.getBoundingClientRect();
//   const mouseX = e.clientX - cardRect.left;
//   const mouseY = e.clientY - cardRect.top;

//   plan.style.setProperty('--left', `${mouseX}px`);
//   plan.style.setProperty('--top', `${mouseY}px`);
// });

// document.addEventListener('mouseup', () => {
//   isDragging = false;
// });

const plan = document.querySelector('.plan');

plan.addEventListener('mousemove', (e) => {
  const rect = plan.getBoundingClientRect();

  const left = e.clientX - rect.left;
  const top = e.clientY - rect.top;

  plan.style.setProperty('--left', `${left}px`);
  plan.style.setProperty('--top', `${top}px`);
});











  
  

AOS.init({
    duration: 1000, // Set your desired duration here
});
  