import { getCartProductfromLS } from "./getCartProductfromLS"
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const removeProdfromCart = (id) =>{
    
    const cartProducts = getCartProductfromLS();
    const removeProducts = cartProducts.filter((curProd)=> curProd.id !== id);
    localStorage.setItem("cartProductLS", JSON.stringify(removeProducts));
    
    let removeDiv = document.getElementById(`card${id}`);
    if(removeDiv){
        removeDiv.remove();

        //show toast when product removed to the cart
        showToast("delete", id);
    }

    getCartProductfromLS();
    updateCartProductTotal();
}