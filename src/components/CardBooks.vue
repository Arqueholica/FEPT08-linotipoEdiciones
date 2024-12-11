<template>
  <div class="p-6">
    <div>
      <router-link to="/colecciones/" class="text-sm text-black hover:underline"
        >Volver</router-link
      >
    </div>
    <div>
      <div
        v-if="loading"
        class="text-center font-bold text-2xl p-20 animate-pulse"
      >
        Cargando...
      </div>
      <div
        v-if="error"
        class="text-center font-bold text-2xl p-20 animate-pulse"
      >
        Error
      </div>

      <!-- CARD DE LIBRO -->
      <h1 class="text-2xl font-bold mb-4 ">
        Libros sobre {{ tema }}
      </h1>
      <div class="grid grid-cols-3 gap-3 m-2">
        <div v-for="book in books" :key="book.id">
          <div class="bg-white p-2 flex border-2 justify-evenly h-100%">
            <div class="border-2 border-black p-1">
              <img
                :src="book.volumeInfo.imageLinks?.thumbnail"
                alt="{{ book.volumeInfo.title }}"
                class="object-cover h-60 w-60 hover:scale-110 transition-all"
              />
            </div>
            <div>
              <h2>{{ book.volumeInfo.title }}</h2>
              <h4>{{ book.volumeInfo.authors?.join(", ") }}</h4>
              <div><router-link :to="`/colecciones/${tema}/${book.id}`"
                >Continúa</router-link></div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardBooks",
  computed: {
    tema() {
      return this.$route.params.tema;
    },
  },
  watch: {
    tema: "getLibrosTema",
  },
  data() {
    return {
      books: [],
      loading: false,
      error: false,
    };
  },
  mounted() {
    this.getLibrosTema();
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
            "Lo siento, se ha producido un error ${response.status}: ${response.statusText} "
          );
        }
        const data = await response.json();
        this.books = data.items;
      } catch (error) {
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
