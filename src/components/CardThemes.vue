<template>
    <div
      v-for="tema in temas"
      :key="tema.título"
      @click.prevent="verLibros(tema)"
      class="w-[300px] h-auto border-2 border-black rounded-md shadow-lg bg-white hover:scale-105 transition-all">
      <img :src="tema.imagen" :alt="tema.título"class="w-full h-[150px] object-cover" />
      <div class="p-4 text-gray-80 bg-teal-50">
        <h2 class="font-bold text-xl mb-2">{{ tema.título }}</h2>
        <p class="text-md text-center mb-4">{{ tema.descripción }}</p>
        <p class="text-black place-self-end text-sm opacity-80 hover:italic hover:opacity-100">
          <router-link :to="`/colecciones/${tema.título}`"> Más...</router-link></p>
      </div>
    </div>
 
   
</template>

<script>

import useBooksStore from "../stores/booksProva";


export default {
    name: "CardThemes",
    computed: {
    books(){
      return useBooksStore()
    },
    booksList(){
      return this.books.books
    },
    },
    data(){
        return{
            temas:[
                {título: 'Terror',
                imagen: './src/assets/Terror.png',
                descripción:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                },
                {título:'Historia',
                imagen: './src/assets/Historia.png',
                descripción:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                }, 
                {título:'Fantasía',
                imagen: './src/assets/Fantasia.png',
                descripción:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                }, 
                {título:'Romántica',
                imagen: './src/assets/Romance.png',
                descripción:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                },
                {título:'Mujeres',
                imagen: './src/assets/Mujeres.png',
                descripción:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                },
                {título:'Clásicos',
                imagen: './src/assets/Classicos.png',
                descripción:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                }
            ]
                
        } 
    },
    methods: {
    addNewBook() {
      return this.books.addBook("book");
    },
    takeLastBook(){
      return this.books.extractBook('book')
    } 

  },

}
</script>
