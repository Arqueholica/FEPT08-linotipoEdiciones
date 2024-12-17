<template>
  <div class="relative overflow-hidden">

    <!-- SLIDES CARDS -->
    <div class="flex relative w-full h-[400px] border-2 border-gray-500 rounded-lg ">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="flex-shrink-0 w-full h-full transition-all duration-700"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >

      <!-- IMAGEN -->
        <div class="relative w-full h-full object-cover">
          <img
            :src="slide.image" :alt="slide.title" class="object-cover w-full h-full opacity-40 rounded-md"
          />

      <!-- TEXTO -->
          <div
            class="absolute top-1/4 left-16 p-6 border-2 border-gray-500 bg-slate-200 bg-opacity-50 rounded-lg shadow-md shadow-gray-500">
            <h1 class="text-2xl font-bold text-center">{{ slide.title }}</h1>
            <br>
            <p class="text-xl text-center italic">{{ slide.text }}</p>
          </div>

      <!-- CALL TO ACTION -->
          <div class="absolute bottom-4 right-4">
            <button
              @click="navigateTo(slide.link)"
              class="px-4 py-2 bg-slate-200 border-2 border-slate-300 text-black rounded-lg hover:bg-slate-400"
            >
              {{ slide.buttonText }}
            </button>
          </div>
        </div>
      </div>
    </div>


    <!-- BOTONES CARROUSEL GENERAL -->
    <div
      class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
    >
      <button
        v-for="(slide, index) in slides"
        :key="index"
        @click="currentSlide = index"
        :class="{
          'w-3 h-3 rounded-full bg-slate-200': index === currentSlide,
          'w-3 h-3 rounded-full bg-gray-400': index !== currentSlide,
        }"
      ></button>
    </div>


  </div>
</template>

<script>
export default {
  name: "Carrousel",
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          image: "../src/assets/LibreríaCute.jpeg",
          title: "Slide 1",
          title: "¿AÚN NO SABES QUÉ LEER...?",
          text: "¡Descubre nuestras colecciones!",
          buttonText: "Más...",
          link: "/Colecciones",
        },
        {
          image: "../src/assets/DonesCarrousel.png",
          title: "UNA MIRADA PERSONAL",
          text: "Conoce a nuestras autoras",
          buttonText: "Anímate",
          link: "/Autoras",
        },
        {
          image: "../src/assets/HalloweenHouse.jpg",
          title: "🎃 THIS IS HALLOWEEN 🎃",
          text: "¡Los mejores libros de terror te esperan! ",
          buttonText: "¿Te atreves...?",
          link: "/Colecciones/Terror",
        },
      ],
    };
  },
  mounted() {
    this.startSlide();
  },
  methods: {
    navigateTo(link) {
      this.$router.push(link);
    },
    startSlide() {
      this.slideInterval = setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      }, 4000);
    },
  },
};
</script>
