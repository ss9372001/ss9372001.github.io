

const buttonsWrapper = document.querySelector(".carou");

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "DIV") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      e.target.classList.add("active");
    } 
  }
});


let slidePosition =0;
const slides = document.getElementsByClassName("slide");
const totalSlides=slides.length;

document.getElementById("carousel_button--next").addEventListener('click', function(){
    moveToNextSlide();
});
document.getElementById("carousel_button--prev").addEventListener('click', function(){
    moveToPrevSlide();
});

function updateSlidePosition(){
  for(let slide of slides){
      slide.classList.remove("slide_visible");
      slide.classList.add("slide_hidden");
  }
  slides[slidePosition].classList.add("slide_visible")
}

function moveToNextSlide(){
    if(slidePosition == totalSlides-1){
        slidePosition=0;
    } else {
        slidePosition++;
    }
    updateSlidePosition();
}

function moveToPrevSlide(){
    if(slidePosition == 0){
        slidePosition=totalSlides-1;
    } else {
        slidePosition--;
    }
    updateSlidePosition();
}
