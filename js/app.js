function el(el) {
  return document.querySelector(el);
}

//        burger

let burger = document.getElementsByClassName("burger")[0];
let show = document.getElementsByClassName("nav-wrapper")[0];

burger.addEventListener("click", () => {
  burger.classList.toggle("show-menu");
  show.classList.toggle("show");
});

//   main-page  main  slyder

let widthInput = document.getElementById("slider-width");

if (document.getElementById("slider-width")) {
  widthInput.addEventListener("change", (e) => {
    let currentValue = e.currentTarget.value;
    let pSliderWidth = document.getElementsByClassName("pSlider");
    pSliderWidth.style.width = `${currentValue}px`;
    let liSlideWidth = document.getElementsByClassName(".slide-main__page");
    for (let i = 0; i < liSlideWidth.length; i++) {
      liSlideWidth[i].style.width = `${currentValue}px`;
    }
  });
}

let heightInput = document.getElementById("slider-height");

if (document.getElementById("slider-height")) {
  heightInput.addEventListener("change", (e) => {
    let currentValue = e.currentTarget.value;
    let pSliderWidth = document.getElementById("pSlider");
    pSliderWidth.style.height = `${currentValue}px`;
    let liSlideWidth = document.getElementsByClassName(".slide-main__page");
    for (let i = 0; i < liSlideWidth.length; i++) {
      liSlideWidth[i].style.height = `${currentValue}px`;
    }
  });
}
//    nav menu

const another = document.querySelector(".white-logo");

let lastScroll = 0;
const defaultOffset = 70;
const nav = document.querySelector(".nav");

const scrollPosition = () =>
  window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => nav.classList.contains("hide");

window.addEventListener("scroll", () => {
  if (
    scrollPosition() > lastScroll &&
    !containHide() &&
    scrollPosition() > defaultOffset
  ) {
    //scroll down
    nav.classList.add("hide");
  } else if (scrollPosition() < lastScroll && containHide()) {
    //scroll up
    nav.classList.remove("hide");
    nav.classList.add("another-nav");
    another.style.background = ' url("img/icon/logo.dark.png")';
    another.style.backgroundPosition = "center";
    another.style.backgroundSize = "contain";
    another.style.backgroundRepeat = "no-repeat";
  } else {
    removeAnother();
  }

  lastScroll = scrollPosition();
});

function removeAnother() {
  if (document.documentElement.scrollTop === 0) {
    nav.classList.remove("another-nav");
    another.style.background = 'url("img/logo-white.png")';
    another.style.backgroundPosition = "center";
    another.style.backgroundSize = "contain";
    another.style.backgroundRepeat = "no-repeat";
  }
}

// white  navigation

const navFirst = el(".mainer-page");
const navLinks = el(".nav-links");

document.addEventListener("click", (e) => {
  // e.preventDefault();

  if (e.target.classList.contains("nav-links")) {
    if (el(".nav-add-link.show-white")) {
      el(".nav-add-link.show-white").classList.remove("show-white");
    }
    console.log("." + e.target.dataset.target);
    document
      .querySelector("." + e.target.dataset.target)
      .classList.add("show-white");
    navFirst.style.display = "none";
    nav.style.color = "#4c5865";
    nav.style.background = "white";
  }
  if (e.target.classList.contains("close-model")) {
    document
      .querySelector("." + e.target.dataset.target)
      .classList.remove("show-white");
    navFirst.style.display = "block";
    nav.style.color = "white";
    nav.style.background = "transparent";
  }
});

nav.addEventListener("mouseover", () => {
  nav.classList.add("another");
  another.style.background = ' url("img/icon/logo.dark.png")';
  another.style.backgroundPosition = "center";
  another.style.backgroundSize = "contain";
  another.style.backgroundRepeat = "no-repeat";
});
nav.addEventListener("mouseout", () => {
  nav.classList.remove("another");
  another.style.background = 'url("img/logo-white.png")';
  another.style.backgroundPosition = "center";
  another.style.backgroundSize = "contain";
  another.style.backgroundRepeat = "no-repeat";
});

//    tab menu

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});

//    tabs   model

const tabmodel = document.querySelectorAll('[data-role="tab"]'),
  tabContentmodel = document.querySelectorAll(".tab-panel");

tabmodel.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tc) => {
      tc.classList.remove("is-active");
    });
    target.classList.add("is-active");

    tabmodel.forEach((t) => {
      t.classList.remove("is-active");
    });
    tab.classList.add("is-active");
  });
});

//     news slyder

if (document.getElementById("container")) {
  var container = document.getElementById("container");
  var slider = document.getElementById("slider");
  var slides = document.getElementsByClassName("slide").length;
  var buttons = document.getElementsByClassName("btn");

  var currentPosition = 0;
  var currentMargin = 0;
  var slidesPerPage = 0;
  var slidesCount = slides - slidesPerPage;
  // console.log((slidesCount = slides - slidesPerPage));
  var containerWidth = container.offsetWidth;
  var prevKeyActive = false;
  var nextKeyActive = true;

  window.addEventListener("resize", checkWidth);

  function checkWidth() {
    setParams(containerWidth);
  }

  function setParams(w) {
    if (w < 551) {
      slidesPerPage = 1;
    } else {
      if (w < 901) {
        slidesPerPage = 2;
      } else {
        if (w < 1101) {
          slidesPerPage = 3;
        } else {
          slidesPerPage = 4;
        }
      }
    }
    slidesCount = slides - slidesPerPage;
    if (currentPosition > slidesCount) {
      currentPosition = slidesPerPage;
      // console.log((currentPosition -= slidesPerPage));
    }
    //   zdes pomenyal   100 na 1
    currentMargin = -currentPosition * (1 / slidesPerPage);
    // console.log((slider.style.marginLeft = currentMargin + "%"));
    slider.style.marginLeft = currentMargin + "%";
    if (currentPosition > 0) {
      buttons[0].classList.remove("inactive");
    }
    if (currentPosition < slidesCount) {
      buttons[1].classList.remove("inactive");
    }
    if (currentPosition >= slidesCount) {
      buttons[1].classList.add("inactive");
    }
  }

  setParams();
}

function slideRight() {
  if (currentPosition != 0) {
    //   zdes pomenyal   100 na 1
    slider.style.marginLeft = currentMargin + 1 / slidesPerPage + "%";
    currentMargin += 100 / slidesPerPage;
    currentPosition--;
  }
  if (currentPosition === 0) {
    buttons[0].classList.add("inactive");
  }
  if (currentPosition < slidesCount) {
    buttons[1].classList.remove("inactive");
  }
}

function slideLeft() {
  if (currentPosition != slidesCount) {
    slider.style.marginLeft = currentMargin - 100 / slidesPerPage + "%";
    currentMargin -= 100 / slidesPerPage;
    currentPosition++;
  }
  if (currentPosition == slidesCount) {
    buttons[1].classList.add("inactive");
  }
  if (currentPosition > 0) {
    buttons[0].classList.remove("inactive");
  }
}
