var product_desc = JSON.parse(localStorage.getItem("mensdata")) || [];
displayproduct()
function displayproduct(){
    product_desc.map(function(el){
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");

        var img = document.createElement("img");
        img.setAttribute("src",el.img_url);
        img.setAttribute("alt",el.name);
        img.setAttribute("class","product_image");
        var desc = document.createElement("p");
        desc.textContent = el.desc;
        var name = document.createElement("h3");
        name.textContent = el.name;
        var price = document.createElement("p");
        price.textContent = el.price;
        var btn = document.createElement("button");
        btn.textContent = "Add To Cart";
        btn.setAttribute("id","cartbtn");
        btn.addEventListener("click",function(){
            addToCart(el);
        })
        var select_size = document.createElement("select");
        select_size.setAttribute("id","size_select");
        let option1 = document.createElement("option");
        option1.text = "Select Size";
        option1.value = "";
        select_size.appendChild(option1);
        for(var i=0;i<el.size.length;i++){
            var option=document.createElement("option");
            option.setAttribute("value",el.size[i]);
            option.textContent=el.size[i];
            select_size.appendChild(option);
        }
        select_size.addEventListener("change",function(){
            changefun(el)
        });
        div1.append(img);
        div2.append(desc,name,price,select_size,btn);
     document.getElementById("parent").append(div1,div2);
    })
    
}

function changefun(product){
    var selected = document.getElementById("size_select").value;
    product["selected"] = selected;
    console.log(selected);
}


var cart_data = JSON.parse(localStorage.getItem("cartData")) || [];
function addToCart(product){
    cart_data.push(product);
    localStorage.setItem("cartData",JSON.stringify(cart_data));
    window.location.href="./expresshtml/cart.html"
}