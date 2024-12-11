<template>
  <div>
    <div v-if="loading">Cargando...</div>
    <div v-if="error" class="text-red-500">Error al cargar el libro.</div>
    <div v-if="book" class="bg-white border-2 border-black">
      <img
        :src="book.volumeInfo.imageLinks?.thumbnail"
        :alt="book.volumeInfo.title"
      />
      <h2>Título: {{ book.volumeInfo.title }}</h2>
      <h4> Autores: {{ book.volumeInfo.authors?.join(", ") }}</h4>
      <p>Año de Publicación: {{ book.volumeInfo.publishedDate }}</p>
      <p>Resumen: {{ book.volumeInfo.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSolo",
  computed: {
  bookId() {
    return this.$route.params.bookId;
  },
},
  data() {
    return {
      book: [],
      loading: false,
      error: false,
      key: "AIzaSyCHGeGKFBkCOQS51l9Laf6CFFIRzwQHQfM",
    };
  },
  mounted() {
    this.getSoloBook();
  },
  methods: {
    async getSoloBook() {
      try {
        this.loading = true;
        this.error = false;
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${this.bookId}?key=AIzaSyCHGeGKFBkCOQS51l9Laf6CFFIRzwQHQfM`
        );
        if (!response.ok) {
          this.error = true;
          this.loading = false;
          throw new Error(
            "Lo siento, se ha producido un error ${response.status}: ${response.statusText} "
          );
        }
        const data = await response.json();
        this.book = data;
      } catch (error) {
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
