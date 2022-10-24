
// Book Class: Repersent a book
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
// UI class: Handel UI Tasks
class UI {
  static displayBooks(){
    const StoredBooks = [
      {
        title: 'Book One',
        author: 'Jod',
      },
      {
        title: 'Book two',
        author: 'Jogh',
      }

    ];
    const books = StoredBooks;
    books.forEach((book) => UI.addBookToList(book));
  }
  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}
    <td><a href="#" class="delete">Remove</td>`;

    list.appendChild(row);

  }
  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  // static showAlert(message, className) {
  //   const div = document.createElement('div');
  //   div.className = `${className}`;
  //   div.appendChild(document.createTextNode(message));
  //   const Awesome = document.querySelector('.Awesome_Book');
  //   const form = document.querySelector('#book-form');
  //   Awesome.insertBefore(div, form);
  // }



  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}
// Store class: Handel the storage
// Event: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// Event: Add a book

document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Get form values
  // prevent actual submit
  e.preventDefault();
  const title =  document.querySelector('#title').value;
  const author =  document.querySelector('#author').value;

  //validte 
  if (title === '' || author === '') {
    alert('please fill in all fields');
  } else {
      //Instaiate book
    const book = new Book(title, author);
    // Add Book to UI
    UI.addBookToList(book)
    // clear fields
    UI.clearFields();
  }
});

 
// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target)
});





















// class Books {
//   constructor(title = "", author = "") {
//     this.title = title;
//     this.author = author;
//     this.books =
//       localStorage.getItem("books") !== null
//         ? JSON.parse(localStorage.getItem("books"))
//         : "";
//   }

//   saveBook(BTSave = this.books) {
//     const storeBook = JSON.stringify(BTSave);
//     localStorage.setItem("books", storeBook);
//   }

//   addBook() {
//     if (this.books === "" || this.books.length <= 0) {
//       this.books = [
//         {
//           Id: 1,
//           Btitle: this.title,
//           Bauthor: this.author,
//         },
//       ];
//       this.saveBook();
//     } else {
//       const lastId = this.books[this.books.length - 1].Id + 1;
//       const book = {
//         Id: lastId,
//         Btitle: this.title,
//         Bauthor: this.author,
//       };
//       this.books.push(book);
//       this.saveBook();
//     }
//   }

//   removeBook(bookId) {
//     const remove = this.books.filter((book) => book.Id !== Number(bookId));
//     this.saveBook(remove);
//   }

//   static displayBook(book) {
//     const list = document.querySelector(".books_table");
//     const row = document.createElement("tr");
//     row.innerHTML = ` <td>${book.Btitle}</td> 
//     <td>${book.Bauthor}</td> <td>
//     <button type="submit" id="${book.Id}" class="btn">Remove</button></td> `;
//     list.appendChild(row);
//   }
// }

/* flash messages */
// const snakbar = document.getElementById("message-container");
// function snaker(type, mes, time) {
//   const para = document.createElement("p");
//   para.classList.add("snakbar");
//   para.innerHTML = `${mes} `;
//   if (type === "error") {
//     para.classList.add("error");
//   } else if (type === "success") {
//     para.classList.add("success");
//   } else if (type === "remove") {
//     para.classList.add("remove");
//   }
//   snakbar.appendChild(para);
//   para.classList.add("fadeout");
//   setTimeout(() => {
//     snakbar.removeChild(para);
//   }, time);
// }

//  display all the books;

// if (localStorage.getItem("books") !== null) {
//   const books = JSON.parse(localStorage.getItem("books"));
//   books.forEach((element) => {
//     Books.displayBook(element);
//   });
// }

// add book function
// const title = document.getElementById("title");
// const author = document.getElementById("author");

// document.querySelector("#book-form").addEventListener("submit", (e) => {
//   if (title.value === "" || author.value === "") {
//     snaker(
//       "error",
//       "<b>Error:</b> Title and Author fields must be filled out",
//       4000
//     );

//     e.preventDefault();
//   } else {
//     const addBk = new Books(title.value, author.value);
//     addBk.addBook();
//     snaker("success", "<b> Success: </b> Book Saved successfully!", 4000);

//     title.value = "";
//     author.value = "";
//   }
// });

// Remove book function

// function removeBk() {
//   const Book = new Books();
//   Book.removeBook(this.id);
//   this.parentNode.parentNode.remove();
//   snaker("remove", "<b> Remove:</b> Book Removed successfully ", 4000);
// }

// const btn = document.querySelectorAll(".btn");
// btn.forEach((element) => {
//   element.addEventListener("click", removeBk);
// });



















// import bookCollections from './books.js';
// const bookContainer = document.getElementById('books-container');

// window.addEventListener('DOMContentLoaded', () => {
//   let displayBooks = bookCollections.map((book) => {
//     return `
//    <div class="single-book">
//       <h2 class="book-title">${book.title}</h2>
//       <p class="author">${book.author}</p>
//       <button class="remove">Remove</button>
//      </div>`;
//   });

//   displayBooks = displayBooks.join('');
//   bookContainer.innerHTML = displayBooks;
// });

// //add
// function addBook(title, author) {
//   const bookObj = {
//     id: Math.floor(Math.random()),
//     title,
//     author,
//   };
//   bookCollections.push(bookObj);
// }
// addBook('hater', 'my life');

// //remove function
// function removeBook(id) {
//   const removeBooks = bookCollections.filter(
//     (book) => book.id !== id);
//     return bookCollections;
// }

// //this function is not working 
// removeBook(2);
