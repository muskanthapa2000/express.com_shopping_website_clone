document.querySelector("form").addEventListener("submit",addDetails)
var arr=JSON.parse(localStorage.getItem("account-data")) || [];
// var arr=localStorage.getItem("account-data");

function addDetails(){
  event.preventDefault();
  var email=document.getElementById("email").value;
  var firstname=document.getElementById("firstname").value;
  var lastname=document.getElementById("lastname").value;
  var password=document.getElementById("password").value;
  var country=document.getElementById("country").value;
  if(email==""||firstname==""||lastname==""||password==""||country==""){
    if(email===""){
    var a=document.getElementById("email");
    document.getElementById("email").style.border="1px solid red";
    a.setAttribute("placeholder","*This field is required")   
  } if(firstname===""){
    var a=document.getElementById("firstname");
    document.getElementById("firstname").style.border="1px solid red";
    a.setAttribute("placeholder","*This field is required") 
  } if(lastname===""){
    var a=document.getElementById("lastname");
    document.getElementById("lastname").style.border="1px solid red";
    a.setAttribute("placeholder","*This field is required") 
  }
   if(password===""){
    var a=document.getElementById("password");
    document.getElementById("password").style.border="1px solid red";
    a.setAttribute("placeholder","*This field is required") 
  }}else{
  var obj={
    email:email,
    firstname:firstname,
    lastname:lastname,
    password:password,
    country:country
  }

}
  // console.log(obj)
  arr.push(obj);
  localStorage.setItem ("account-data",JSON.stringify(arr));

}