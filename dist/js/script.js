(function() {
  const modal = document.querySelector(".modal");
  const openModalBtn = document.querySelector(".OpenModalDialog");
  const closeModalBtns = document.querySelectorAll("[data-type=btn-close]");
  const unistall = document.querySelector("[data-type=btn-unistall]");
  function closeDialog() {
    modal.classList.remove("active");
    modal.classList.add("hide");
  }
  for (let i = 0; i < closeModalBtns.length; i++) {
    openModalBtn.addEventListener("click", function() {
      if (modal.className == "modal hide") {
        modal.classList.remove("hide");
        modal.classList.add("active");
      }
    });
    closeModalBtns[i].addEventListener("click", function() {
      closeDialog();
    });
  }
  unistall.addEventListener("click", function() {
    alert("Shazam were removed");
    closeDialog();
  });
  modal.addEventListener("click", function(event) {
    if (event.target == modal) {
      closeDialog();
    }
  });
})();
