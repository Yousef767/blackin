var swiper5 = new Swiper(".mySwiper", {
  freeMode: true,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: true,
    reverseDirections:true,
  },
  speed: 3000,
  freeModeMomentum: false,
  spaceBetween: 20,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      freeMode:false,
      loop:false,
      grabCursor: false,
      autoplay:false,
      spaceBetween: 10,
    },
    360: {
      slidesPerView: 2,
      freeMode:false,
      loop:false,
      grabCursor: false,
      autoplay:false,
      spaceBetween: 10,
    },
    451: {
      slidesPerView: 2.5,
      freeMode:false,
      loop:false,
      grabCursor: false,
      autoplay:false,
      spaceBetween: 10,
    },
    520: {
      slidesPerView: 4,
      freeMode:false,
      loop:false,
      grabCursor: false,
      autoplay:false,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 5,
      freeMode:true,
      loop:true,
      grabCursor: true,
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
        reverseDirections:true,
      },
      spaceBetween: 20,
    },
    950: {
      slidesPerView: 6,
      freeMode:true,
      loop:true,
      grabCursor: true,
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
        reverseDirections:true,
      },
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 7,
      freeMode:true,
      loop:true,
      grabCursor: true,
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
        reverseDirections:true,
      },
      spaceBetween: 20,
    },
    1300: {
      slidesPerView: 8,
      freeMode:true,
      loop:true,
      grabCursor: true,
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
        reverseDirections:true,
      },
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 10,
      freeMode:true,
      loop:true,
      grabCursor: true,
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
        reverseDirections:true,
      },
      spaceBetween: 20,
    },
  },
});
var swiper = new Swiper(".sw2", {
  slidesPerView: 1,
  spaceBetween: 20,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    360: {
      slidesPerView: 1,
    },
    421: {
      slidesPerView: 1.3,
    },
    520: {
      slidesPerView: 1.5,
    },
    750: {
      slidesPerView: 2,
    },
    850: {
      slidesPerView: 2.5,
    },
    1050: {
      slidesPerView: 3.2,
    },
    1250: {
      slidesPerView: 3.5,
    },
  },
});

var swiper = new Swiper(".sw3", {
  slidesPerView: 1,
  spaceBetween: 20,
  mousewheel: {
    releaseOnEdges: true,
  },
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 1.2,
    },
    750: {
      slidesPerView: 1.2,
    },
    850: {
      slidesPerView: 1.5,
    },
    1250: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 2.5,
    },
  },
});

var swiper = new Swiper(".swAbout", {
  slidesPerView: 1,
  loop: true,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
  },
});
var swiper = new Swiper(".sugSwiper", {
  slidesPerView: 1,
  loop: true,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
  },
});

var swiper = new Swiper(".filterSw", {
  spaceBetween: 40,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 1.5,
    },
    380: {
      slidesPerView: 1.7,
    },
    450: {
      slidesPerView: 2,
    },
    550: {
      slidesPerView: 2.7,
    },
    780: {
      slidesPerView: 3,
    },
    850: {
      slidesPerView:4,
    },
    1050: {
      slidesPerView: 5,
    },
    1250: {
      slidesPerView: 6,
    },
  },
});
