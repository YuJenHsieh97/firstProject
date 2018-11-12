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

function enlarge() {
 document.getElementById('mybutton').style.height="100%";
 document.getElementById('mybutton').style.width="100%";
 }


function reset() {
 document.getElementById('mybutton').style.height="10%";
 document.getElementById('mybutton').style.width="10%";
 }
