<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <!-- HERO SECTION CON LLAMADAS A ACCIÓN -->
    <div
      class="col-span-full h-full p-8 border-2 bg-[#750016] bg-opacity-10 border-black rounded-lg m-1"
    >
      <Carrousel />
    </div>

    <!-- TRES SECCIONES QUE SE QUIERAN DESTACAR (incluir ofertas de temporada) -->

    <router-link to="/colecciones/Historia">
      <div
        class="h-[300px] w-full col-start-1 bg-red-200 p-9 m-2 justify-self-center"
      >
        Un tema al azar ahora mismo
      </div></router-link
    >

    <router-link to="/revista">
      <div
        class="h-[300px] w-full col-start-2 bg-red-200 p-10 m-2 justify-self-center"
      >
        Soy un post guay de la revista
      </div></router-link
    >

    <router-link to="/autoras"
      ><div
        class="h-[300px] w-full col-start-3 bg-red-200 p-10 m-2 justify-self-center"
      >
        Soy la autora destacada
      </div></router-link
    >

    <!-- ANIMAR A LAS AUTORAS A CONTACTAR CON NOSOTRAS -->

    <div class="col-span-full m-2 bg-orange-200">
      <div class="flex flex-col py-5 px-10 justify-self-center">
        <h6 class="py-2 text-center text-xl font-bold font-serif">
          ¿Quieres ser una de las nuestras?
        </h6>
        <p class="p-2 border-2">
          1. Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          2. Enim nesciunt officia eaque similique esse vero, quia perferendis
          provident, voluptatum, voluptate ipsa?<br />
          3. Iure maiores laborum neque a accusantium? Id, sunt quae.
        </p>
        <button class="border-2 p-2 rounded-lg">Más info</button>
      </div>
    </div>
  </div>
</template>

<script>
import useCounterStore from "../stores/counter";
import Carrousel from "../components/Carrousel.vue";

export default {
  name: "Home",
  components: { Carrousel },
  computed: {
    counter() {
      return useCounterStore();
    },
  },
  data() {
    return {};
  },
};
</script>
