import { getCartProductfromLS } from "./getCartProductfromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductfromLS();
export const addTocart = (id) =>{

    let arrLocalStorageProduct = getCartProductfromLS();

    const currentCardElem = document.querySelector(`#card${id}`);
    
    let price = currentCardElem.querySelector(".productPrice").innerText;
    let quantity = currentCardElem.querySelector(".productQuantity").innerText;
    // console.log(productPrice, productQuantity);
    price = price.replace("₹", "");

    // if product already exist in LS then only update quantity and price --
    const existingProd = arrLocalStorageProduct.find(curProd => curProd.id === id);

    if(existingProd && quantity > 1){
        // console.log("Exist", existingProd);
        quantity = Number(existingProd.quantity) + Number(quantity);
        price = Number(quantity * price).toFixed(2);

        let updatedcart = { id, price, quantity };
        updatedcart = arrLocalStorageProduct.map((curProd)=>{
            return curProd.id === id ? updatedcart : curProd;
        });

        localStorage.setItem("cartProductLS", JSON.stringify(updatedcart));

        //show toast when product added to the cart
        showToast("add", id);
    }

    if(existingProd){
        return false;
    }

    price = Number(price * quantity);
    quantity = Number(quantity);

    // add to localStorage --
    arrLocalStorageProduct.push({id, price, quantity});
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

    updateCartValue(arrLocalStorageProduct);

    //show toast when product added to the cart
    showToast("add", id);
}