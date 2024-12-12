<template>
  <div class="p-10">
    <div>
      <router-link to="/colecciones" class="text-sm text-black opacity-70 hover:underline hover:italic hover:opacity-100">Volver</router-link>
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
      <h1 class="text-2xl font-bold mb-4 px-4">{{ tema }}</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6">
        <div
          v-for="book in books"
          :key="book.id"
          class="relative w-full sm:w-[250px] h-[350px] border-2 border-slate-300 rounded-md shadow-lg"
        >
          <img
            :src="book.volumeInfo.imageLinks?.thumbnail"
            :alt="book.volumeInfo.title"
            class="absolute w-full h-full object-cover opacity-70 hover:opacity-100 hover:scale-110 transition-all"
          />
          <div class="absolute bottom-0 bg-gradient-to-t from-black to-transparent text-white capitalize p-3">
            <h2 class="font-bold text-xl">{{ book.volumeInfo.title }}</h2>
            <h4 class="text-sm italic">
              {{ book.volumeInfo.authors?.join(", ") }}
            </h4>
            <router-link
              :to="`/colecciones/${tema.título}/${book.id}`"
              class="text-slate-300 hover:underline hover:italic"
            >
              Continúa
            </router-link>
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
          `https://www.googleapis.com/books/v1/volumes?q=${this.tema}&maxResults=24`
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
