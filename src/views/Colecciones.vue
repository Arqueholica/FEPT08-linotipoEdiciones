<template>
  <div class="p-10 bg-slate-100 my-1">
    <router-link to="/" class="text-sm text-black opacity-70 hover:underline hover:italic hover:opacity-100">Volver</router-link>
   <div class="font-serif py-4">
    <h1 class="text-2xl font-bold mb-3">COLECCIONES</h1>
    <p class="text-lg italic opacity-80">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
      nisi modi accusantium rem aliquam? Maxime, accusantium doloribus. Id,
      libero veniam esse tempore magni nisi quisquam velit illum facilis et
      magnam!
    </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <CardThemes />
    </div>
  </div>
</template>

<script>
import CardThemes from "../components/CardThemes.vue";

export default {
  name: "Colecciones",
  components: { CardThemes },
  data() {},
};
</script>
