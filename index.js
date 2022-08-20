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

let values = [];
function addBookToLibrary(e) {
  // container.innerHTML = "";

  e.preventDefault();
  document.querySelectorAll(".inp").forEach((item) => values.push(item.value));
  values.push(document.querySelector("input[type='checkbox']").checked);
  console.log("values", values);
  let kitab = new Book(...values);
  myLibrary.push(kitab);
  values = [];
  document.getElementById("myForm").reset();
  let div = document.createElement("div");
  div.classList.add("grid-item");
  console.log("ooo", div);
  div.textContent = kitab.title;
  document.querySelector(".grid-container").appendChild(div);
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
