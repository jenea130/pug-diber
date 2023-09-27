export default function activePage() {

  let activePage = window.location.href;
  const links = document.querySelectorAll(".menu__link");

  
  links.forEach((link) => {
    if (link == activePage) {
      link.classList.add('active');
    }
  });
}
