/* ===================== MENU SHOW AND HIDE ===================== */
// Variables
const navToggle = document.querySelector("#nav-toggle");
const navMenu = document.querySelector("#nav-menu");
const navClose = document.querySelector("#nav-close");

// show menu
const showMenu = function () {
  navMenu.classList.add("show__menu");
};
navToggle.addEventListener("click", showMenu);

// Hide menu
const hideMenu = function () {
  navMenu.classList.remove("show__menu");
};
navClose.addEventListener("click", hideMenu);

/* ===================== MENU HIDE AFTER CLICK ON LINK ===================== */
// Variables
const menuButtons = Array.from(document.querySelectorAll(".nav__item"));
// Hide menu
menuButtons.forEach((button) => {
  button.addEventListener("click", hideMenu);
});

/* ===================== ACCORDION SKILLS ===================== */
const skillsHeader = Array.from(document.querySelectorAll(".skills__header"));
const skillsContent = Array.from(
  document.getElementsByClassName("skills__content")
);

skillsHeader.forEach((header) => {
  header.addEventListener("click", (e) => {
    if (
      e.target.closest(".skills__content").classList.contains("skills__closed")
    ) {
      e.target.closest(".skills__content").classList.remove("skills__closed");
      e.target.closest(".skills__content").classList.add("skills__open");
    } else {
      e.target.closest(".skills__content").classList.add("skills__closed");
      e.target.closest(".skills__content").classList.remove("skills__open");
    }
  });
});

/* ===================== TOGGLING QUALIFICATIONS ===================== */
const tabs = document.querySelectorAll(".qualification__button");
const contentEducation = document.querySelector("#education");
const contentWork = document.querySelector("#work");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    if (e.target.innerHTML === "Work") {
      tabs[0].classList.remove("active__button");
      tabs[1].classList.add("active__button");
      contentWork.classList.add("qualification__active");
      contentEducation.classList.remove("qualification__active");
      contentEducation.classList.add("qualification__hidden");
    }
    if (e.target.innerHTML === "Education") {
      tabs[0].classList.add("active__button");
      tabs[1].classList.remove("active__button");
      contentEducation.classList.add("qualification__active");
      contentWork.classList.remove("qualification__active");
      contentWork.classList.add("qualification__hidden");
    }
  });
});
/* ===================== SERVICES MODAL ===================== */
const modalViews = Array.from(document.querySelectorAll(".services__modal"));
const modalBtns = document.querySelectorAll(".services__button");
const modalCloses = document.querySelectorAll(".services__modal-close");
const modalBackground = document.querySelectorAll(".services__modal");

modalBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const click = Array.from(e.target.classList);

    if (click.includes("ui/ux")) {
      modalViews[0].classList.add("modal__active");
    } else if (click.includes("frontend")) {
      modalViews[1].classList.add("modal__active");
    } else if (click.includes("branding")) {
      modalViews[2].classList.add("modal__active");
    }
  });
});

modalCloses.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalViews.forEach((view) => {
      view.classList.remove("modal__active");
    });
  });
});

modalBackground.forEach((background) => {
  background.addEventListener("click", () => {
    modalViews.forEach((view) => {
      view.classList.remove("modal__active");
    });
  });
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modalViews.forEach((view) => {
      view.classList.remove("modal__active");
    });
  }
});

/* ===================== PORTFOLIO SWIPER ===================== */
var swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* ===================== Tools SWIPER ===================== */
var swiperTools = new Swiper(".tools__container ", {
  loop: true,
  grabCursor: true,

  spaceBetween: 48,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 3,
    },
  },
});

/* ===================== SCROLL SECTIONS ===================== */
const sections = document.querySelectorAll("section[id]");

function removeAllActiveClasses() {
  const navLinks = Array.from(document.querySelectorAll(".nav__menu a"));
  navLinks.forEach((link) => {
    link.classList.remove("active-link");
  });
}

function addActiveClass(id) {
  const selector = `nav a[href="#${id}"]`;
  document.querySelector(selector).classList.add("active-link");
}

onscroll = function () {
  let scrollPosition = document.documentElement.scrollTop;

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop &&
      scrollPosition < section.offsetTop + section.offsetHeight
    ) {
      const currentId = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveClass(currentId);
    }
  });
};

/* ===================== CHANGE HEADER BACKGROUND ===================== */
onscroll = function () {
  let scrollPosition = document.documentElement.scrollTop;
  const header = document.querySelector("#header");
  const apps = document.querySelector(".uil-apps");
  const logo = document.querySelector(".nav__logo");
  const scroll = document.querySelector(".scrollup");
  const theme = document.querySelector("#theme-button");
  const navLinks = document.querySelectorAll("a[rel]");

  if (scrollPosition >= 300) {
    header.classList.add("header__scroll");
    apps.classList.add("nav__scroll");
    logo.classList.add("nav__scroll");
    theme.classList.add("nav__scroll");
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove("nav__link");
      navLinks[i].classList.add("nav__link__scroll");
    }
    /* ===================== SHOW SCROLL ===================== */
    scroll.classList.add("show__scroll");
  } else {
    header.classList.remove("header__scroll");
    apps.classList.remove("nav__scroll");
    logo.classList.remove("nav__scroll");
    theme.classList.remove("nav__scroll");
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove("nav__link__scroll");
      navLinks[i].classList.add("nav__link");
    }
    /* ===================== HIDE SCROLL ===================== */
    scroll.classList.remove("show__scroll");
  }
};

/* ===================== ACTIVATE DARK MODE ===================== */
const themeBtn = document.querySelector("#theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeBtn.classList.toggle(iconTheme);
});
