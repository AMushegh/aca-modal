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
