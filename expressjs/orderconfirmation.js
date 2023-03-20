var x = Math.floor((Math.random() * 1000000) + 1);
document.getElementById("orderIdRandom").innerHTML = x;

function showOrderDetails() {
    if (localStorage.getItem("promo-value")) {

        var orderConfirmDetails = JSON.parse(localStorage.getItem("promo-value"));
        document.getElementById("order-confirm-details").innerHTML = "Total Amount Paid :- " + " \xa0\xa0\xa0\xa0\xa0\xa0\xa0\ " + orderConfirmDetails.cartTotalValue;
    }
}
showOrderDetails();