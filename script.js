const myLibrary = [];
const bookContainer = document.querySelector('.book-container');
const addBookButton = document.querySelector('.add-book-button');
const bookForm = document.querySelector('.book-form');


function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}


const book1 = new Book('harry potter', 'JK rowling', 343, true);
const book2 = new Book('fortnite', 'John wick', 532, true);
const book3 = new Book('big nate', 'lincoln pierce', 492, false);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);


function updateDisplay() {
  bookContainer.innerHTML = '';
  myLibrary.forEach((book, index) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book-div');
    bookDiv.innerHTML = `
      <div class="title"> ${book.title} </div>
      <div> ${book.author} </div>
      <div> ${book.pages} pages </div>
      <button 
        class="read-status-button 
        read-status-button-${index}"> 
          Read 
      </button>
      <button 
        class="remove-button"
        data-index="${index}"> 
         Remove 
      </button>
    `;
    bookContainer.appendChild(bookDiv);

    const readStatusButton = document.querySelector(`.read-status-button-${index}`);
    if (book.readStatus) {
      readStatusButton.textContent = 'Read';
      readStatusButton.classList.add('read');
    } else {
      readStatusButton.textContent = 'Not read';
      readStatusButton.classList.add('not-read');
    }
  });
  addRemoveEventListeners();
  addReadStatusEventListeners();
}

updateDisplay()

bookForm.addEventListener('submit', addBook);

function addBook(event) {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const readStatus = document.querySelector('#readStatus').checked;

  event.preventDefault();
  const newBook = new Book(title, author, pages, readStatus);
  addBookToLibrary(newBook);
  updateDisplay();
}


function addRemoveEventListeners() {
  const removeButtons = document.querySelectorAll('.remove-button');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeBook);
  })
}

function removeBook(e) {
  const index = (parseInt(e.target.dataset.index));
  myLibrary.splice(index, 1);
  updateDisplay();
}

function addReadStatusEventListeners(){
  const readStatusButtons = document.querySelectorAll('.read-status-button');
  readStatusButtons.forEach(button => {
    button.addEventListener('click', toggleReadStatus);
  })
}

function toggleReadStatus(e){
  const button = e.target;
  const isRead = (button.classList.contains('read'));
  if(isRead){
    button.textContent = 'Not read';
    button.classList.add('not-read');
    button.classList.remove('read');
  }else{
    button.textContent = 'Read';
    button.classList.add('read');
    button.classList.remove('not-read');
  }
}