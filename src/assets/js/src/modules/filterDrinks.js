export default function filterDrinks() {
  const filterItem = document.querySelectorAll(".filter-drinks__item");
  
  document.querySelector('.filter-drinks__list').addEventListener('click', e => {
    
    let filterClass = e.target.dataset['f'];

    
    filterItem.forEach( elem => {
      elem.classList.remove('hide');
      if (!elem.classList.contains(filterClass))
        elem.classList.add('hide');
    })
  });
}
