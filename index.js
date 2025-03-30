function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(booksData => {
      renderBooks(booksData);
      return booksData; // For testing
    })
    .catch(error => {
      console.error('Error fetching books:', error);
      return Promise.reject(error); // For testing
    });
}

function renderBooks(books) {
  const booksContainer = document.getElementById('books-container');

  if (!booksContainer) {
    console.error('Error: Element with id "books-container" not found.');
    return;
  }

  booksContainer.innerHTML = '';

  books.forEach(book => {
    const bookTitleElement = document.createElement('p');
    bookTitleElement.textContent = book.name;
    booksContainer.appendChild(bookTitleElement);
  });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
