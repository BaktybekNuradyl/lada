
//   tabs  menu  
document.addEventListener('click', function(event) {
  let id = event.target.dataset.toggleId;
  if (!id) return;

  let elem = document.getElementById(id);

   elem.hidden = !elem.hidden;
   
});




//     color   tabs
let redCar = document.querySelector('.red-car').innerHTML;
let blueCar = document.querySelector('.blue-car').innerHTML;
let greyCar = document.querySelector(".grey-car").innerHTML;
let darkGreyCar = document.querySelector(".darkgrey-car").innerHTML;
let darkGreenCar = document.querySelector(".darkgreen-car").innerHTML;
let brownCar = document.querySelector(".brown-car").innerHTML;
let whiteCar = document.querySelector(".white-car").innerHTML;
let blackCar = document.querySelector(".black-car").innerHTML;


const tabButtons = document.querySelector(".color-rounds")
const contentContainer = document.querySelector(".color-content")


tabButtons.addEventListener("click", function(e) {
  newAction(e.target.innerText)
})

function newAction(tabTarget) {
  switch(tabTarget) {
    case "redcar":
    changeTextTo(redCar)
    break
    case "bluecar":
    changeTextTo(blueCar)
    break
    case "greycar":
    changeTextTo(greyCar)
    break
    case "darkgreycar":
    changeTextTo(darkGreyCar)
    break
    case "darkgreencar":
    changeTextTo(darkGreenCar)
    break
    case "browncar":
    changeTextTo(brownCar)
    break
    case "whitecar":
    changeTextTo(whiteCar)
    break
    case "blackcar":
    changeTextTo(blackCar)
    break
  }
}

function changeTextTo(newText) {
  contentContainer.innerHTML = newText;
}








//SLIDER
let slideIndex = 1;
showSlides(slideIndex);

function plus(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("main");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}







//      slider   of comfort  
document.addEventListener('DOMContentLoaded', function() {
   const slider = document.querySelector('.slider-of');
   const sliderItem = document.querySelectorAll('.slider-item-of');
   const sliderControl = document.querySelector('.slider-control-of');
   const sliderControlNext = document.querySelector('.slider-control-next-of');
   const sliderControlPrev = document.querySelector('.slider-control-prev-of');
   const pagination = document.querySelector('.pagination');

   const sliderWidth = slider.clientWidth;
   sliderControl.style.width = `${sliderWidth - 50}px`;

   let sliderActiveItem = 0;

   const deleteActivationOfSlider = () => {
       const itemArray = Array.from(slider.children);
       itemArray.forEach((element) => {
           element.classList.remove('slider-item-active');
       });
   }

   const setActivationOfSlider = () => {
       sliderItem[sliderActiveItem].classList.add('slider-item-active');
   }

   sliderControlPrev.addEventListener('click', () => {
       deleteActivationOfSlider();
       if (sliderActiveItem > 0) {
           sliderActiveItem--
       } else {
           sliderActiveItem = (sliderItem.length - 1)
       }
       setActivationOfSlider();
   })

   sliderControlNext.addEventListener('click', () => {
       deleteActivationOfSlider();
       if (sliderActiveItem < (sliderItem.length - 1)) {
           sliderActiveItem++
       } else {
           sliderActiveItem = 0
       }
       setActivationOfSlider();
   })

   const setSliderControlItem = () => {
      const sliderItems = Array.from(sliderControl.children);
      sliderItems.forEach((element) => {
          element.classList.add('slider-control__arrow');
      });
  }

  const progressBar = `<div class="pagination-bar" background="" width=""></div>`
  pagination.insertAdjacentHTML('beforeend', progressBar);

  const paginationProgress = () => {
      let progressItemPercent = 100 / sliderItem.length;
      const totalProgressPercent = progressItemPercent * (sliderActiveItem + 1);

      const getProgressBar = document.querySelector('.pagination-bar');
      getProgressBar.style.width = `${totalProgressPercent}%`;
  }

  setSliderControlItem();
  paginationProgress();
  setActivationOfSlider();

}, false);





//   tabs  motorss
let tabsMotor = document.querySelectorAll('.tab-motor');
        let contentMotor = document.querySelectorAll('.content-motor__item');
        for (let i = 0; i < tabsMotor.length; i++) {            
            tabsMotor[i].addEventListener('click', () => tabClick(i));
        }

        function tabClick(currentTab) {
            removeActive();
            tabsMotor[currentTab].classList.add('act');
            contentMotor[currentTab].classList.add('act');
        }

        function removeActive() {
            for (let i = 0; i < tabsMotor.length; i++) {
                tabsMotor[i].classList.remove('act');
                contentMotor[i].classList.remove('act');
            }
        }