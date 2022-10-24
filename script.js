import bookCollections from './books.js';
const bookContainer = document.getElementById('books-container');

window.addEventListener('DOMContentLoaded', () => {
  let displayBooks = bookCollections.map((book) => {
    return `
   <div class="single-book">
      <h2 class="book-title">${book.title}</h2>
      <p class="author">${book.author}</p>
      <button class="remove">Remove</button>
     </div>`;
  });

  displayBooks = displayBooks.join('');
  bookContainer.innerHTML = displayBooks;
});

//add
function addBook(title, author) {
  const bookObj = {
    id: Math.floor(Math.random()),
    title,
    author,
  };
  bookCollections.push(bookObj);
}
addBook('hater', 'my life');

//remove function
function removeBook(id) {
  const removeBooks = bookCollections.filter(
    (book) => book.id !== id);
    return bookCollections;
}

//this function is not working 
removeBook(2);
