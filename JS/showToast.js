export const showToast = (operation, id)=> {
    const toast = document.createElement("div");
    toast.classList.add("toast");
  
    // Set the text content of the toast based on the operation
    if (operation === "add") {
      toast.textContent = `Product with ID ${id} has been added.`;
    } else if(operation === "delete") {
      toast.textContent = `Product with ID ${id} has been deleted.`;
    } else{
      toast.textContent = `Meassege sent successfully`;
    }
  
    document.body.appendChild(toast);
  
    // Automatically remove the toast after a few seconds
    setTimeout(() => {
      toast.remove();
    }, 2000);
  }