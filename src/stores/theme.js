import { defineStore } from 'pinia';

export const useThemeStore = defineStore('themeStore', {
  state: () => ({
    selectedTheme: '',
    selectedBook: null,
  }),
  actions: {
    setTheme(theme) {
      this.selectedTheme = theme;
    },
    setBook(book) {
      this.selectedBook = book;
    },
  },
});