<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <!-- HERO SECTION CON LLAMADAS A ACCIÓN -->
    <div
      class="col-span-full h-full my-2 mx-1 py-2 px-4 bg-[#750016] bg-opacity-30 border-2 border-black rounded-lg shadow-lg shadow-slate-300"
    >
      <Carrousel />
    </div>

    <!-- TRES SECCIONES QUE SE QUIERAN DESTACAR (incluir ofertas de temporada) -->

    <router-link to="/colecciones/Historia">
      <div class="cardsHome col-start-1">
        
        <img
          src="../assets/Historia.png"
          class="absolute top-0 left-0 w-full h-full object-fill opacity-50 hover:opacity-80 transition-all ease-in-out duration-300"
        />
        <div class="absolute top-6 left-6 text-white p-1  bg-black bg-opacity-40 rounded-md border-2 border-white">
        <h4 class="font-bold text-xl font-serif">COLECCIÓN HISTORIA</h4>
        <p class="italic font-serif text-sm"> El cotilleo del ayer para entender el hoy</p>
        </div>
        </div
    ></router-link>

    <router-link to="/revista">
      <div class="cardsHome col-start-2">
        <img
          src="../assets/PortadaRev.jpg"
          class="absolute top-0 left-0 w-full h-full object-fill opacity-100 hover:scale-110 transition-all ease-in-out duration-300"
        />

        </div
    >
      </router-link
    >

    <router-link to="/autoras"
      ><div
        class="cardsHome col-start-3"
      >
            <img
          src="https://www.montblanc.com/content/images/cms/ycm/resource/blob/758374/ccd8b08df799b022eb7dd2682fe7fcff/austen-clp-01-videocover-1920x1080-d-data.png/w1535.jpg"
          class="absolute top-0 left-0 w-full h-full object-cover opacity-50 hover:opacity-100 transition-all ease-in-out duration-300"
        />
        <h4 class="absolute bottom-6 right-6 text-white p-1 font-bold font-serif text- bg-black bg-opacity-40 rounded-md border-2 border-white">AUTORA DEL MES</h4>
        </div
    ></router-link>

    <!-- ANIMAR A LAS AUTORAS A CONTACTAR CON NOSOTRAS -->

    <div
      class="col-span-full m-2 bg-orange-600 bg-opacity-50 rounded-md border-2 border-gray-400 shadow-md shadow-slate-300"
    >
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
