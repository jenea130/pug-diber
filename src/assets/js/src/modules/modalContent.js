export default function modalContent() {
  const modal_content = document.querySelector("#js-modal-content");
  const btn_yes = document.querySelector("#js-btn-yes");
  const btn_no = document.querySelector("#js-btn-no");
  const checkbox = document.querySelector("#checkbox");

  if (!localStorage.getItem("modal_content")) {
    setTimeout(() => {
      modal_content.classList.add("active");
    }, 2000);
  }

  btn_yes.addEventListener("click", function () {
    if (checkbox.checked) {
      localStorage.setItem("modal_content", true);
      closePopup();
    } else {
      closePopup();
    }
  });
  btn_no.addEventListener("click", function () {
    if (checkbox.checked) {
      goToGoogle();
    } else {
      goToGoogle();
    }
  });

  function closePopup() {
    modal_content.classList.remove("active");
  }
  function showPopup() {
    modal_content.classList.add("active");
  }
  function goToGoogle() {
    window.location.href = "https://google.com";
  }
}
