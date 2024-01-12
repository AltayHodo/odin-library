const myLibrary = [];
const bookContainer = document.querySelector('.book-container');
const addBookButton = document.querySelector('.add-book-button');



function Book(title, author, pages){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.getInfo = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages`;
  };
}

function addBookToLibrary(book){
  myLibrary.push(book);
}



const book1 = new Book('harry potter', 'JK rowling', 343);
const book2 = new Book('fortnite', 'John wick', 532);
const book3 = new Book('big nate', 'lincoln pierce', 492);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);


function updateDisplay(){
  myLibrary.forEach(book => {
    console.log(book)
    const bookDiv = document.createElement('div');
    bookDiv.innerHTML = `
      <div> ${book.title} </div>
      <div> ${book.author} </div>
      <div> ${book.pages} </div>
    `;
    bookContainer.appendChild(bookDiv);
  });
}

updateDisplay()

addBookButton.addEventListener('click', addBook);

function addBook(){
  
}