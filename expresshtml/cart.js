function appendPage() {
    let pro = JSON.parse(localStorage.getItem("clickedProduct"))
    let page = document.getElementById("center")

    page.innerHTML = null;
    page.innerHTML = ` <div class = "container4">
                    <h4>Available Offer</h4>
                    <p>
                        . 10% Instant Discount on SBI Credit Cards on a minimum spend of Rs 3000. TCA<br><br>
                        <span id = "tca">...</span><span id = "more">
                        . 5% Unlimited Cashback on Flipkart Axis Bank Ctedit Card TCA<br><br>
                        . 10% Cashback upto Rs 250 on a minimum spend of Rs 1500 with PayZapp TCA<br><br>
                        . Upto Rs 500 Cashback on Mobikwik wallet transaction of min Rs 999. Use code MBK500 on mobikwik TCA<br><br>
                        . Flat Rs 200 Cashback on first Airtel Payments Bank transcation on myntra on a min spend of Rs 2000 TCA</span>
                    </p>
                    <button onclick="showMore()" id="myBtn">Show More</button>
                </div>
                <div class = "total">
                    <h3 style = "float: left; font-size: larger; color: black; font-weight: 700;">My Shopping Bag(1 item)</h3>
                    <h3 style = "float: right; font-size: larger; color: black; font-weight: 700;">Total: Rs. ${Math.ceil(pro.oldprice * (100 - pro.discount) / 100)}</h3>
                </div>
                <br><br><br>
                <div class = "par">
                    <div id = "addImages">
                        <img id = "img2" src = "${pro.img}"/>
                        <div class = "child">
                            <p class = "p">${pro.brand_name}<br>
                            ${pro.T_shirt_name}<h5>Sold By : Vision Star</h5></p>
                            <select name="size" id="size">
                                <option value="SIZE:L">SIZE: L</option>
                                <option value="SIZE:M">SIZE: M</option>
                                <option value="SIZE:S">SIZE: S</option>
                                <option value="SIZE:Xl">SIZE: XL</option>
                            </select>
                            <select name="quantity" id="quantity">
                                <option value="1">Qty: 1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                            <h3>Discount: ${pro.discount}%</h3>
                            <h6 style = "color: cornflowerblue;">Delivery By 28 JUL 2021</h6>
                        </div>
                        <div>
                            <p id = "discount"><s>Rs. ${pro.oldprice}</s><br>Rs. ${Math.ceil(pro.oldprice * (100 - pro.discount) / 100)}</p>
                        </div>
                    </div>
                </div>`

    let placeOrder = document.getElementById("placeOrder")

    placeOrder.innerHTML = `<div class = "grid-placeOrder">
                    <p class = "child1">COUPONS</p>
                    <p class = "child2"><b style = "color: black;">Apply Coupons</b></p>
                    <button class = "child3">APPLY</button>
                    <hr class = "child4">
                    <p class = "child5">PRICE DETAILS(1 Item)</p>
                    <p class = "child6">Total MRP</p>
                    <p class = "child7">Rs. ${pro.oldprice}</p>
                    <p class = "child8">Discount on MRP</p>
                    <p class = "child9">- Rs. ${Math.ceil(pro.oldprice * (pro.discount) / 100)}</p>
                    <p class = "child10">Coupon Discount</p>
                    <button class = "child11">Apply Coupon</button>
                    <p class = "child12">Convenience Fee <b style = "color: #ff3f6c;;">Know More</b></p>
                    <p class = "child13"><s>Rs. 99 </s> Free</p>
                    <hr class = "child14">
                    <p class = "child15">Total Amount</p>
                    <p class = "child16">Rs. ${Math.ceil(pro.oldprice * (100 - pro.discount) / 100)}</p>
                    <button class = "child17" onclick="showAddressPage()">PLACE ORDER</button>
                </div>`
}



appendPage()

function showAddressPage() {
    window.location.href = "address.html"
}