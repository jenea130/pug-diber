export default function filterBeer() {
  const filterCategory = document.querySelectorAll(".filter-beer__category");
  const filterItem = document.querySelectorAll(".filter-beer__item");
  
  filterCategory.forEach( item => {
    item.onclick = function() {

      // active
      filterCategory.forEach(item => {
        item.classList.remove("active");
      })
      item.classList.add("active");

      // filter
      const value = item.textContent;

      filterItem.forEach( item => {
        item.style.display = "none";
        if (item.classList.contains(value.toLowerCase())) {
          item.style.display = "block";
        }
      })
    }
  })
}
