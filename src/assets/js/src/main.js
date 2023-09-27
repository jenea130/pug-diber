import streetMap from "./modules/streetMap";
import filterDrinks from "./modules/filterDrinks";
import filterBeer from "./modules/filterBeer";
import toggleMenu from "./modules/header/toggleMenu";

window.addEventListener("DOMContentLoaded", function () {
  console.log("some thing for me");
  toggleMenu();
  streetMap();
  filterBeer();
  filterDrinks();
});
