import streetMap from "./modules/streetMap";
import filterDrinks from "./modules/filterDrinks";
import filterBeer from "./modules/filterBeer";
import toggleMenu from "./modules/header/toggleMenu";

window.addEventListener("DOMContentLoaded", function () {
  toggleMenu();
  streetMap();
  filterBeer();
  console.log("some thing for me");
  filterDrinks();
});
