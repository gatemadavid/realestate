let sliderImages = document.querySelectorAll(".slide"),
  arrowRight = document.querySelector("#arrow-right"),
  arrowLeft = document.querySelector("#arrow-left"),
  i = 0,
  time = 5000,
  current = 0;
showSlides();
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}
//left arrow
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

//right arrow
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

function showSlides() {
  for (i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
  current++;

  if (current > sliderImages.length) {
    current = 1;
  }
  sliderImages[current - 1].style.display = "block";
  setTimeout(showSlides, time);
}

startSlide();

let slider = document.getElementById("range");
let output = document.getElementById("slider-value");
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
};

function displayList() {
  let items = document.querySelectorAll(".property");
}
