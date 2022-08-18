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

let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

function removeBook() {}
