import { updateCartValue } from "./updateCartValue";

export const getCartProductfromLS = () =>{

    // get values from localStorage --
    let cartProducts = localStorage.getItem("cartProductLS");

    if(!cartProducts){
        return [];
    }

    cartProducts = JSON.parse(cartProducts);

    updateCartValue(cartProducts);
    return cartProducts;

}