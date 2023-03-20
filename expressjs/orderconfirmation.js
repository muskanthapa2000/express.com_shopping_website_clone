// orderConfirmpage JS

var x = Math.floor((Math.random() * 1000000) + 1);
document.getElementById("orderIdRandom").innerHTML = x;

function showOrderDetails() {
    if (localStorage.getItem("promo-value")) {

        var orderConfirmDetails = JSON.parse(localStorage.getItem("promo-value"));
        document.getElementById("order-confirm-details").innerHTML = "Your Total Amount is :- " + " \xa0\xa0\xa0\xa0\xa0\xa0\xa0\ $" + orderConfirmDetails.cartTotalValue;
    }
}
showOrderDetails();


function showOrderConfirm() {
    if (localStorage.getItem("cartData")) {
        var arr = JSON.parse(localStorage.getItem("cartData"))
        arr.map(function (cartItemLocal) {
            document.getElementById("shoppingBagData5").append(cartItemLocal.name)

            document.getElementById("shoppingBagData6").append(cartItemLocal.selected);

        })
    }
}
showOrderConfirm();