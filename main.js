let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("Slides");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000);
}
// console.log(window.scrollY);
function enlarge(){

  let plus = document.querySelector("#mybutton");
  if (298 <= document.scrollY){
    plus.className += " big";
  }
}
