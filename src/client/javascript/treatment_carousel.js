let slidePosition =0;
const slides = document.getElementsByClassName("slidee");
const totalSlides=slides.length;

document.getElementById("next-btn").addEventListener('click', function(){
    moveToNextSlide();
});
document.getElementById("prev-btn").addEventListener('click', function(){
    moveToPrevSlide();
});

function updateSlidePosition(){
  for(let slide of slides){
      slide.classList.remove("slidee--visible");
      slide.classList.add("slidee--hidden");
  }
  slides[slidePosition].classList.add("slidee--visible")
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
