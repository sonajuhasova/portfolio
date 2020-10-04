//slideshow function source: https://www.w3schools.com/howto/howto_js_slideshow.asp

//projects slideshow
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
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot-active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " dot-active";
}



//design shots slideshow
var shotIndex = 1;
showShots(shotIndex);

function plusShot(n) {
    showShots(shotIndex += n);
}

function currentShot(n) {
    showShots(shotIndex = n);
}


function showShots(n) {
    var i;
    var shots = document.getElementsByClassName("myShots");
    var dots = document.getElementsByClassName("dot-");
    if (n > shots.length) {
        shotIndex = 1
    }
    if (n < 1) {
        shotIndex = shots.length
    }
    for (i = 0; i < shots.length; i++) {
        shots[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot--active", "");
    }
    shots[shotIndex - 1].style.display = "block";
    dots[shotIndex - 1].className += " dot--active";
}