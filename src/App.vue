<template>
  <!-- TÍTULO CON LOGO + ENLACE EN LOGO (HOME) -->
  <header class="p-4 bg-[#B44A1C]">
    <h1 class="flex items-center justify-center text-white border-4 rounded-md shadow-lg py-2 font-serif text-4xl lg:text-8xl">
      Linotipo
      <router-link to="/"
        ><img src="./assets/LogoLE.svg" class="bg-white rounded-full size-10 lg:size-40 mx-2"
      /></router-link>
      Ediciones
    </h1>
  </header>

  <!-- BARRA DE NAVEGACIÓN -->

  <!-- BOTONCITOS TÍPICOS -->
  <div class="p-4 bg-green-200 text-lg font-bold font-serif">
    <nav class="hidden md:flex justify-between items-center">
      <div>
        <router-link to="/colecciones"
          ><button class="px-2 hover:bg-green-100 ">
            Colecciones
          </button></router-link
        >
        <router-link to="/fasciculos"
          ><button class="px-2 hover:bg-green-100">
            Fascículos
          </button></router-link
        >
        <button class="px-2 hover:bg-green-100">Autoras</button>
        <button class="px-2 hover:bg-green-100">Revista</button>
      </div>

      <!-- SEARCH BAR -->
      <div class="flex justify-center items-center">
        <div class="relative">
          <input
            type="search"
            class="border-2 border-black border-opacity-45 rounded-lg shadow-md p-1 h-[40px] w-[100px] bg-slate-100 focus:w-[200px] lg:focus:w-[400px] transition-all"
            placeholder="Dime"
          />
          <button
            class="absolute right-2 top-2 px-1 border-l-2 border-black"
            type="submit"
          >
            <img src="../src/assets/search.svg" />
          </button>
        </div>

        <!-- ICONOS BONICOS -->
        <div class="flex justify-center items-center">
          <router-link to="/user"
            ><button class="px-4">
              <img src="./assets/user.svg" class="size-8" /></button
          ></router-link>
          <router-link to="/user"
            ><button class="px-4">
              <img src="./assets/heartEmpty.svg" class="size-8" /></button
          ></router-link>
          <router-link to="/user"
            ><button class="px-4">
              <img src="./assets/bagEmpty.svg" class="size-8" /></button
          ></router-link>
        </div>
      </div>
    </nav>
  </div>

  <!-- MENÚ MÓVIL -->
  <div class="flex md:hidden justify-between items-center">
    <button @click="toggleMenu" class="hover:outline outline-green-500"><img src="../src/assets/hamburger.svg" class="size-4"/></button>
  <div v-if="isOpen" class="bg-green-200 absolute top-20 left-0 w-full md:hidden"><img @click="closeMenu" src="../src/assets/close.svg" class="absolute left-80 size-6 md:hidden"/>
    <router-link to="/colecciones"
      ><button class=" block p-2 hover:bg-green-100">Colecciones</button></router-link
    >
    <router-link to="/fasciculos"
      ><button class="block p-2 hover:bg-green-100">Fascículos</button></router-link
    >
    <button class="block p-2 hover:bg-green-100">Autoras</button>
    <button class="block p-2 hover:bg-green-100">Revista</button>
  </div>
</div>

  <!-- ZONA DE EXPOSICIÓN DE VIEWS -->

  <RouterView />

  <!-- FOOTER CON INFO GENERAL -->

  <footer class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-1">
    <div class="col-span-1 bg-blue-200">
      <h6 class="m-2 font-bold text-center">CONTACTO</h6>
      <input
        class="m-2 border-2 border-black rounded-lg border-opacity-45"
        type="text"
        placeholder="María Josefa"
      />
      <input
        class="w-[260px] m-2 border-2 border-black rounded-lg border-opacity-45"
        type="email"
        placeholder="mariajosefa@mail.com"
      />
      <textarea
        class="m-2 p-1 border-2 border-black rounded-lg border-opacity-45 w-[400px] h-[100px]"
        placeholder="Escribe lo que necesites saber"
      />
    </div>

    <div class="col-span-1 bg-blue-200">
      <h6 class="m-2 font-bold text-center">MAPA DE LA WEB</h6>
      <ul class="mx-2">
        <li>Home</li>
        <li>Colecciones</li>
        <li>Fascículos</li>
        <li>Autoras</li>
        <li>Revista</li>
      </ul>
    </div>

    <div class="col-span-1 bg-blue-200">
      <h6 class="m-2 font-bold text-center">SÍGUENOS</h6>
      <div class="flex justify-evenly">
        <p>
          <a href=" https://www.instagram.com/" target="_blank">Instagram </a>
        </p>
        <p><a href="https://www.facebook.com/" target="_blank">Facebook</a></p>
        <p><a href="https://www.tiktok.com/" target="_blank">TikTok</a></p>
      </div>
      <div class="flex flex-col justify-self-center my-4">
        <p class="my-2">¿Quieres saber más de literatura?</p>
        <button
          class="border-2 border-black rounded-full font-semibold text-lg"
        >
          👉🏻 ¡Suscríbete! 👈🏻
        </button>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
    isOpen:false,
  };
  },
  methods:{
    toggleMenu(){
      this.isOpen = !this.isOpen
    },
    closeMenu(){
      this.isOpen = false
    }
  },
};
</script>
