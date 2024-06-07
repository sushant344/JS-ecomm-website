import { homeQuantitytoggle } from "./homeQuantitytoggle";
import { addTocart } from "./addTocart";

const productContainer = document.getElementById("productContainer");
const productTemplate = document.getElementById("productTemplate");

export const showProductContainer= (products) =>{

    if(!products){
        return false;
    }

    products.forEach(curElem => {
        const { id, name, category, price, stock, description, image } = curElem;

        // clone the template then it can be visible on UI --
        const productClone = document.importNode(productTemplate.content, true);

        // add id for each card --
        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

        // add value of card attributes --
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = name;
        productClone.querySelector(".productStock").textContent = stock;
        productClone.querySelector(".productDescription").textContent = description;
        productClone.querySelector(".productPrice").textContent = `₹${price}`;
        productClone.querySelector(".productActualPrice").textContent = `₹${(price * 1.2).toFixed(2)}`;

        // onclick increment & decrement button toggle quantity --
        productClone.querySelector(".stockElement")
        .addEventListener("click", (event)=> { homeQuantitytoggle(event, id, stock) });

        // onclick add to cart all details store in localStorage --
        productClone.querySelector(".add-to-cart-button")
        .addEventListener("click", () => {
        addTocart(id);
        });


        productContainer.append(productClone);
  
    });
}