document.querySelector("form").addEventListener("submit",chkDetails)
    
var array=JSON.parse(localStorage.getItem("account-data")) || [];
function chkDetails(){
event.preventDefault();
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
var count=0;
if(email===""){

var a=document.getElementById("email");
document.getElementById("email").style.border="2px solid red";

a.setAttribute("placeholder","*This field is required")
} else if(password==="")  {

    
    var a=document.getElementById("password");

    a.setAttribute("placeholder","*This field is required")
    document.getElementById("password").style.border="2px solid red";


}else {for(var i=0;i<array.length;i++){
if(email==array[i].email && password ==array[i].password){
  alert("Sign in Successful")
  
}else{
  
  count++;

}
}
}
if(count == array.length){
alert("Wrong Credentials")
}




}