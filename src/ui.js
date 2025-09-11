console.log("HELLO");

const closeButton = document.querySelector(".modalImg");
const modalContainer = document.querySelector(".modal-container");
const ruleButton = document.querySelector("footer");

closeButton.addEventListener("click", () => {
  console.log("hi");
  modalContainer.classList.toggle("openModal");
});

ruleButton.addEventListener("click", () => {
  console.log("hi");
  modalContainer.classList.toggle("openModal");
});
