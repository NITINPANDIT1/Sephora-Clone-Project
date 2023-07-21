let arr = [
    { 
      id:1,
      Name:"Paula's Choice",
      Description:"Mini Skin Perfecting 2% BHA Liquid Exfoliant",
      ItemNo :" 2421394",
      Size:"1 oz/ 30 mL",
      ImageUrl:"https://www.sephora.com/productimages/sku/s2421394-main-zoom.jpg?imwidth=97",
      Price:`17.00`
    },
    { 
      id:2,
        Name:"Karan Choice",
        Description:"Mini Skin Perfecting 2% BHA Liquid Exfoliant",
        ItemNo :" 2421394",
        Size:"1 oz/ 30 mL",
        ImageUrl:"https://www.sephora.com/productimages/sku/s2421394-main-zoom.jpg?imwidth=97",
        Price:`19.00`
      },
      { 
        id:2,
          Name:"Karan Choice",
          Description:"Mini Skin Perfecting 2% BHA Liquid Exfoliant",
          ItemNo :" 2421394",
          Size:"1 oz/ 30 mL",
          ImageUrl:"https://www.sephora.com/productimages/sku/s2421394-main-zoom.jpg?imwidth=97",
          Price:`19.00`
        },
        { 
          id:2,
            Name:"Karan Choice",
            Description:"Mini Skin Perfecting 2% BHA Liquid Exfoliant",
            ItemNo :" 2421394",
            Size:"1 oz/ 30 mL",
            ImageUrl:"https://www.sephora.com/productimages/sku/s2421394-main-zoom.jpg?imwidth=97",
            Price:`19.00`
          },
     
]
   localStorage.setItem("cart_list",JSON.stringify(arr))
var cartData = JSON.parse(localStorage.getItem("cart_list"))||[];
  
  var total =0;
displayCart(cartData);
function displayCart(cartData){
    console.log(cartData)
    // document.querySelector("#container").textContent="";
    var titems = document.querySelector("#totalItems")
    titems.textContent = cartData.length;

 total = cartData.reduce(function(acc,elem){

  console.log("elem",elem.Price,elem.quantity)
    return acc + (Number(elem.Price)*Number(elem.quantity||1));
},0)
document.querySelector("#cartTotal1").textContent =`$${total}`;
document.querySelector("#cartTotal2").textContent =`$${total}`;
if(cartData.length===0){
    document.getElementById("cart-container").innerHTML =`<div>
    <h3>Your basket is currently empty <br>

        Please sign in if you are trying to retrieve a basket created in the past.
    </h3>
    <button id="signin">Sign In</button>
</div>`
}else{
    let cartContainer =document.getElementById("cart-container")
    cartContainer.innerHTML=""
    cartData.forEach((elem ,idx) => {
     let mainContainer = document.createElement("div")
     mainContainer.setAttribute("id","cartMain")
     
     let imgContainer = document.createElement("div")
      let img = document.createElement("img")
      img.src = elem.ImageUrl
      imgContainer.append(img)

     let right = document.createElement("div")
     right.id = "mainRight";

     let right1 =document.createElement("div")
     right1.className ="rightChilds"
     let name  = document.createElement("h2")
     name.textContent = elem.Name

     let price = document.createElement("h2")
     
     price.textContent=`$${elem.Price}`

     right1.append(name,price)

     let right2 =document.createElement("div")
     right2.className ="rightChilds"
     let desc = document.createElement("p")
     desc.textContent = elem.Description
     right2.append(desc)

     let right3 =document.createElement("div")
     right3.className ="rightChilds"
     let itemNo = document.createElement("p")
     itemNo.textContent =`ITEM ${elem.ItemNo}`
     right3.append(itemNo)

     let right4 =document.createElement("div")
     right4.className ="rightChilds"
     let Size = document.createElement("p")
     Size.textContent =`Size: ${elem.Size}`
     right4.append(Size)

     let right5 =document.createElement("div")
     right5.className ="rightChilds"
     let opt = document.createElement("select")


     console.log("Elem quanity",elem.quantity)
    
     opt.name = 1
     opt.value =1;
     opt.id="option"
      let opt1 = document.createElement("option")
      opt1.value =1
      opt1.textContent=1

      if(+elem.quantity ===1)
      opt1.setAttribute("selected","selected")
      let opt2 = document.createElement("option")
      opt2.value =2
      opt2.textContent=2
      
      if(+elem.quantity ===2)
      opt2.setAttribute("selected","selected")
      let opt3 = document.createElement("option")
      opt3.value =3
      opt3.textContent=3

      if(+elem.quantity ===3)
      opt3.setAttribute("selected","selected")
      let opt4 = document.createElement("option")
      opt4.value =4
      opt4.textContent=4
      if(+elem.quantity ===4)
      opt4.setAttribute("selected","selected")

      opt.addEventListener("change",function(e){

        changePrice(elem,idx,e.target.value)
      })

      opt.append(opt1,opt2,opt3,opt4)

      let link1 = document.createElement("p")
      link1.textContent="Move to Loves"
      link1.addEventListener("click",function(){
        addToLoves(elem,idx)
      })
      link1.setAttribute("style","text-decoration:underline;color:blue")
      let link2 = document.createElement("p")
      link2.textContent="Remove"
      link2.setAttribute("style","text-decoration:underline;color:blue")
      link2.addEventListener("click",function(){
        remove(elem,idx)
      })
      right5.append(opt,link1,link2)


     right.append(right1,right2,right3,right4,right5)

     mainContainer.append(imgContainer,right)
    cartContainer.append(mainContainer)
     

        
    });
}

}


function  changePrice(elem,idx,quantity){

  console.log("Element",elem);
  console.log("idx",idx)


  const updated= cartData.map((el,index)=>{
    if(index===idx)
    return {...el,quantity:quantity}
    else
    return el;
  })


 console.log("Updated",updated)
  displayCart(updated)
  

}
function remove(elem,idx){
  cartData.splice(idx,1)
  displayCart(cartData)
}

function goToPayment(){
  window.location.href = "payment.html"
}

import footer from "./footer.js"

let foot = document.getElementById("foot")
foot.innerHTML = footer();