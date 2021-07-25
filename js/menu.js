// ------------------Scroll Menu Js--------------------------------------------
 var nav = document.getElementById("navbar-for-scroll");
 var nav1 = document.getElementById("navbar");
 var clickMenuScroll = document.getElementById("click_navbar")


window.onscroll = function (){

    if(window.pageYOffset > 10){
        nav.style.position = "fixed";
        nav.style.display = "block";
        nav.style.zIndex = "50";
        nav1.style.display = "none";
    }
    else{
        nav.style.display = "none"
        nav1.style.display = "block";

    }
}


//----------------------------------------------------------------


//-------------------Hamburger Menu Js-------------------------------

const clickMenu = document.querySelector('.click_navbar');
const closeMenuIcon = document.querySelector('.nav_items_close');
const openMenuIcon = document.querySelector('.nav_items_bar');
const openMenuIcon1 = document.querySelector('.nav_items_bar1');
const nav_top = document.querySelector('.navbar');


openMenuIcon.addEventListener('click', show);
openMenuIcon1.addEventListener('click', show1);
closeMenuIcon.addEventListener('click', close);
 
function show(){
    openMenuIcon.style.display = "none";
    nav_top.style.display = "none";
    clickMenu.style.transition = "1s";
    clickMenu.style.width = "100%";
    clickMenu.style.display = "block"
    closeMenuIcon.style.display = "block";

}
function show1(){
    openMenuIcon.style.display = "none";
    nav_top.style.display = "none";
    clickMenu.style.transition = "1s";
    clickMenu.style.width = "100%";
    clickMenu.style.display = "block"
    closeMenuIcon.style.display = "block";

}
function close(){

    closeMenuIcon.style.display = "none";
    openMenuIcon.style.display = "block";
    nav_top.style.display = "block";
    clickMenu.style.transition = "1s";
    clickMenu.style.width = "-100%";
    clickMenu.style.display = "none"
}

