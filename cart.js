let arr = [
    {
       Price:500
    },
    {
        Price:800
    },
    {
        Price:500
     },
     {
         Price:800
     },
     {
        Price:500
     },
     {
         Price:800
     },
     {
        Price:500
     },
     {
         Price:800
     }
]
   localStorage.setItem("cart_list",JSON.stringify(arr))
var cartData = JSON.parse(localStorage.getItem("cart_list"))||[];
  
  var total =0;
displayCart();
function displayCart(){
    console.log(cartData)
    // document.querySelector("#container").textContent="";
    var titems = document.querySelector("#totalItems")
    titems.textContent = cartData.length;

 total = cartData.reduce(function(acc,elem){
    return acc + Number(elem.Price);
},0)
document.querySelector("#cartTotal").textContent = total;
}

let btnplus = document.createElement("button")
let btnminus = document.createElement("button")