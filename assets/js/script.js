document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.querySelector(".slide-dots");
  let currentIndex = 0;
  const interval = 5000;

  // Generate dots
  slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      clearInterval(slideTimer);
      showSlide(i);
      slideTimer = setInterval(nextSlide, interval);
    });
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".slide-dots .dot");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      dots[i].classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");
    currentIndex = index;
  }

  function nextSlide() {
    const next = (currentIndex + 1) % slides.length;
    showSlide(next);
  }

  showSlide(0);
  let slideTimer = setInterval(nextSlide, interval);

  const slidesWrapper = document.querySelector(".slides");

  slidesWrapper.addEventListener("mouseenter", () => clearInterval(slideTimer));
  slidesWrapper.addEventListener(
    "mouseleave",
    () => (slideTimer = setInterval(nextSlide, interval))
  );

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      const prev = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(prev);
    } else if (e.key === "ArrowRight") {
      const next = (currentIndex + 1) % slides.length;
      showSlide(next);
    }
  });
});
// FAQ toggle
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.querySelector(".faq-header").addEventListener("click", () => {
    faqs.forEach((f) => f !== faq && f.classList.remove("active"));
    faq.classList.toggle("active");
  });
});

// Review Slider
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  freeMode: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Truseted Service Functionality

document.addEventListener("DOMContentLoaded", function () {
  const target = document.getElementById("target-image");

  const imageMap = {
    "service-1": "assets/images/service-1.png",
    "service-2": "assets/images/service-2.jpg",
    "service-3": "assets/images/service-3.jpg",
    "service-4": "assets/images/service-4.jpg",
    "service-5": "assets/images/service-5.jpg",
  };
  Object.values(imageMap).forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  for (const id in imageMap) {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener("click", function () {
        target.src = imageMap[id];
        target.style.setProperty("display", "block", "important");
        target.style.setProperty("opacity", "1", "important");
        document.querySelectorAll(".service-discription").forEach((desc) => {
          desc.style.display = "none";
        });
        const desc = element.querySelector(".service-discription");
        if (desc) {
          desc.style.display = "block";
        }
        document.querySelectorAll(".service").forEach((el) => {
          el.classList.remove("serviceactive");
        });
        element.classList.add("serviceactive");
      });
    }
  }
});

// Product Discription Tab
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tablinks").click();
});

// Changing product discription

function changeImage(imgurl) {
  let mainImg = document.getElementById("product-centered-img");
  mainImg.src = imgurl;
  console.log("meow");
}

document.addEventListener("DOMContentLoaded", function () {
  const dosageCards = document.getElementsByClassName("dosage-card");

  // Make the first one active by default
  if (dosageCards.length > 0) {
    dosageCards[0].classList.add("activeDosage");
  }

  for (let card of dosageCards) {
    card.addEventListener("click", function () {
      for (let c of dosageCards) {
        c.classList.remove("activeDosage");
      }
      this.classList.add("activeDosage");
    });
  }
});

// Time Line
  document.addEventListener("DOMContentLoaded", () => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("highlight");
                } else {
                    entry.target.classList.remove("highlight");
                }
            });
        }, {
            threshold: 0.8
        });

        document.querySelectorAll(".timeline").forEach(timeline => {
            observer.observe(timeline);
        });
    });

// Service Page Discription Tab
function ProductDis(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tab-link").click();
});    
