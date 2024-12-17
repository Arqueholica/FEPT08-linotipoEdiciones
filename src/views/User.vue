<template>
  <div class="grid grid-cols-2 gap-2 p-2">
    <div class="border-2 border-gray-400 rounded-sm w-1/2">
      <h1 class="font-serif underline font-bold text-md p-2">
        FAVORITOS
      </h1>

      <div v-if="books.length" class="px-1">
        <div
          v-for="book in books" :key="book.id"  class="flex items-center gap-4 p-2 border rounded-md shadow-md mb-2 w-full" >
          <img
            :src="book.image"
            :alt="book.title"
            class="w-10 h-15 object-cover rounded-sm"/>

          <div class="flex flex-col justify-center">
            <p class="font-bold text-sm text-justify">{{ book.title }}</p>
            <p class="italic text-xs text-justify">
              {{ book.authors?.join(", ") }}
            </p>
          </div>
        </div>

        <div class="col-start-2">
          <!-- <Reader :link="$route.query.link" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Reader from "../components/Reader.vue";
import useBooksStore from "../stores/booksProva";

export default {
  name: "User",
  components: { Reader },
  computed: {
    books() {
      return useBooksStore().books;
    },
  },
  data() {
    return {};
  },
};
</script>
