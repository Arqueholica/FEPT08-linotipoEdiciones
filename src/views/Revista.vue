<template>
  <div class="p-10 bg-green-700 bg-opacity-50 rounded-md my-1">
    <router-link
      to="/"
      class="text-sm text-black opacity-70 hover:underline hover:italic hover:opacity-100"
      >Volver</router-link
    >
    <div class="font-serif py-4">
      <h1 class="text-2xl font-bold mb-3">LA BORDADORA</h1>
      <p class="text-xl font-bold mb-3">Tu revista literaria de confianza</p>
      <p class="text-lg italic opacity-80">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
        nisi modi accusantium rem aliquam? Maxime, accusantium doloribus. Id,
        libero veniam esse tempore magni nisi quisquam velit illum facilis et
        magnam!
      </p>
    </div>

    <div class="grid grid-cols-3 gap-4">
      
        <!-- GALERÍA IMÁGENES Y LINKS -->

        <div>
          <a class="relative rounded-xl overflow-hidden" href="">
            <div class="aspect-w-12 aspect-h-7 rounded-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/29529568/pexels-photo-29529568/free-photo-of-boles-de-massa-xineses-tradicionals-amb-salsa-de-soja.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                class="rounded-xl w-full object-cover opacity-80 hover:scale-110 hover:opacity-100 transition-all ease-in-out"
              />
            </div>
            <div class="absolute bottom-0 start-0 end-0 p-2">
              <div
                class="text-md text-serif font-bold text-black rounded-lg bg-gradient-to-tr from-slate-400 to-transparent p-4 md:text-xl dark:bg-neutral-800 dark:text-neutral-200"
              >
                Lorem Ipsum Fortísimo
              </div>
            </div>
          </a>
        </div>

        <div>
          <a class="relative rounded-xl overflow-hidden" href="">
            <div class="aspect-w-12 aspect-h-7 rounded-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/29683927/pexels-photo-29683927/free-photo-of-arquitectura-de-pati-historic-a-arequipa-peru.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                class="rounded-xl w-full object-cover hover:scale-110 transition-all ease-in-out"
              />
            </div>
            <div class="absolute bottom-0 start-0 end-0 p-2">
              <div
                class="text-md font-semibold text-black rounded-lg bg-gradient-to-tr from-slate-600 to-transparent p-4 md:text-xl dark:bg-neutral-800 dark:text-neutral-200"
              >
               Lorem Ipsum Fortísimo
              </div>
            </div>
          </a>
        </div>

        <div>
          <a class="relative rounded-xl overflow-hidden" href="">
            <div class="aspect-w-12 aspect-h-7 rounded-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/29715958/pexels-photo-29715958/free-photo-of-dona-fent-fotos-a-la-platja.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
                class="rounded-xl w-full object-cover hover:scale-110 transition-all ease-in-out"
              />
            </div>
            <div class="absolute bottom-0 start-0 end-0 p-2">
              <div
                class="text-md font-semibold text-black rounded-lg bg-gradient-to-tr from-slate-600 to-transparent p-4 md:text-xl dark:bg-neutral-800 dark:text-neutral-200"
              >
               Lorem Ipsum Fortísimo
              </div>
            </div>
          </a>
        </div>

        <div>
          <a class="relative rounded-xl overflow-hidden" href="">
            <div class="aspect-w-12 aspect-h-7 rounded-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/29529568/pexels-photo-29529568/free-photo-of-boles-de-massa-xineses-tradicionals-amb-salsa-de-soja.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                class="rounded-xl w-full object-cover hover:scale-110 transition-all ease-in-out"
              />
            </div>
            <div class="absolute bottom-0 start-0 end-0 p-2">
              <div
                class="text-md font-semibold text-black rounded-lg bg-gradient-to-tr from-slate-600 to-transparent p-4 md:text-xl dark:bg-neutral-800 dark:text-neutral-200"
              >
               Lorem Ipsum Fortísimo
              </div>
            </div>
          </a>
        </div>


        <div>
          <a class="relative rounded-xl overflow-hidden" href="">
            <div class="aspect-w-12 aspect-h-7 rounded-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/29715958/pexels-photo-29715958/free-photo-of-dona-fent-fotos-a-la-platja.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
                class="rounded-xl w-full object-cover hover:scale-110 transition-all ease-in-out"
              />
            </div>
            <div class="absolute bottom-0 start-0 end-0 p-2">
              <div
                class="text-md font-semibold text-black rounded-lg bg-gradient-to-tr from-slate-600 to-transparent p-4 md:text-xl dark:bg-neutral-800 dark:text-neutral-200"
              >
               Lorem Ipsum Fortísimo
              </div>
            </div>
          </a>
        </div>
        
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Revista",
  data() {
    return {};
  },
};
</script>
