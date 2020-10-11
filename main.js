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

//navigation position change on scroll


window.onscroll = function () {
    scrollFunction();
    scrollNav()
};

function scrollFunction() {
    if (document.body.scrollTop > (100 * window.innerHeight / 100) || document.documentElement.scrollTop > (100 * window.innerHeight / 100)) {

        document.getElementById("header").classList.remove("navigation");
        document.getElementById("header").classList.add("navigation-scroll");

        document.getElementById("a1").classList.remove("nav-el");
        document.getElementById("a1").classList.add("nav-el-scroll");

        document.getElementById("a2").classList.remove("nav-el");
        document.getElementById("a2").classList.add("nav-el-scroll");

        document.getElementById("a3").classList.remove("nav-el");
        document.getElementById("a3").classList.add("nav-el-scroll");

        document.getElementById("a4").classList.remove("nav-el");
        document.getElementById("a4").classList.add("nav-el-scroll");

    } else {

        document.getElementById("header").classList.remove("navigation-scroll");
        document.getElementById("header").classList.add("navigation");

        document.getElementById("a1").classList.remove("nav-el-scroll");
        document.getElementById("a1").classList.add("nav-el");

        document.getElementById("a2").classList.remove("nav-el-scroll");
        document.getElementById("a2").classList.add("nav-el");


        document.getElementById("a3").classList.remove("nav-el-scroll");
        document.getElementById("a3").classList.add("nav-el");

        document.getElementById("a4").classList.remove("nav-el-scroll");
        document.getElementById("a4").classList.add("nav-el");
    }

}

function scrollNav() {
    if (document.body.scrollTop <= (100 * window.innerHeight / 100) || document.documentElement.scrollTop <= (100 * window.innerHeight / 100)) {
        document.getElementById("a1").style.fontWeight = '500';
        document.getElementById("a2").style.fontWeight = '300';
        document.getElementById("a3").style.fontWeight = '300';
        document.getElementById("a4").style.fontWeight = '300';
    }
    if (document.body.scrollTop > (100 * window.innerHeight / 100) && document.body.scrollTop <= (275 * window.innerHeight / 100) || document.documentElement.scrollTop > (100 * window.innerHeight / 100) && document.documentElement.scrollTop <= (275 * window.innerHeight / 100)) {
        document.getElementById("a1").style.fontWeight = '300';
        document.getElementById("a2").style.fontWeight = '500';
        document.getElementById("a3").style.fontWeight = '300';
        document.getElementById("a4").style.fontWeight = '300';

        document.getElementById('title1').classList.add('title-3d-animation');
    }
    if (document.body.scrollTop > (275 * window.innerHeight / 100) && document.body.scrollTop <= (400 * window.innerHeight / 100) || document.documentElement.scrollTop > (275 * window.innerHeight / 100) && document.documentElement.scrollTop <= (400 * window.innerHeight / 100)) {
        document.getElementById("a1").style.fontWeight = '300';
        document.getElementById("a2").style.fontWeight = '300';
        document.getElementById("a3").style.fontWeight = '500';
        document.getElementById("a4").style.fontWeight = '300';

        document.getElementById('title2').classList.add('title-3d-animation');
    }
    if (document.body.scrollTop > (400 * window.innerHeight / 100) || document.documentElement.scrollTop > (400 * window.innerHeight / 100)) {
        document.getElementById("a1").style.fontWeight = '300';
        document.getElementById("a2").style.fontWeight = '300';
        document.getElementById("a3").style.fontWeight = '300';
        document.getElementById("a4").style.fontWeight = '500';
    }
}