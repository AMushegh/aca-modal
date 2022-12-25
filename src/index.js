// import axios from "axios";

// axios
//   .get("http://localhost:3000/someData")
//   .then((res) => console.log(res.data));

// elements
const openModalButton = document.getElementById("open-modal-button");
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal .modal__top button");
const cancelButton = document.querySelector("#cle");
const accept = document.querySelector(".modal__bottom__actions-accept");
const textArea = document.querySelector("textarea");
const edits = document.querySelectorAll("li");
let current;

// modal actions
function closeModal() {
  backdrop.style.display = "none";
  modal.style.display = "none";
}

function openModal(text) {
  backdrop.style.display = "block";
  modal.style.display = "flex";
  textArea.value = text.firstElementChild.innerText;
  current = text.firstElementChild;
  console.log(current);
}

function func(text) {
  console.log(text);
  openModal(text);
}

function updateText() {
  current.innerHTML = textArea.value;
}

edits.forEach((el) =>
  el.lastChild.previousElementSibling.addEventListener("click", () => func(el))
);

openModalButton.addEventListener("click", openModal);
modalCloseButton.addEventListener("click", closeModal);
cancelButton.addEventListener("click", closeModal);
accept.addEventListener("click", updateText);
