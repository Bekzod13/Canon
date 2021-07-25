let b = document.querySelector(".order_status").innerHTML;

let minus = document.querySelector(".minus");

let plus = document.querySelector(".plus");

plus.addEventListener("click", ()=>{
    b++;
    console.log(b);
    document.querySelector(".order_status").innerHTML = b;
})

minus.addEventListener("click", ()=>{
    b--;
    console.log(b);
    document.querySelector(".order_status").innerHTML = b;
})