// ***********1POPUP************
const cartPopup = document.querySelector(".popup_your_info");

const close_cartpopup = document.querySelector(".close_popup_cart").addEventListener("click", ()=>{
    cartPopup.style.display = "none";
});
const open_cartpopup = document.querySelector("#order_info").addEventListener("click", ()=>{
    cartPopup.style.display = "block";   
});

// ***********2POPUP************
 const cartPopupBuy = document.querySelector(".popup_your_buy");

 const open_cartpopup_buy = document.querySelector("#cart_popup1").addEventListener("click", ()=>{
    cartPopupBuy.style.display = "block";   
   });


   const open_cartpopup_buy2 = document.querySelector("#cart_popup2").addEventListener("click", ()=>{
    cartPopupBuy.style.display = "block";   
   });


   const open_cartpopup_buy3 = document.querySelector("#cart_popup3").addEventListener("click", ()=>{
    cartPopupBuy.style.display = "block";   
   });

   const open_cartpopup_buy4 = document.querySelector("#cart_popup4").addEventListener("click", ()=>{
    cartPopupBuy.style.display = "block";   
   });

   const open_cartpopup_buy5 = document.querySelector("#cart_popup5").addEventListener("click", ()=>{
    cartPopupBuy.style.display = "block";   
   });

const close_cartpopup1 = document.querySelector("#close_cart_popup_buy").addEventListener("click", ()=>{
        cartPopupBuy.style.display = "none";
    });
// ***********3POPUP************




