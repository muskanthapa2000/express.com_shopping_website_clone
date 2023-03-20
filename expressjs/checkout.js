
// document.addEventListener("submit", contactfunction);

function contactfunction() {
    // event.preventDefault();
    // console.log("contact")
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var confirmemail = document.getElementById("confirmemail").value;
    var phone = document.getElementById("phone").value;
    console.log(firstname, lastname, email, confirmemail, phone);

    var contactObj = { firstname: firstname, lastname: lastname, email: email, confirmemail: confirmemail, phone: phone }

    // var contactInfo = [];
    // contactInfo.push(contactObj);
    localStorage.setItem("contact-details", JSON.stringify(contactObj));
    showContactInfo();
    document.getElementById("submitContact").onsubmit();
}


function showContactInfo() {
    var contactform = document.getElementById("contact-form-id")
    // console.log(contactform)
    var contactinfo = document.getElementById("contact-info-id")
    if (localStorage.getItem("contact-details")) {
        contactinfo.classList.remove("hide");
        contactinfo.classList.add("show");
        contactform.classList.remove("show");
        contactform.classList.add("hide");
        var contactDetails = JSON.parse(localStorage.getItem("contact-details"));
        // var arr=[1,2,3]
        // arr[1]
        // console.log(contactDetails["firstname"])
        document.getElementById("full-name").innerHTML = contactDetails.firstname + " " + contactDetails.lastname;
        document.getElementById("display-email").innerHTML = contactDetails.email;
        document.getElementById("display-contact-info").innerHTML = contactDetails.phone;

    }
    else {
        contactinfo.classList.remove("show");
        contactinfo.classList.add("hide");
        contactform.classList.remove("hide");
        contactform.classList.add("show");
    }

}
showContactInfo();


// document.addEventListener("submit", billingFunction);
function billingFunction() {
    console.log("billing")
    // event.preventDefault();
    var firstname = document.getElementById("billing-firstname").value;
    var lastname = document.getElementById("billing-lastname").value;
    var countrystyle = document.getElementById("billing-country-style").value;
    var streetaddress = document.getElementById("billing-street-address").value;
    var streetaddress2 = document.getElementById("billing-street-address2").value;
    var zipcode = document.getElementById("billing-zipcode").value;
    var citytown = document.getElementById("billing-citytown").value;
    var countrystyle2 = document.getElementById("billing-country-style2").value;

    var shippingObj = {
        firstname: firstname, lastname: lastname, countrystyle: countrystyle,
        streetaddress: streetaddress, streetaddress2: streetaddress2, zipcode: zipcode,
        citytown: citytown, countrystyle2: countrystyle2
    }

    // var shippingInfo = [];
    // shippingInfo.push(shippingObj);
    localStorage.setItem("shipping-details", JSON.stringify(shippingObj));
    showbillingInfo();
    document.getElementById("submitBilling").onsubmit();
}

function showbillingInfo() {
    var contactform = document.getElementById("billing-form-id")

    var contactinfo = document.getElementById("billing-info-id")
    if (localStorage.getItem("shipping-details")) {
        contactinfo.classList.remove("hide");
        contactinfo.classList.add("show");
        contactform.classList.remove("show");
        contactform.classList.add("hide");
        var billingDetails = JSON.parse(localStorage.getItem("shipping-details"));
        // console.log(contactDetails);
        document.getElementById("billing-full-name").innerHTML = billingDetails.firstname + " " + billingDetails.lastname;
        document.getElementById("billing-display-sa1").innerHTML = billingDetails.streetaddress;
        document.getElementById("billing-display-sa2").innerHTML = billingDetails.streetaddress2;
        document.getElementById("display-billing-info").innerHTML = billingDetails.countrystyle;
        document.getElementById("display-billing-cs2").innerHTML = billingDetails.citytown + "," + billingDetails.countrystyle2 + " " + billingDetails.zipcode;


    }
    else {
        contactinfo.classList.remove("show");
        contactinfo.classList.add("hide");
        contactform.classList.remove("hide");
        contactform.classList.add("show");
    }
}
showbillingInfo();



function showOrderSummary() {
    if (localStorage.getItem("cartData")) {
        var showCartData = JSON.parse(localStorage("cartData"));
        document.getElementById("cartDataName").innerHTML = showCartData.name;

    }

}

function showCartSummary() {
    if (localStorage.getItem("promo-value")) {

        var cartSummary = JSON.parse(localStorage.getItem("promo-value"));
<<<<<<< HEAD
        document.getElementById("shoppingBagData").innerHTML = "Total Cart Value :- " + " \xa0\xa0\xa0\xa0\xa0\xa0\xa0\ " + cartSummary.cartTotalValue;
    }
    if (localStorage.getItem("cartData")) {
        var cartDataMap = localStorage.getItem("cartData");
        console.log(cartDataMap);

        cartDataMap[0].map(function (ele) {
            return console.log(ele);
        });

        var cartDataSummary = JSON.parse(localStorage.getItem("cartData"));
        console.log(cartDataSummary.name);
        document.getElementById("shoppingBagData2").innerHTML = cartDataSummary.name;

    }
}
showCartSummary();

=======
        console.log(cartSummary);
        document.getElementById("shoppingBagData").innerHTML = "Total Cart Value :- " + " \xa0\xa0\xa0\xa0\xa0\xa0\xa0\ " + cartSummary.cartTotalValue;
    }
    if (localStorage.getItem("cartData")) {
        var arr = JSON.parse(localStorage.getItem("cartData"))
        arr.map(function (cartItemLocal) {
            document.getElementById("shoppingBagData2").append(cartItemLocal.name)

            document.getElementById("shoppingBagData3").append(cartItemLocal.selected);

        })
    }
    // console.log(arr, typeof (arr));

}
showCartSummary();

function applyGiftCard() {
    var gift = document.getElementById("inputfield-giftcard-number").value;
    // console.log(gift);
    if (gift == "blackfriday") {
        var giftPara = document.createElement("p")
        giftPara.textContent = "Gift Card Applied SuccessFully";
        document.getElementById("giftPromoApplied").append(giftPara.textContent);
        // console.log(giftPara.textContent);
    }
    else {
        var giftPara2 = document.createElement("p")
        giftPara2.textContent = "Please Enter Valid Gift Card value";
        document.getElementById("giftPromoApplied").append(giftPara2.textContent);
    }
}
// applyGiftCard();


function radioButtonClick() {
    console.log("radioButtonClick");
    var radioele = document.getElementById("COD");
    if (radioele.checked) {
        var paymentBlock = document.getElementById("paymentBlock")
        paymentBlock.classList.remove("show");
        paymentBlock.classList.add("hide");
    } else {
        var paymentBlock = document.getElementById("paymentBlock")
        paymentBlock.classList.remove("hide");
        paymentBlock.classList.add("show");
    }
}
radioButtonClick()

>>>>>>> eaff0a0bc3fe5bea4df28d6a0b0778ac0297fc55

