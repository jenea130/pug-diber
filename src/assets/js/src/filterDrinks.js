export default function filterDrinks() {
  const filterItemsAll = document.querySelectorAll(".filter-drinks__item");
  const filterCategoriesAll = document.querySelectorAll("[data-target]");

  filterCategoriesAll.forEach(item => {
    item.onclick = function() {
      
      // active 
      filterCategoriesAll.forEach(item => {
        item.classList.remove("active");
      })
      item.classList.add("active");

      // filter
      const value = item.getAttribute('data-target');
    
      filterItemsAll.forEach(item => {
        item.style.display = "none";
        if (item.classList.contains(value.toLowerCase())) {
          item.style.display = "block";
        }
      })
    }
  })
}
