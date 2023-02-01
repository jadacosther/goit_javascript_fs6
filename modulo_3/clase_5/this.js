const bookShelf = {
    books: ["The Last Kingdom"],
    getBooks() {
      return this.books;
    },
    addBook(bookName) {
      this.books.push(bookName);
    },
    removeBook(bookName) {
      const bookIndex = this.books.indexOf(bookName);
      this.books.splice(bookIndex, 1);
    },
  };
  
  console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
  bookShelf.addBook("The Mist");
  bookShelf.addBook("Dream Guardian");
  console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
  bookShelf.removeBook("The Mist");
  console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']