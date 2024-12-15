<template>
  <div class="p-10">
    <div>
      <div v-if="loading">Cargando...</div>
      <div v-if="error" class="text-red-500">Error al cargar el libro.</div>

      <router-link
        :to="`/colecciones/${tema}`"
        class="text-sm text-black opacity-70 hover:underline hover:italic hover:opacity-100"
        >Volver</router-link
      >

      <!--CARD DEL LIBRO -->

      <!-- IMAGEN PORTADA -->
      <div
        v-if="book"
        class="flex p-10 gap-x-4 w-full h-full rounded-md shadow-md bg-white"
      >
        <div
          class="flex h-full w-full border-2 border-black hover:scale-110 transition-all"
        >
          <img
            :src="book.volumeInfo?.imageLinks?.extraLarge"
            :alt="book.volumeInfo?.title"
            class="object-fill"
          />
        </div>

        <!-- FICHA LIBRO EXTENSA -->
        <div
          class="flex flex-col justify-evenly text-justify p-4 text-gray-800 border-2 border-black"
        >
          <h2 class="font-bold text-xl mb-2">
            {{ book.volumeInfo?.title }}
          </h2>
          <h4 class="text-md italic mb-1">
            {{ book.volumeInfo?.authors?.join(", ") }}
          </h4>
          <p class="text-sm mb-2">
            Año de Publicación: {{ book.volumeInfo?.publishedDate }}<br />
            
          </p>

          <p
            class="text-md"
            :class="{ 'line-clamp-4': !descriptionFull }"
            @click="getText"
          >
            {{ book.volumeInfo?.description }}
          </p>
          <button @click="getText">
            <i :class="descriptionFull ? 'fa fa-angle-up' : 'fa fa-angle-down'"></i>
          </button>
        </div>

        <!-- PRECIO Y FORMATOS DISPONIBLES     -->

        <div class="flex flex-col">
          <h3 class="font-bold mb-2">Formatos disponibles:</h3>
          <p v-if="book.accessInfo?.epub?.isAvailable">
            <button class="border-2 border-black bg-red-100 hover:bg-red-300">
              <a :href="book.accessInfo?.epub?.acsTokenLink" target="_blank"
                >Descargar ePub</a
              >
            </button>
          </p>
          <p v-if="book.accessInfo?.pdf?.isAvailable">
            <button class="border-2 border-black bg-red-100 hover:bg-red-300">
              <a :href="book.accessInfo?.pdf?.acsTokenLink" target="_blank"
                >Descargar PDF</a
              >
            </button>
          </p>
          <p v-if="book.accessInfo?.webReaderLink">
            <button class="border-2 border-black bg-red-100 hover:bg-red-300">
              <router-link :to="`/user?link=${encodeURIComponent(book.accessInfo.webReaderLink)}`">Acceder al Lector</router-link>
            </button>
          </p>
        </div>
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
    tema() {
      return this.$route.params.tema;
    },
  },
  data() {
    return {
      book: {},
      loading: false,
      error: false,
      key: "AIzaSyBiWPwMmOICK7zTqyxqjztUtYc2x5wVKDI",
      descriptionFull: false,
    };
  },
  beforeMount() {
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
    getText() {
      this.descriptionFull = !this.descriptionFull;
    },
  },
};
</script>
