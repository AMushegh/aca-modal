// import axios from "axios";

// axios
//   .get("http://localhost:3000/someData")
//   .then((res) => console.log(res.data));

// elements
const openModalButton = document.getElementById("open-modal-button");
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");

// modal actions
function openModal() {
  backdrop.style.display = "block";
  modal.style.display = "block";
}

openModalButton.addEventListener("click", openModal);
