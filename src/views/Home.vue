<template>
  <div class="grid grid-cols-3 grid-rows-3">
    
    <!-- HERO SECTION CON LLAMADAS A ACCIÓN -->
    <div class="col-span-full row-start-1 p-20 m-2 bg-purple-200 text-center">
      SOY LA HERO SECTION QUE SERÉ UN CARROUSEL el cómo ya lo veremos
    </div>

<!-- TRES SECCIONES QUE SE QUIERAN DESTACAR (incluir ofertas de temporada) -->

    <div
      class="size-60 col-start-1 row-start-2 bg-red-200 p-10 m-2 justify-self-center"
    >
      Soy el libro más vendido
    </div>
    <div
      class="size-60 col-start-2 row-start-2 bg-red-200 p-10 m-2 justify-self-center"
    >
      Soy una novedad novedosa
    </div>
    <div
      class="size-60 col-start-3 row-start-2 bg-red-200 p-10 m-2 justify-self-center"
    >
      Soy la autora destacada
    </div>

<!-- ANIMAR A LAS AUTORAS A CONTACTAR CON NOSOTRAS -->

    <div class="col-span-full row-start-3 m-2 bg-orange-200">
      <div class="flex flex-col py-5 px-10 justify-self-center">
        <h6 class="py-2">¿Quieres ser una de las nuestras?</h6>
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
export default {
  name: "Home",
  data() {
    return {};
  },
};
</script>
