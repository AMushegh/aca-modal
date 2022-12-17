// import axios from "axios";

// axios
//   .get("http://localhost:3000/someData")
//   .then((res) => console.log(res.data));

// elements
const openModalButton = document.getElementById("open-modal-button");
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal .modal__top button");

// modal actions
function openModal() {
  backdrop.style.display = "block";
  modal.style.display = "flex";
}

function closeModal() {
  backdrop.style.display = "none";
  modal.style.display = "none";
}

openModalButton.addEventListener("click", openModal);
modalCloseButton.addEventListener("click", closeModal);
