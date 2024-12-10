<template>
<div class="p-10 bg-red-300">
    <router-link to="/">Volver</router-link> 
    <h2> COLECCIONES</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Consequuntur nisi modi accusantium rem aliquam? Maxime, accusantium doloribus. 
        Id, libero veniam esse tempore magni nisi quisquam velit illum facilis et magnam!</p>
   
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <CardThemes />

    </div>
</div>
</template>


<script>
import CardThemes from '../components/CardThemes.vue';


export default {
    name: "Colecciones",
    components: {CardThemes},
    data(){
    },
      
}
</script>
