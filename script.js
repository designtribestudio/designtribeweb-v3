//INTERSECTION OBSERVERS
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


//Slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("f-dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("f-dot-active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " f-dot-active";
}


// //test-slider
// var ImageIndex = 1;
// showDivs (ImageIndex);

// function plusDivs(n){
//     showDivs(ImageIndex += n);
// }

// function showDivs(n){
//     var i;
//     var x = document.getElementsByClassName("exp-content-head");
//     var y = document.getElementsByClassName("exp-content-text");
//     var z = document.getElementsByClassName("exp-btn-services");
//     var a =  document.getElementsByClassName("dot");
//     if(n > x.length) {ImageIndex = 1}
//     if(n < 1) {ImageIndex = x.length}
//     for(i = 0; i < x.length; i++){
//         x[i].style.display ="none";
//         y[i].style.display ="none"
//         z[i].style.display = "none";
//         a[i].style.background = "#C4C4C4";
//     }
//     x[ImageIndex - 1].style.display ="block";
//     y[ImageIndex - 1].style.display ="block";
//     z[ImageIndex - 1].style.display ="block";
//     a[ImageIndex - 1].style.background ="black";
// };


// slider2
var slideIndex2 = 1;
showSlidesTwo(slideIndex2);

function plusSlidesTwo(m) {
  showSlidesTwo(slideIndex2 += m);
}

function currentSlideTwo(m) {
  showSlidesTwo(slideIndex2 = m);
}

function showSlidesTwo(m) {
  var j;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("f-dot2");
  if (m > slides2.length) {slideIndex2 = 1}    
  if (m < 1) {slideIndex2 = slides2.length}
  for (j = 0; j < slides2.length; j++) {
      slides2[j].style.display = "none";  
  }
  for (j = 0; j < dots2.length; j++) {
      dots2[j].className = dots2[j].className.replace("f-dot2-active", "");
  }
  slides2[slideIndex2 - 1].style.display = "block";  
  dots2[slideIndex2 - 1].className += " f-dot2-active";
}

// var ImageIndex2 = 1;
// showDivs2 (ImageIndex2);

// function plusDivs2(n){
//     showDivs2(ImageIndex2 += n);
// }

// function showDivs2(n){
//     var i;
//     var x = document.getElementsByClassName("exp-content-head");
//     var y = document.getElementsByClassName("exp-content-text");
//     var z = document.getElementsByClassName("exp-btn-services");
//     var a =  document.getElementsByClassName("dot");
//     if(n > x.length) {ImageIndex2 = 1}
//     if(n < 1) {ImageIndex2 = x.length}
//     for(i = 0; i < x.length; i++){
//         x[i].style.display ="none";
//         y[i].style.display ="none"
//         z[i].style.display = "none";
//         a[i].style.background = "#C4C4C4";
//     }
//     x[ImageIndex - 1].style.display ="block";
//     y[ImageIndex - 1].style.display ="block";
//     z[ImageIndex - 1].style.display ="block";
//     a[ImageIndex - 1].style.background ="black";
// };