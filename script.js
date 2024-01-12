const myLibrary = [];
const bookContainer = document.querySelector('.book-container');
const addBookButton = document.querySelector('.add-book-button');
const bookForm = document.querySelector('.book-form');


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
  bookContainer.innerHTML = '';
  myLibrary.forEach((book, index) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book-div');
    // bookDiv.dataset.index = index;
    bookDiv.innerHTML = `
      <div class="title"> ${book.title} </div>
      <div> ${book.author} </div>
      <div> ${book.pages} pages </div>
      <button 
      class="remove-button"
      data-index="${index}"> 
        Remove 
      </button>
    `;
    bookContainer.appendChild(bookDiv);
  });
  addRemoveEventListeners();
}

updateDisplay()

bookForm.addEventListener('submit', addBook);

function addBook(event){
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  event.preventDefault();
  console.log(title, author, pages);
  const newBook = new Book(title, author, pages);
  addBookToLibrary(newBook);
  updateDisplay();
}


function addRemoveEventListeners(){
  const removeButtons = document.querySelectorAll('.remove-button');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeBook);
  })
}

function removeBook(e){
  const index = (parseInt(e.target.dataset.index));
  myLibrary.splice(index, 1);
  updateDisplay();

}

