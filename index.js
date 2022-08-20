var popover = document.querySelector(".popover");
var popoverTrigger = document.querySelector(".popover__trigger");
var form = document.getElementById("myForm");

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

let myLibrary = [
  { title: "The Slight Edge", author: "Jeff Olsen", pages: "500", read: true },
];

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

// myLibrary.map((item) => {
//   let div = document.createElement("div");
//   div.classList.add("grid-item");
//   console.log("ooo", div);
//   div.textContent = item.title;
//   document.querySelector(".grid-container").appendChild(div);
// });

function generateCard(kitab) {
  let div = document.createElement("div");
  div.classList.add("grid-item");

  let bookName = document.createElement("p");
  bookName.textContent = kitab.title;
  div.appendChild(bookName);

  let Author = document.createElement("p");
  Author.textContent = kitab.author;
  div.appendChild(Author);

  let pages = document.createElement("p");
  pages.textContent = kitab.pages;
  div.appendChild(pages);

  let readBtn = document.createElement("button");
  readBtn.textContent = kitab.read ? "read" : "not read";
  div.appendChild(readBtn);

  let removeBtn = document.createElement("button");
  removeBtn.textContent = "remove";
  div.appendChild(removeBtn);

  document.querySelector(".grid-container").appendChild(div);
}

let values = [];
function addBookToLibrary(e) {
  e.preventDefault();
  document.querySelectorAll(".inp").forEach((item) => values.push(item.value));
  values.push(document.querySelector("input[type='checkbox']").checked);
  console.log("values", values);
  let kitab = new Book(...values);
  myLibrary.push(kitab);
  values = [];

  document.getElementById("myForm").reset();
  generateCard(kitab);

  // myLibrary.map((item) => {
  //   let div = document.createElement("div");
  //   div.classList.add("grid-item");
  //   console.log("ooo", div);
  //   div.textContent = item.title;
  //   document.querySelector(".grid-container").appendChild(div);
  // });
}

document
  .querySelector("#formSent")
  .addEventListener("click", (e) => addBookToLibrary(e));
