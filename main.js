import "./style.css";

import products from "./api/products.json";
import { showProductContainer } from "./JS/homeProductCards";
import { footer } from "./JS/footer";

document.addEventListener("DOMContentLoaded", () => {
  // Hide loader and show content
  footer();
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
  showProductContainer(products);
});
