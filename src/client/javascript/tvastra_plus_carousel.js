

const buttonsWrapper = document.querySelector(".carou");
const slides = document.querySelector(".deficiency_profiles");

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "DIV") {
    slides.style.overflow="hidden";
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");

    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-100%)";
      slides.style.overflow="visible";
      e.target.classList.add("active");
    } 
  }
});
