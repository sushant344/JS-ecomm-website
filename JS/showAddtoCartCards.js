import products from "../api/products.json";
import { getCartProductfromLS } from "./getCartProductfromLS";
import { fetchQuantityfromCartLS } from "./fetchQuantityfromCartLS";
import { removeProdfromCart } from "./removeProdfromCart";
import { incrementdecrement } from "./incrementdecrement";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCartProductfromLS()

const filterProducts = products.filter((curProd)=>{
    return cartProducts.some((curElemLS)=> curElemLS.id === curProd.id);
})

const productCartContainer = document.querySelector("#productCartContainer");
const productCartTemplate = document.querySelector("#productCartTemplate");
// show cards in add to cart page --
const showtoCartProducts = () =>{
    filterProducts.forEach((curProd)=>{
        const {id, name, category, price, image, stock} = curProd;

        
        // clone the template --
        const productClone = document.importNode(productCartTemplate.content, true);
        
        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

        // add values to template elements --
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = name;
        productClone.querySelector(".productName").textContent = name;
        
        // show updated quantity and price --
        const LSactualData = fetchQuantityfromCartLS(id, price);
        productClone.querySelector(".productPrice").textContent = Number(LSactualData.price).toFixed(2);
        productClone.querySelector(".productQuantity").textContent = LSactualData.quantity;

        // handle increment and decrement button
        productClone.querySelector(".stockElement").addEventListener("click", (event) => {
        incrementdecrement(event, id, stock, price);
        });

        // onclick remove btn remove card --
        productClone.querySelector(".remove-to-cart-button").addEventListener("click", ()=>{
            removeProdfromCart(id);
        });

        // append template to container --
        productCartContainer.appendChild(productClone);

    })
}

showtoCartProducts();

updateCartProductTotal();
