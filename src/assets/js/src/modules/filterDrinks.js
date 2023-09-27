export default function filterDrinks() {
  const filterItem = document.querySelectorAll(".filter-drinks__item");
  const filterCategory = document.querySelectorAll(".filter-drinks__category");

  filterCategory.forEach(item => {
    item.onclick = function() {
      
      // active 
      filterCategory.forEach(item => {
        item.classList.remove("active");
      })
      item.classList.add("active");

      // filter
      const text = item.textContent;
      let value = text.split(',')[0];
    
      filterItem.forEach(item => {
        item.style.display = "none";
        if (item.classList.contains(value.toLowerCase())) {
          item.style.display = "block";
        }
      })
    }
  })
}
