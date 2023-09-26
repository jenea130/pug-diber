import streetMap from "./modules/streetMap";
import filterDrinks from "./modules/filterDrinks";
import toggleMenu from "./modules/header/toggleMenu";

window.addEventListener("DOMContentLoaded", function () {
    console.log("some thing for me");
    toggleMenu();
    streetMap();
    filterDrinks();
});
