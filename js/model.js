let burger = document.getElementsByClassName("burger")[0];
let show = document.getElementsByClassName("nav-group")[0];

burger.addEventListener("click", () => {
  burger.classList.toggle("show-menu");
  show.classList.toggle("show");
});

//   tabs

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

//     modal   window   for videos

document.addEventListener("DOMContentLoaded", function () {
  /* Записываем в переменные массив элементов-кнопок и подложку.
       Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
  var modalButtons = document.querySelectorAll(".js-open-modal"),
    overlay = document.querySelector(".js-overlay-modal"),
    closeButtons = document.querySelectorAll(".js-modal-close");

  /* Перебираем массив кнопок */
  modalButtons.forEach(function (item) {
    /* Назначаем каждой кнопке обработчик клика */
    item.addEventListener("click", function (e) {
      /* Предотвращаем стандартное действие элемента. Так как кнопку разные
             люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
             Нужно подстраховаться. */
      e.preventDefault();

      /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
             и будем искать модальное окно с таким же атрибутом. */
      var modalId = this.getAttribute("data-modal"),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + '"]'
        );

      /* После того как нашли нужное модальное окно, добавим классы
             подложке и окну чтобы показать их. */
      modalElem.classList.add("showmodal");
      overlay.classList.add("showmodal");
    });
  });

  closeButtons.forEach(function (item) {
    item.addEventListener("click", function (e) {
      var parentModal = this.closest(".modal");

      parentModal.classList.remove("showmodal");
      overlay.classList.remove("showmodal");
    });
  });

  if (document.querySelector(".js-overlay-modal")) {
    overlay.addEventListener("click", function () {
      document.querySelector(".modal.showmodal").classList.remove("showmodal");
      this.classList.remove("showmodal");
    });
  }
});

//    form

if (document.querySelector(".contact-form")) {
  let contactform = document.querySelector(".contact-form");
  if (contactform) {
    contactform.addEventListener("submit", function (e) {
      e.preventDefault();
      let data = new FormData(this);
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "../order/");
      xhr.onload = function () {
        console.log(this.responseText);
        contactform.style.display = "none";
        alert("Спасибо, ваша заявка принята!");
        // let newDiv = document.createElement("div");
        // newDiv.innerHTML = "<h1>Спасибо, ваша заявка принята!</h1>";
      };
      xhr.send(data);
    });
  }
}
