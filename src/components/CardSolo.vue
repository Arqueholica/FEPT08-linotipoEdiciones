<template>
  <div>
    <div v-if="loading">Cargando...</div>
    <div v-if="error" class="text-red-500">Error al cargar el libro.</div>

    <!-- card de Libro -->
    <router-link
      to="/"
      class="text-sm text-black opacity-70 hover:underline hover:italic hover:opacity-100"
      >Volver</router-link
    >

    <div
      v-if="book"
      class="flex p-10 gap-x-6 w-full h-full rounded-md shadow-md bg-white"
    >
      <div
        class="size-80 opacity-90 bg-red-400 border-2 border-black hover:opacity-100 transition-all"
      >
        <!-- <img
        :src="book.volumeInfo?.imageLinks?.large"
        :alt="book.volumeInfo.title"
      /> -->
      </div>

      <div class="flex flex-col justify-evenly text-justify p-4 text-gray-800 border-2 border-black">
        <h2 class="font-bold text-xl mb-2">
          {{ book.volumeInfo?.title }}
        </h2>
        <h4 class="text-md italic mb-1">
          {{ book.volumeInfo?.authors?.join(", ") }}
        </h4>
        <p class="text-sm mb-2">
          Año de Publicación: {{ book.volumeInfo?.publishedDate }}
        </p>
        <p class="text-md line-clamp-4 hover:line-clamp-none transition-all">
          {{ book.volumeInfo?.description }}
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
      book: {},
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
      if (!this.bookId) {
        this.error = true;
        return;
      }
      try {
        this.loading = true;
        this.error = false;
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${this.bookId}`
        );
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
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
