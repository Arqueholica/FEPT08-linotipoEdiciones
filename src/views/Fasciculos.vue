<template>
  <div class="p-10 bg-purple-600 bg-opacity-60 rounded-md my-1">
    <router-link
      to="/"
      class="text-sm text-black opacity-70 hover:underline hover:italic hover:opacity-100"
      >Volver</router-link
    >

    <div
      v-if="loading"
      class="text-center font-bold text-2xl p-20 animate-pulse"
    >
      Cargando...
    </div>

    <div v-if="error" class="text-center font-bold text-2xl p-20 animate-pulse">
      Error
    </div>

    <div class="font-serif py-4">
      <h1 class="text-2xl font-bold mb-3">FASCÍCULOS</h1>
      <p class="text-4xl font-bold italic opacity-80 text-center">
        PRÓXIMAMENTE <br />
        ¡No olvides <a href="" class="underline">suscribirte</a> para estar
        antenta a todas nuestras novedades!
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <!-- GRID FASCÍCULOS -->
      <div
        v-for="fasciculo in fasciculos"
        :key="fasciculo.identifier"
        class="relative w-full sm:w-[250px] h-[350px] border-2 border-slate-300 rounded-md shadow-lg"
      >
        <!-- Imagen del fascículo -->
        <img
          :src="fasciculo.coverUrl"
          :alt="fasciculo.title"
          class="absolute w-full h-full object-cover opacity-70 hover:opacity-100 hover:scale-110 transition-all"
        />
        <!-- Información sobre el fascículo -->
        <div
          class="absolute bottom-0 bg-gradient-to-t from-slate-600 to-transparent rounded-md p-1 text-white w-full capitalize"
        >
          <h2 class="font-bold text-xl text-left">
            {{ fasciculo.title || "Título no disponible" }}
          </h2>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
import useCounterStore from "../stores/counter";

export default {
  name: "Fascículos",
  computed: {
    counter() {
      return useCounterStore();
    },
  },
  data() {
    return {
      fasciculos: [],
      loading: false,
      error: false,
    };
  },
  beforeMount() {
    this.getFasc();
  },
  methods: {
    async getFasc() {
      try {
        this.loading = true;
        this.error = false;
        const response = await fetch(
          "https://archive.org/advancedsearch.php?q=collection:(historia16)&fl[]=identifier,title,cover&output=json"
        );
        if (!response.ok) {
          this.error = true;
          this.loading = false;
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        this.fasciculos = data.response.docs.map((item) => ({
          identifier: item.identifier,
          title: item.title,
          coverUrl: item.cover
            ? `https://archive.org/services/img/${item.cover}`
            : null,
        }));
      } catch (error) {
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
