import { defineStore } from "pinia";

const useBooksStore = defineStore('books', {
  state: () => ({
    books: [],
  }),
  getters: {},
  actions: {
    addBook(book) {
      if (!this.books.find((b) => b.id === book.id)) {
        this.books.push(book);
      }
    },
    extractBook(bookId) {
      this.books = this.books.filter((b) => b.id !== bookId);
    },
  },
});

export default useBooksStore;