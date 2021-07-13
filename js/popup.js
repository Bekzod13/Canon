
const close_popup = document.querySelector(".close_popup");
const popup = document.querySelector(".popup");
const close_popup1 = document.querySelector('.close_popup1');
const open_popup1 = document.querySelector('#forget-password');
const open_popup4 = document.querySelector('#forget-password2');
const popup1 = document.querySelector('.popup1');
const close_popup2 = document.querySelector('.close_popup2');
const open_popup2 = document.querySelector('#sign-up');
const open_popup3 = document.querySelector('#sign-up1');
const popup2 = document.querySelector('.popup2');

document.getElementById("contact").addEventListener("click", ()=>{
    document.querySelector(".popup").style.display = "flex";
    popup1.style.display = "none";
    popup2.style.display = "none";
} );
document.getElementById("contact2").addEventListener("click", ()=>{
    document.querySelector(".popup").style.display = "flex";
        popup1.style.display = "none";
    popup2.style.display = "none";
} );
document.getElementById("contact3").addEventListener("click", ()=>{
    document.querySelector(".popup").style.display = "flex";
        popup1.style.display = "none";
    popup2.style.display = "none";
});
document.getElementById("contact4").addEventListener("click", ()=>{
    document.querySelector(".popup").style.display = "flex";
        popup1.style.display = "none";
    popup2.style.display = "none";
});
document.getElementById("contact5").addEventListener("click", ()=>{
    document.querySelector(".popup").style.display = "flex";
        popup1.style.display = "none";
    popup2.style.display = "none";
});


open_popup1.addEventListener('click', show1);
close_popup1.addEventListener('click', close1);
open_popup2.addEventListener('click', show2);
close_popup2.addEventListener('click', close2);
close_popup.addEventListener('click', close);
open_popup3.addEventListener('click', show3);
open_popup4.addEventListener('click', show4);


function close(){
    popup.style.display = "none";
} 
function show1(){
    popup1.style.display = "flex";
    popup.style.display = "none";
}
function close1(){
    popup1.style.display = "none";
}
function show2(){
    popup.style.display = "none";
    popup2.style.display = "flex";
    popup1.style.display = "none";
}
function close2(){
    popup2.style.display = "none";
}

function show3(){
    popup.style.display = "none";
    popup2.style.display = "flex";
    popup1.style.display = "none";
}

function show4(){
    popup1.style.display = "flex";
    popup.style.display = "none";
    popup2.style.display = "none";
}




