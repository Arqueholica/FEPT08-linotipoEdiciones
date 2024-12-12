<template>
  <div>
    <div v-if="loading">Cargando...</div>
    <div v-if="error" class="text-red-500">Error al cargar el libro.</div>

    <!-- card de Libro -->
    <router-link to="/" class="text-sm text-black opacity-70 hover:underline hover:italic hover:opacity-100">Volver</router-link>
    <div
      v-if="book"
      class="relative w-full sm:w-[300px] h-auto border-2 border-black overflow-hidden rounded-md shadow-md bg-white"
    >
      <img
        :src="book.volumeInfo.imageLinks?.thumbnail"
        :alt="book.volumeInfo.title"
        class="w-full h-[200px] object-cover opacity-90 hover:opacity-100 transition-opacity"
      />
      <div class="p-4 text-gray-800">
        <h2 class="font-bold text-xl mb-2">
          Título: {{ book.volumeInfo.title }}
        </h2>
        <h4 class="text-md italic mb-1">
          Autores: {{ book.volumeInfo.authors?.join(", ") }}
        </h4>
        <p class="text-sm mb-2">
          Año de Publicación: {{ book.volumeInfo.publishedDate }}
        </p>
        <p class="text-sm line-clamp-3 hover:line-clamp-none transition-all">
          Resumen: {{ book.volumeInfo.description }}
        </p>
      </div>
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
      key: "AIzaSyBiWPwMmOICK7zTqyxqjztUtYc2x5wVKDI",
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
          `https://www.googleapis.com/books/v1/volumes/${this.bookId}?key=AIzaSyBiWPwMmOICK7zTqyxqjztUtYc2x5wVKDI`
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
