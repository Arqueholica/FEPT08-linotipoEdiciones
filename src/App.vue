<template>
  <!-- TÍTULO CON LOGO + ENLACE EN LOGO (HOME) -->
  <header
    class="p-4 bg-[#750016] bg-opacity-80 shadow-md shadow-slate-300 rounded-sm mb-1"
  >
    <h1 class="headerTitle">
      Linotipo
      <router-link to="/"
        ><img
          src="./assets/LogoLE.svg"
          class="bg-white rounded-full size-10 lg:size-40 mx-2"
      /></router-link>
      Ediciones
    </h1>
  </header>

  <!-- BARRA DE NAVEGACIÓN -->

  <!-- BOTONCITOS TÍPICOS -->
  <div
    class="py-2 px-1 mx-1 border-2 border-black rounded-lg shadow-md text-md font-bold font-serif"
  >
    <nav class="flex justify-between items-center">
      <div>
        <router-link to="/colecciones"
          ><button class="menuButtons">Colecciones</button></router-link
        >
        <router-link to="/fasciculos"
          ><button class="menuButtons">Fascículos</button></router-link
        >
        <router-link to="/autoras"
          ><button class="menuButtons">Autoras</button></router-link
        >
        <router-link to="/revista">
          <button class="menuButtons">
            Revista "La Bordadora"
          </button></router-link
        >
      </div>

      <!-- SEARCH BAR -->
      <div class="flex justify-center items-center">
        <div class="relative">
          <input
            type="search"
            class="border-2 border-black border-opacity-45 rounded-lg shadow-md p-1 h-[35px] w-[100px] bg-slate-100 focus:w-[200px] lg:focus:w-[400px] transition-all"
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
  <!-- <div class="flex md:hidden justify-between items-center">
    <button @click="toggleMenu" class="hover:outline outline-black">
      <img src="../src/assets/hamburger.svg" class="size-4" />
    </button>
    <div
      v-if="isOpen"
      class="bg-slate-500 absolute top-20 left-0 w-full md:hidden"
    >
      <img
        @click="closeMenu"
        src="../src/assets/close.svg"
        class="absolute left-80 size-6 md:hidden"
      />
      <router-link to="/colecciones"
        ><button class="block p-2 hover:underline-2 hover">
          Colecciones
        </button></router-link
      >
      <router-link to="/fasciculos"
        ><button class="block p-2 hover:underline-2 hover">
          Fascículos
        </button></router-link
      >
      <button class="block p-2 hover:underline-2 hover">Autoras</button>
      <button class="block p-2 hover:underline-2 hover">Revista</button>
    </div>
  </div> -->

  <!-- ZONA DE EXPOSICIÓN DE VIEWS -->

  <RouterView />

  <!-- FOOTER CON INFO GENERAL -->

  <footer class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-1">
    <div class="footer">
      <h6 class="footerTitle">CONTACTO</h6>
      <input
        class="flex m-2 p-1 border-2 border-black rounded-lg border-opacity-45"
        type="text"
        placeholder="María Josefa"
      />
      <input
        class="flex m-2 p-1 border-2 border-black rounded-lg border-opacity-45"
        type="email"
        placeholder="mariajosefa@mail.com"
      />
      <textarea
        class="flex m-2 py-2 px-3 border-2 border-black rounded-lg border-opacity-45"
        placeholder="Escribe lo que necesites saber"
      />
      <button
        class="m-2 px-2 bg-slate-100 border-2 border-black rounded-lg border-opacity-45 hover:scale-90"
        type="submit"
      >
        Enviar
      </button>
    </div>

    <div class="footer">
      <h6 class="footerTitle">MAPA DE LA WEB</h6>
      <ul class="mx-2 text-center">
        <router-link to="/"><li>Home</li></router-link>
        <router-link to="/colecciones"><li>Colecciones</li></router-link>
        <router-link to="/fasciculos"><li>Fascículos</li></router-link>
        <router-link to="/autoras"><li>Autoras</li></router-link>
        <router-link to="/revista"><li>Revista</li></router-link>
      </ul>
    </div>

    <div class="footer">
      <h6 class="footerTitle">SÍGUENOS</h6>
      <div class="flex justify-evenly">
        <p>
          <a
            href=" https://www.instagram.com/"
            target="_blank"
            class="flex flex-col items-center"
            ><i class="fab fa-instagram text-2xl"></i>Instagram
          </a>
        </p>
        <p>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            class="flex flex-col items-center"
            ><i class="fab fa-facebook text-2xl"></i>Facebook</a
          >
        </p>
        <p>
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            class="flex flex-col items-center"
            ><i class="fab fa-tiktok text-2xl"></i>TikTok</a
          >
        </p>
      </div>
      <div class="flex flex-col justify-self-center my-4">
        <p class="my-2">¿Quieres saber más de literatura?</p>
        <button
          class="border-2 border-black bg-slate-400 rounded-full font-semibold text-lg hover:bg-slate-600 hover:scale-110 transition-all"
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
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
  },
};
</script>
