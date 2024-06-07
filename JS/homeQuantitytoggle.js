export const homeQuantitytoggle = (event, id, stock) =>{

    // onclick buttons get card node --
    const currentcCard = document.querySelector(`#card${id}`);

    // get current quantity value --
    const productQuantity = currentcCard.querySelector(".productQuantity");

    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

    // increment toggle --
    if(event.target.className === "cartIncrement"){
        if(quantity < stock){
            quantity += 1;
        }else if(quantity === stock){
            quantity = stock;
        }
    }

    // decrement toggle --
    if(event.target.className === "cartDecrement"){
        if(quantity > 1){
            quantity -= 1;
        }
    }

    // set data-quantity attribute --
    productQuantity.innerText = quantity;
    productQuantity.setAttribute("data-quantity", quantity);
    return quantity;
}