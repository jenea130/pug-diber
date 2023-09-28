import streetMap from "./modules/streetMap";
import filterDrinks from "./modules/filterDrinks";
import filterBeer from "./modules/filterBeer";
import activePage from "./modules/activePage";
import toggleMenu from "./modules/header/toggleMenu";
import modalContent from "./modules/modalContent";

window.addEventListener("DOMContentLoaded", function () {
  const modal_content = document.querySelector("#js-modal-content");

  if (modal_content) {
    modalContent();
  }
  activePage();
  toggleMenu();
  streetMap();
  filterBeer();
  console.log("some thing for me");
  filterDrinks();
});
