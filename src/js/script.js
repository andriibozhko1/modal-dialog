(function() {
  const modal = document.querySelector(".modal");
  const openModalBtn = document.querySelector(".open-modal-dialog");
  const closeModalBtns = document.querySelectorAll("[data-type=btn-close]");
  const unistall = document.querySelector("[data-type=btn-unistall]");
  function closeDialog() {
    modal.classList.remove("active");
    modal.classList.add("hide");
  }
  function openDialog() {
    modal.classList.remove("hide");
    modal.classList.add("active");
  }
  for (let i = 0; i < closeModalBtns.length; i++) {
    openModalBtn.addEventListener("click", function() {
      if (modal.className == "hide") {
        openDialog();
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
