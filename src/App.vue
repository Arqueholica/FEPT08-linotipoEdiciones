<template>
  <!-- TÍTULO CON LOGO + ENLACE EN LOGO (HOME) -->

  <h1 class="px-20 py-2 flex text-8xl justify-center">
    Linotipo
    <router-link to="/"
      ><img src="./assets/LogoLE.png" class="size-40"
    /></router-link>
    Ediciones
  </h1>

  <!-- BARRA DE NAVEGACIÓN -->

  <div class="p-8 bg-green-200 text-md font-bold font-serif">
    <nav class="flex justify-between">
      <div>
      <router-link to="/colecciones"
        ><button class="px-4">Colecciones</button></router-link
      >
      <router-link to="/fasciculos"
        ><button class="px-4">Fascículos</button></router-link
      >
    </div>
    <div class="flex justify-self-center">
      <input type="search" class="border-2 border-black h-6">
      <router-link to="/user"
        ><button class="px-4"><img src="./assets/user.svg" class="size-8" /></button
      ></router-link>
      <router-link to="/user"
        ><button class="px-4"><img src="./assets/heartEmpty.svg" class="size-8" /></button
      ></router-link>
      <router-link to="/user"
        ><button class="px-4"><img src="./assets/bagEmpty.svg" class="size-8" /></button
      ></router-link>
      
    </div>
    </nav>
  </div>

  <!-- ZONA DE EXPOSICIÓN DE VIEWS -->

  <RouterView />

  <!-- FOOTER CON INFO GENERAL -->

  <footer class="grid grid-cols-3 gap-x-1">
    <div class="col-span-1 bg-blue-200">
      <h6 class="m-2 font-bold text-center">CONTACTO</h6>
      <input class="m-2" type="text" placeholder="María Josefa" />
      <input
        class="w-[260px]"
        type="email"
        placeholder="mariajosefa@mail.com"
      />
      <textarea
        class="m-2 w-[450px] h-[100px]"
        placeholder="Escribe lo que necesites saber"
      />
    </div>

    <div class="col-span-1 bg-blue-200">
      <h6 class="m-2 font-bold text-center">MAPA DE LA WEB</h6>
      <ul class="mx-2">
        <li>Home</li>
        <li>Colecciones</li>
        <li>Fascículos</li>
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
    return {};
  },
};
</script>
