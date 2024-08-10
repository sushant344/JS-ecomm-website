import { updateCartValue } from "./updateCartValue";

export const getCartProductfromLS = () =>{

    // get values from localStorage --
    const cartProducts = localStorage.getItem("cartProductLS");

    if(!cartProducts){
        return [];
    }

    const CartProducts = JSON.parse(cartProducts);

    updateCartValue(CartProducts);
    return CartProducts;

}