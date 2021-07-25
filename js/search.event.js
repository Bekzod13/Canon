function searchItem() {
  // let filter = document.getElementById('search-input').value.toUpperCase();
  // let tableRecord = document.getElementById('tableRecord');
  // let tr = tableRecord.getElementsByTagName('tr');

//   for(var i = 0; i < tr.length; i++) {
//   let td = tr[i].getElementsByTagName('td')[0]

//   if(td) {
//     let textvalue = td.textContent || td.innerHTML;
//     if(textvalue.toUpperCase().indexOf(filter) > -1) {
//       tr[i].style.display = "";
//     } else {
//       tr[i].style.display = "none";
//     }
//   }
// }


var filter = document.getElementById('search-input').value.toUpperCase();
  var tableRecord = document.getElementById('tableRecord');
  var div = tableRecord.getElementsByTagName('div');
  var imgCarusel = document.getElementsByClassName("img_carusel");
  
  for(var i = 0; i < 2; i++) {
    var td = div[i].getElementsByClassName('offer_name').innerHTML;
  
    if(td) {
      var textvalue = td.textContent || td.innerHTML;
  
      if(textvalue.toUpperCase().indexOf(filter) > -1) {
        imgCarusel.style.display = "";
      } else {
        imgCarusel.style.display = "none";
      }
    }
  }






}



var searchWrapper = document.querySelector(".search-wrapper");
var searchOn = document.querySelector(".nav_items_search");

searchOn.addEventListener("click", ()=>{
    searchWrapper.style.right = "0px";
})



var searchOn1 = document.querySelector(".nav_items_search1");

searchOn1.addEventListener("click", ()=>{
    searchWrapper.style.right = "0px";
})

var searchOff = document.querySelector(".search-close-icon").addEventListener("click", ()=>{
  searchWrapper.style.right = "-100%";
})