let slideIndex = 1;
showSlides(slideIndex);

function slideChange(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  console.log("here");
  let i;
  let slides = document.getElementsByClassName("project");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
  console.log("made it here");
}