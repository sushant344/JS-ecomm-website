import { getCartProductfromLS } from "./getCartProductfromLS";

export const updateCartProductTotal = ()=>{
   
    const productSubTotal = document.querySelector(".productSubTotal");
    const productFinalTotal = document.querySelector(".productFinalTotal");

    let localCartProducts = getCartProductfromLS();
    let totalProductPrice = localCartProducts.reduce((accum, curElem)=>{
        let productPrice = parseInt(curElem.price) || 0;
        return accum + productPrice;
    },0)

    productSubTotal.textContent = `₹${totalProductPrice}`;
    productFinalTotal.textContent = `₹${totalProductPrice + 50}`;
}