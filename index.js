var popover = document.querySelector(".popover");
var popoverTrigger = document.querySelector(".popover__trigger");

popoverTrigger.addEventListener("click", function (event) {
  closeAllOthers(this.parentElement);
  this.parentElement.classList.toggle("popover--active");
});

function closeAllOthers(ignore) {
  if (popover !== ignore) {
    popover.classList.remove("popover--active");
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

let values = [];
function addBookToLibrary(e) {
  e.preventDefault();
  document.querySelectorAll("input").forEach((item) => values.push(item.value));
  values.push(document.querySelector("input[type='checkbox']").checked);
  myLibrary.push(new Book(...values));

  myLibrary.map((item) => {
    let div = document.createElement("div");
    div.classList.add("grid-item");
    console.log("ooo", div);
    div.textContent = item.title;
    document.querySelector(".grid-container").appendChild(div);
  });
  document.getElementById("myForm").reset();
}

document
  .querySelector("#formSent")
  .addEventListener("click", (e) => addBookToLibrary(e));
