
document.addEventListener("submit", contactfunction);
function contactfunction(event) {
    event.preventDefault();
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var confirmemail = document.getElementById("confirmemail").value;
    var phone = document.getElementById("phone").value;
    console.log(firstname, lastname, email, confirmemail, phone);

    var contactObj = [firstname, lastname, email, confirmemail, phone]

    var contactInfo = [];
    contactInfo.push(contactObj);
    localStorage.setItem("contact-details", JSON.stringify(contactInfo));

}


document.addEventListener("submit", billingFunction);
function billingFunction(event) {
    event.preventDefault();
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var countrystyle = document.getElementById("country-style").value;
    var streetaddress = document.getElementById("street-address").value;
    var streetaddress2 = document.getElementById("street-address2").value;
    var zipcode = document.getElementById("zipcode").value;
    var citytown = document.getElementById("citytown").value;
    var countrystyle2 = document.getElementById("country-style2").value;


    console.log(firstname, lastname, countrystyle, streetaddress, streetaddress2, zipcode, citytown, countrystyle2);

    var shippingObj = [firstname, lastname, countrystyle, streetaddress, streetaddress2, zipcode, citytown, countrystyle2]

    var shippingInfo = [];
    shippingInfo.push(shippingObj);
    localStorage.setItem("shipping-details", JSON.stringify(shippingInfo));

}

var contactform = document.getElementById("contact-form-id")
var contactinfo = document.getElementById("contact-info-id")
if (localStorage.getItem("contact-details")) {
    contactinfo.classList.remove("hide");
    contactinfo.classList.add("show");
    contactform.classList.remove("show");
    contactform.classList.add("hide");
}
else {
    contactinfo.classList.remove("show");
    contactinfo.classList.add("hide");
    contactform.classList.remove("hide");
    contactform.classList.add("show");
}