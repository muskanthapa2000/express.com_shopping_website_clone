var mens_data = [
    {
        img_url : "https://images.express.com/is/image/expressfashion/0020_01767004_1068_f001?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon",
        desc : "NEW | online only",
        name : "Geo Print Cotton Shirt",
        price : "$78.00",
    },
    {
        img_url : "https://images.express.com/is/image/expressfashion/0020_01694306_0410_f001?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon",
        desc : "NEW | online only",
        name : "Geo Print Rayon Shirt",
        price : "$68.00",
    },
    {
        img_url : "https://images.express.com/is/image/expressfashion/0020_01762769_0001_f001?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon",
        desc : "NEW | online only",
        name : "Stripped Sheersucker Shirt",
        price : "$68.00",
    },
    {
        img_url : "https://images.express.com/is/image/expressfashion/0020_01691463_2024_f001?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon",
        desc : "NEW | online only",
        name : "Watercolor Print Rayon Shirt",
        price : "$68.00",
    },
    {
        img_url : "https://images.express.com/is/image/expressfashion/0020_01698365_0134_f001?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon",
        desc : "NEW | online only",
        name : "Palm Print Rayon Shirt",
        price : "$88.00",
    },
    {
        img_url : "https://images.express.com/is/image/expressfashion/0020_01690278_2903_f001?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon",
        desc : "NEW | online only",
        name : "Watercolor Print Rayon Shirt",
        price : "$68.00",
    },
    {
        img_url : "https://images.express.com/is/image/expressfashion/0020_01698309_1056_f001?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon",
        desc : "NEW | online only",
        name : "Mixed Print Rayon Shirt",
        price : "$78.00",
    },
    {
        img_url : "https://images.express.com/is/image/expressfashion/0020_01696291_2907_f001?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon",
        desc : "NEW | online only",
        name : "Daimond Print Rayon Shirt",
        price : "$68.00",
    },
    {
        img_url : "https://images.express.com/is/image/expressfashion/0020_01690223_1056_f001?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon",
        desc : "NEW | online only",
        name : "Striped Rayon Shirt",
        price : "$78.00",
    },
    {
        img_url : "https://images.express.com/is/image/expressfashion/0020_01698358_1056_f001?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon",
        desc : "NEW | online only",
        name : "Striped Geo Print Rayon Shirt",
        price : "$68.00",
    },
    {
        img_url : "https://images.express.com/is/image/expressfashion/0020_01691123_2902_f001?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon",
        desc : "online only",
        name : "Tropical Floral Rayon Shirt",
        price : "$78.00",
    },
    {
        img_url : "https://images.express.com/is/image/expressfashion/0020_01690375_0134_f001?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon",
        desc : "online only",
        name : "Geo Print Rayon Shirt",
        price : "$78.00",
    },
    {
        img_url : "https://images.express.com/is/image/expressfashion/0020_01769610_0001_f001?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon",
        desc : "online only",
        name : "Solid Strech Cotton Shirt",
        price : "$78.00",
    },
    {
        img_url : "https://images.express.com/is/image/expressfashion/0020_01698330_0530_f001?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon",
        desc : "online only",
        name : "Floral Print Cotton Shirt",
        price : "$78.00",
    },
]

displayproduct()
function displayproduct(){
    mens_data.map(function(el){
        var div = document.createElement("div");
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
        img.addEventListener("click",function(){
            navToNextPage(el);
        });
        div.append(img,desc,name,price);
     document.getElementById("parent").append(div);
    })
    
}
var product_desc = [];
function navToNextPage(product){
    product_desc.push(product);
    localStorage.setItem("mensdata",JSON.stringify(product_desc));
    window.location.href="./mensdesc.html";
}