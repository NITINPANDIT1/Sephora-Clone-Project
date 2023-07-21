

var createArr=JSON.parse(localStorage.getItem("createItem"))||[];
document.querySelector("#first").value="";
document.querySelector("#last").value="";
document.querySelector("#email").value="";
document.querySelector("#pass").value="";
document.querySelector("#mobile").value="";
document.querySelector("#dob").value="";
document.querySelector("form").addEventListener("submit",create);
function create(event){
    event.preventDefault();
    var first=document.querySelector("#first").value;
    var last=document.querySelector("#last").value;
    var email=document.querySelector("#email").value;
    var password=document.querySelector("#pass").value;
    var mobile=document.querySelector("#mobile").value;
    var dob=document.querySelector("#dob").value;
    var flag =0;
    if(first=="" || last=="" || email==""||password==""||mobile==""|| dob=="")
    {
        alert("Please fill all fields!");
        flag=1;
    }
     if(password.length<6 || password.length>12){
alert("Please create password depending on the length");
flag=1;
    }
     if(mobile.length<10){
        alert("please enter 10 digit mobile number")
        flag=1;
    }
    if(flag=0 ){
    var createObj={
        firstName:first,
        lastName:last,
        email:email,
        pass:password,
        mobile:mobile,
        dateOfBirth:dob
    }
    createArr.push(createObj);
    localStorage.setItem("createItem",JSON.stringify(createArr));
    alert("ThankYou for Creating Account in Sephora");
    window.location.href="./homepage.html";
}
}

import header from "./header.js"
let nav = document.getElementById("nav");
nav.innerHTML = header();