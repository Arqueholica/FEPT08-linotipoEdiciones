<template>
  <div class="p-10">
    <div>
      <div v-if="loading" class="text-gray-500">Cargando...</div>
      <div v-if="error" class="text-red-500">Error al cargar el libro.</div>

      <router-link
        :to="`/colecciones/${tema}`"
        class="text-sm text-black opacity-70 hover:underline hover:italic hover:opacity-100"
        >Volver</router-link
      >

      <!-- CARD DEL LIBRO -->
      <div
        v-if="book"
        class="grid grid-cols-3 gap-x-4 p-10 w-full h-full border-2 rounded-md shadow-lg bg-white"
      >
        <!-- IMAGEN PORTADA -->
        <div class="flex flex-col items-center justify-between">
          <img
            :src="
              book.volumeInfo?.imageLinks?.large ||
              book.volumeInfo?.imageLinks?.thumbnail
            "
            :alt="book.volumeInfo?.title"
            class="object-cover h-96 w-auto border-2 border-gray-300 rounded-md hover:scale-105 transition-all"
          />
          <a
            :href="book.volumeInfo?.previewLink"
            target="_blank"
            class="mt- underline hover:scale-105 hover:font-bold"
          >
            Vista previa
          </a>
        </div>

        <!-- DETALLES DEL LIBRO -->
        <div
          class="flex flex-col gap-y-3 text-justify p-4 text-gray-600 border-2 border-black"
        >
          <h2 class="font-bold text-xl mb-2">
            {{ book.volumeInfo?.title }}
          </h2>
          <h4 class="text-md italic mb-1">
            {{ book.volumeInfo?.authors?.join(", ") }}
          </h4>
          <p class="text-sm mb-2">
            Año de Publicación: {{ book.volumeInfo?.publishedDate }}
          </p>
          <p
            class="text-md"
            :class="{ 'line-clamp-4': !descriptionFull }"
            @click="getText"
          >
            {{ book.volumeInfo?.description }}
          </p>
          <button @click="getText">
            <i
              :class="descriptionFull ? 'fa fa-angle-up' : 'fa fa-angle-down'"
            ></i>
          </button>
          <p>
            Idiomas disponibles: {{ book.volumeInfo?.language?.toUpperCase() }}
          </p>
        </div>

        <!-- DISPONIBILIDAD, PRECIO Y ENLACES -->
        <div class="flex flex-col gap-y-3 text-gray-600">
          <h3 class="font-bold mb-2">Disponibilidad y Compra:</h3>
          <div class="border-2 border-gray-400 rounded-md p-2 w-1/2">
            <p v-if="book.saleInfo?.listPrice">
              Precio: {{ book.saleInfo?.listPrice?.amount }}
              {{ book.saleInfo?.listPrice?.currencyCode }}
            </p>
            <p v-if="book.saleInfo?.buyLink">
              <a
                :href="book.saleInfo?.buyLink"
                target="_blank"
                class="underline hover:font-bold"
                >Comprar el libro</a
              >
            </p>
          </div>
          
          <div class="flex">
          <button @click="superFav">
            <img
              src="../assets/heartEmpty.svg"
              class="size-6 place-self-start"
            /> 
          </button>
          <p class=" text-sm italic place-self-center mx-1">Añadir a Favoritos</p>
        </div>

          <div class="mb-4">
            <h4 class="font-bold mt-4">Disponibilidad en:</h4>

            <p v-if="book.accessInfo?.country">
              {{ book.accessInfo?.country }}
            </p>
          </div>
          <div v-if="book.accessInfo?.epub?.isAvailable">
            <button class="downloadButtons">
              <a :href="book.accessInfo?.epub?.acsTokenLink" target="_blank"
                >Descargar ePub</a
              >
            </button>
          </div>
          <div v-if="book.accessInfo?.pdf?.isAvailable">
            <button class="downloadButtons">
              <a :href="book.accessInfo?.pdf?.acsTokenLink" target="_blank"
                >Descargar PDF</a
              >
            </button>
          </div>
          <div v-if="book.accessInfo?.webReaderLink">
            <button class="downloadButtons">
              <a :href="book.accessInfo?.webReaderLink" target="_blank"
                >Lector en Línea</a
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useBooksStore from "../stores/booksProva";

export default {
  name: "CardSolo",
  computed: {
    bookId() {
      return this.$route.params.bookId;
    },
    tema() {
      return this.$route.params.tema;
    },
    books() {
      return useBooksStore();
    },
  },
  data() {
    return {
      book: {},
      loading: false,
      error: false,
      key: "AIzaSyBiWPwMmOICK7zTqyxqjztUtYc2x5wVKDI",
      descriptionFull: false,
      isFav: false,
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
    superFav() {
      this.addBook(), this.isFav;
    },
    addBook() {
      this.books.addBook({
        id: this.book.id,
        title: this.book.volumeInfo?.title,
        authors: this.book.volumeInfo?.authors,
        image: this.book.volumeInfo?.imageLinks?.thumbnail,
      });
    },
    isFav() {
      this.isFav = !this.isFav;
    },
  },
};
</script>
