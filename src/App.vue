<template>
  <div class="grid grid-cols-3 grid-rows-3">
    <div class="col-span-full row-start-1">
      <div class="p-10 bg-blue-200">Yo soy tu home</div>
     
    </div>
    <div class="p-10 bg-green-200 col-span-full row-start-2">
      <nav>
        <router-link to="/colecciones"
          ><button class="px-4">Colecciones</button></router-link
        >
        <router-link to="/fasciculos"
          ><button class="px-4">Fascículos</button></router-link
        >
      </nav>
    </div> 
    <div class= "col-span-full row-start-3">
    <RouterView />
  </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>
