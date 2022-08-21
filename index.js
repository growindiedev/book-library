var popover = document.querySelector(".popover");
var popoverTrigger = document.querySelector(".popover__trigger");
var form = document.getElementById("myForm");
var content = document.querySelector(".content");

popoverTrigger.addEventListener("click", function (event) {
  closeAllOthers(this.parentElement);
  // form.removeAttribute("disabled");
  this.parentElement.classList.toggle("popover--active");
});

function closeAllOthers(ignore) {
  if (popover !== ignore) {
    popover.classList.remove("popover--active");
    // form.setAttribute("disabled");
  }
}

let myLibrary = [];

let myLibraryNodes = [];

console.log("whoop", myLibrary);
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  if (read) {
    return `${this.title} by ${this.author}, ${this.pages} pages, finished`;
  }
  return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
};

// function removeBookFromLibrary(e, index) {
//   document.querySelector(".grid-container").remove();
//   myLibrary.splice(index, 1);
//   let gridContainer = document.createElement("div");
//   gridContainer.classList.add("grid-container");
//   myLibrary.forEach((book) => gridContainer.appendChild(book));
//   let content = document.querySelector(".content");
//   let footer = document.querySelector(".footer");
//   content.insertBefore(gridContainer, footer);
// }

function updateReadBook(e) {}

function removeBookFromLibrary(e) {
  document.querySelector(".grid-container").remove();
  myLibrary = myLibrary.filter(
    (elm) =>
      elm.dataset.indexNumber !== e.target.parentElement.dataset.indexNumber
  );
  let gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  myLibrary.forEach((book) => gridContainer.appendChild(book));
  let content = document.querySelector(".content");
  content.appendChild(gridContainer);
}

function generateCard(kitab, index) {
  let card = document.createElement("div");
  card.classList.add("grid-item");
  card.setAttribute("data-index-number", index);

  let bookName = document.createElement("p");
  bookName.textContent = kitab.title;
  card.appendChild(bookName);

  let Author = document.createElement("p");
  Author.textContent = kitab.author;
  card.appendChild(Author);

  let pages = document.createElement("p");
  pages.textContent = kitab.pages;
  card.appendChild(pages);

  let readBtn = document.createElement("button");
  readBtn.textContent = kitab.read ? "read" : "not read";
  card.appendChild(readBtn);

  let removeBtn = document.createElement("button");
  removeBtn.addEventListener("click", (e) => removeBookFromLibrary(e, index));
  removeBtn.classList.add("remove-btn");
  removeBtn.textContent = "remove";
  card.appendChild(removeBtn);
  return card;
}

function addBookToLibrary(e) {
  let values = [];
  e.preventDefault();
  document.querySelectorAll(".inp").forEach((item) => values.push(item.value));
  values.push(document.querySelector("input[type='checkbox']").checked);
  console.log("values", values);
  let kitab = new Book(...values);
  form.reset();
  let card = generateCard(kitab, myLibrary.length);
  myLibrary.push(card);
  console.log("cards", myLibrary);
  document.querySelector(".grid-container").appendChild(card);
}

document
  .querySelector("#formSent")
  .addEventListener("click", (e) => addBookToLibrary(e));
