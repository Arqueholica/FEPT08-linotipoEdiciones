<template>
  <div class="p-10 bg-purple-300 my-1">
    <router-link
      to="/"
      class="text-sm text-black opacity-70 hover:underline hover:italic hover:opacity-100"
      >Volver</router-link
    >
    <div class="font-serif py-4">
      <h1 class="text-2xl font-bold mb-3">FASCÍCULOS</h1>
      <p class="text-4xl font-bold italic opacity-80 text-center">
        PRÓXIMAMENTE <br>
        ¡No olvides <a href="" class="underline">suscribirte</a> para estar antenta a todas nuestras novedades!
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
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
    ;
  },
  methods: {},
};
</script>
