const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

const dragStart = (e) => {
  e.target.classList.add("hold");
  setTimeout(() => (e.target.classList = ""), 0);
};

const dragEnd = (e) => {
  e.target.classList = "fill";
};

const dragEnter = (e) => {
  e.target.classList.add("hovered");
};

const dragLeave = (e) => {
  e.target.classList.remove("hovered");
};

const dragOver = (e) => {
  e.preventDefault();
};

const dragDrop = (e) => {
  e.target.classList = "empty";
  e.target.append(fill);
};

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

empties.forEach((empty) => {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
});
