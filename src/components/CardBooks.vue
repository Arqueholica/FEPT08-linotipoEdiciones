<template>
  <div>
    <h1 class="text-2xl font-bold mb-4 capitalize">Libros sobre {{ tema }}</h1>
    <div class="grid grid-cols-3 gap-3">
      <div v-for="book in books" :key="book.id">
          <div> {{ book.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardBooks",
  data() {
    return {
      books: [],
      tema: "",
      loading: false,
      error: false,
      key: "AIzaSyCHGeGKFBkCOQS51l9Laf6CFFIRzwQHQfM",
    };
  },

  methods: {
    async getLibrosTema() {
      try {
        this.loading = true;
        this.error = false;
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${this.tema}&maxResults=12`
        );
        if (!response.ok) {
          this.error = true;
          this.loading = false;
          throw new Error(
            "Lo siento, se ha producido un error ${response.status}"
          );
        }
        const data = await response.json();
        this.books = data.items;
      } catch (error) {
        this.error = true;
      } finally {
        this.loading = false;
      }
    }
}
}
    
</script>
