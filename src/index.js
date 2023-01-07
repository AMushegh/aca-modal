import axios from "axios";

axios.get("http://localhost:3000/list").then((res) => renderList(res.data));

// elements
const list = document.querySelector(".container ul");
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal .modal__top button");
const textarea = document.querySelector(".modal__main-content textarea");
const modalCancelButton = document.querySelector(
  ".modal__bottom__actions-cancel"
);
const modalAcceptButton = document.querySelector(
  ".modal__bottom__actions-accept"
);

let currentItem;
let currentItemId;

// modal actions
function openModal() {
  backdrop.style.display = "block";
  modal.style.display = "flex";
}

function closeModal() {
  backdrop.style.display = "none";
  modal.style.display = "none";
}

function renderList(listData) {
  listData.forEach((listDataItem) => {
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    const button = document.createElement("button");

    h1.innerText = listDataItem.title;
    button.innerText = "edit";

    li.appendChild(h1);
    li.appendChild(button);
    li.setAttribute("id", listDataItem.id);

    list.appendChild(li);
  });

  const listItems = document.querySelectorAll("ul li");
  listItems.forEach((item) =>
    item.lastElementChild.addEventListener("click", () =>
      itemEditClickHandler(item)
    )
  );
}

function itemEditClickHandler(item) {
  openModal();
  currentItem = item;
  currentItemId = item.getAttribute("id");
  textarea.value = item.firstElementChild.innerText;
}

function modalAcceptClickHandler() {
  currentItem.firstElementChild.innerText = textarea.value;

  axios.put(`http://localhost:3000/list/${currentItemId}`, {
    id: 1,
    title: textarea.value,
  });
  closeModal();
}

modalCloseButton.addEventListener("click", closeModal);
modalCancelButton.addEventListener("click", closeModal);
modalAcceptButton.addEventListener("click", modalAcceptClickHandler);
