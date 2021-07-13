const imgs = document.getElementById('images_carusel');
const leftBtn = document.getElementById('left_carusel');
const rightBtn = document.getElementById('right_carusel');
const img = document.querySelectorAll('#images_carusel .img_carusel');
let idx = 0;

function changeImage() {
    if (idx > img.length - 1) {
        idx = 0;

    } else if (idx < 0) {
        idx = img.length - 1;

    }
    imgs.style.transform = `translateX(${ - idx * 360}px)`;
}

rightBtn.addEventListener('click', function change() {
    idx++;
    changeImage();
});

leftBtn.addEventListener('click', function change() {
    idx--;
    changeImage();
});

let interval = setInterval(run, 5000);

function run() {
    idx++;
    changeImage();
    plusOffer(); 
}

function resetInterval() {
    clearInterval(interval);

    interval = setInterval(run, 5000);
}


let value = document.getElementById('offerNum').innerHTML;

function plusOffer() {
    if (value > img.length - 1) {
        value = 0;
    } else if (value < 0) {
        value = img.length - 1;
    }
    value++;
    console.log(value);
    document
        .getElementById('offerNum')
        .innerHTML = value
}
function minusOffer() {
    if (value > img.length - 1) {
        value = 0;
    } else if (value < 0) {
        value = img.length - 1;}
    value--;
    console.log(value);
    document
        .getElementById('offerNum')
        .innerHTML = value;
}





const img2 = document.querySelectorAll('#images_carusel2 .img_carusel2');
const img3 = document.querySelectorAll('#images_carusel3 .img_carusel3');

// 2- carusel
const imgs1 = document.getElementById('images_carusel1');
const leftBtn1 = document.getElementById('left_carusel1');
const rightBtn1 = document.getElementById('right_carusel1');
const img1 = document.querySelectorAll('#images_carusel1 .img_carusel1');
let idx1 = 0;
let value1 = document.getElementById('offerNum1').innerHTML;
let value2 = document.getElementById('offerNum2').innerHTML;
let value3 = document.getElementById('offerNum3').innerHTML;

function changeImage1() {
    if (idx1 > img1.length - 1) {
        idx1 = 0;

    } else if (idx1 < 0) {
        idx1 = img1.length - 1;

    }
    imgs1.style.transform = `translateX(${ - idx1 * 360}px)`;
}

rightBtn1.addEventListener('click', function change2() {
    idx1++;
    changeImage1();
});

leftBtn1.addEventListener('click', function change2() {
    idx1--;
    changeImage1();
});

let interval1 = setInterval(run1, 20000);

function run1() {
    idx1++;
    changeImage1();
    plusOffer1(); 
}

function resetInterval() {
    clearInterval(interval1);

    interval1 = setInterval(run1, 20000);
}




function plusOffer1() {
    if (value1 > img1.length - 1) {
        value1 = 0;
    } else if (value1 < 0) {
        value1 = img1.length - 1;}
    value1++;
    console.log(value1);
    document
        .getElementById('offerNum1')
        .innerHTML = value1;
}
function minusOffer1() {
    if (value1 > img1.length - 1) {
        value1 = 0;
    } else if (value1 < 0) {
        value1 = img1.length - 1;}
    value1--;
    console.log(value1);
    document
        .getElementById('offerNum1')
        .innerHTML = value1;
}





// 3- carusel

const imgs2 = document.getElementById('images_carusel2');
const leftBtn2 = document.getElementById('left_carusel2');
const rightBtn2 = document.getElementById('right_carusel2');




let idx2 = 0;


function changeImage2() {
    if (idx2 > img2.length - 1) {
        idx2 = 0;

    } else if (idx2 < 0) {
        idx2 = img2.length - 1;

    }
    imgs2.style.transform = `translateX(${ - idx2 * 360}px)`;
   
}

rightBtn2.addEventListener('click', function change3() {
    idx2++;
    changeImage2();
});

leftBtn2.addEventListener('click', function change3() {
    idx2--;
    changeImage2();
});



let interval2 = setInterval(run2, 20000);

function run2() {
    idx2++;
    changeImage2();
    plusOffer2(); 
}

function resetInterval() {
    clearInterval(interval2);

    interval2 = setInterval(run2, 20000);
}




function plusOffer2() {
    if (value2 > img2.length - 1) {
        value2 = 0;
    } else if (value2 < 0) {
        value2 = img2.length - 1;}
    value2++;
    console.log(value2);
    document
        .getElementById('offerNum2')
        .innerHTML = value2;
}
function minusOffer2() {
    if (value2 > img2.length - 1) {
        value2 = 0;
    } else if (value2 < 0) {
        value2 = img2.length - 1;}
    value2--;
    console.log(value2);
    document
        .getElementById('offerNum2')
        .innerHTML = value2;
}



// 4 - carusel

const imgs3 = document.getElementById('images_carusel3');
const leftBtn3 = document.getElementById('left_carusel3');
const rightBtn3 = document.getElementById('right_carusel3');




let idx3 = 0;


function changeImage3() {
    if (idx3 > img3.length - 1) {
        idx3 = 0;

    } else if (idx3 < 0) {
        idx3 = img3.length - 1;

    }
    imgs3.style.transform = `translateX(${ - idx3 * 360}px)`;
   
}

rightBtn3.addEventListener('click', function change4() {
    idx3++;
    changeImage3();
});

leftBtn3.addEventListener('click', function change4() {
    idx3--;
    changeImage3();
});



let interval3 = setInterval(run3, 20000);

function run3() {
    idx3++;
    changeImage3();
    plusOffer3(); 
}

function resetInterval() {
    clearInterval(interval3);

    interval3 = setInterval(run3, 20000);
}




function plusOffer3() {
    if (value3 > img3.length - 1) {
        value3 = 0;
    } else if (value3 < 0) {
        value3 = img3.length - 1;}
    value3++;
    console.log(value3);
    document
        .getElementById('offerNum3')
        .innerHTML = value3;
}
function minusOffer3() {
    if (value3 > img3.length - 1) {
        value3 = 0;
    } else if (value3 < 0) {
        value3 = img3.length - 1;}
    value3--;
    console.log(value3);
    document
        .getElementById('offerNum3')
        .innerHTML = value3;
}

