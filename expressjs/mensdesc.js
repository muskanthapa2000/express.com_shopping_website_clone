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
        div1.append(img);
        div2.append(desc,name);
     document.getElementById("parent").append(div1,div2);
    })
    
}