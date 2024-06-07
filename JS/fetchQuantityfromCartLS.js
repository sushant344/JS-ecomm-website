import { getCartProductfromLS } from "./getCartProductfromLS"

export const fetchQuantityfromCartLS = (id, price)=>{

    let cartProductLS = getCartProductfromLS();
    const existingProduct = cartProductLS.find((curElem)=> curElem.id === id)
    let quantity = 1;

    if(existingProduct){
        quantity = existingProduct.quantity;
        price = (existingProduct.price);
    }

    return {quantity, price};
}