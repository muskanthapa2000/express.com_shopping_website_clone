var cart = JSON.parse(localStorage.getItem("cartData")) || [];
document.querySelector("button").addEventListener("click", check);
// var ind=document.querySelector("#child").value;
if (cart === 0) {
  document.querySelector("body").value;
  //  alert("Select item to cart")
} else {

  displayCart(cart);
  updateCount(cart);
  caltotal(cart)



}
function displayCart(cart) {
  document.querySelector("#child").textContent = "";
  cart.map(function (elem, index) {
    var div = document.createElement("div");
    div.setAttribute("id", "cartprod");
    var image = document.createElement("img");
    image.setAttribute("src", elem.img_url);
    image.setAttribute("alt", elem.name);

    var divp = document.createElement("div");
    divp.setAttribute("class", "clas");

    var h3 = document.createElement("h3");
    h3.textContent = elem.name;

    var p = document.createElement("p");
    p.textContent = elem.color;

    var pa = document.createElement("p")
    pa.textContent = elem.selected;



    var diva = document.createElement("div");
    diva.setAttribute("id", "rsk");

    var price = document.createElement("p");
    price.textContent = "₹" + elem.price;

    var quantity = document.createElement("h2");
    quantity.textContent = "Quantity";

    var span = document.createElement("span");
    span.textContent = " " + "1";



    var increase = document.createElement("button");
    increase.setAttribute("id", "btn")
    increase.textContent = "+";
    increase.onclick = function () {
      increaseval(span.textContent);
    };
    function increaseval(value) {
      var pr = parseInt(value) + 1;
      var va = pr * (elem.price);
      span.textContent = pr;
      price.textContent = "₹" + va;
      var a = document.getElementById("pr").textContent;
      var last = parseInt(a) + parseInt(elem.price);
      document.getElementById("pr").textContent = last;

    }

    var decrease = document.createElement("button");
    decrease.setAttribute("id", "btn")
    decrease.textContent = "-";
    decrease.onclick = function () {
      decreaseval(span.textContent);
    };
    function decreaseval(value) {
      if (value == 1) {
        return;
      } else {
        var pr = parseInt(value) - 1;
        var va = pr * elem.price
        span.textContent = pr;
        price.textContent = "₹" + va;
        var a = document.getElementById("pr").textContent;
        var last = parseInt(a) - parseInt(elem.price);
        document.getElementById("pr").textContent = last;
      }





    }


    var tree = document.createElement("div");
    tree.setAttribute("id", "pers");

    var del = document.createElement("button");
    del.setAttribute("id", "delbtn")
    del.textContent = "Delete";
    del.addEventListener("click", function () {
      delrow(elem);
    })

    quantity.append(span);
    diva.append(price, increase, quantity, decrease);
    divp.append(h3, p, pa);
    tree.append(del);
    div.append(image, divp, diva, tree);
    document.querySelector("#child").append(div);


  });

}

function delrow(elem) {

  cart.splice(elem, 1);
  localStorage.setItem("cartData", JSON.stringify(cart))
  displayCart(cart);
  caltotal(cart);
  updateCount(cart);
}
function updateCount(cart) {
  document.getElementById("per").textContent = cart.length;
}


function caltotal() {
  var carval = 0;
  for (var i = 0; i < cart.length; i++) {
    carval += parseInt(cart[i].price);

  }
  document.getElementById("pr").textContent = carval;
}


function check() {
  var ch = document.getElementById("promo").value;
  console.log(ch);
  if (ch == "pw11") {
    var temp = document.createElement("p");
    temp.setAttribute("class", "krp");
    temp = "Congrats You are eligible for 30% off";
    document.getElementById("Offer").append(temp);
    var t = parseInt(document.getElementById("pr").textContent);
    var change = (t * 3) / 10;
    var anss = document.getElementById("pr");
    anss.textContent = t - change;


    localStorage.setItem("promoVal", anss.textContent);
    anss.textContent = localStorage.getItem("promoVal");

    var cartDataObj = { cartTotalValue: anss.textContent }
    localStorage.setItem("promo-value", JSON.stringify(cartDataObj));


  }
}


//  var totalpri = JSON.parse(localStorage.setItem("caltotal",carval))||[];
//  functon tot_pri()