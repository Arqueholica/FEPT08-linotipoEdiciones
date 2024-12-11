<template>
    <div v-for="tema in temas" :key="tema" @click.prevent='verLibros(tema)' class="bg-white p-10 m-1 border-2 border-black rounded-md text-serif justify-items-center">
        <img :src="tema.imagen" class="object-cover pb-2"></img>
        <h2 class="font-bold text-xl">{{tema.título}}</h2>
        <p> {{ tema.descripción }}</p>
        <button><router-link :to="`/colecciones/${tema.título}`">Más...</router-link></button>
       <p v-for="(book, i) in booksList" :key="i">{{ book }}</p>
      <p><button @click="addNewBook">Libro Nuevo</button></p>
      <p><button @click="takeLastBook">Quitar último</button></p>
    </div>
    <div>
         
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
                imagen: 'https://via.placeholder.com/150/FFC0CB/FFFFFF?text=Terror',
                descripción:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                },
                {título:'Historia',
                imagen: 'https://via.placeholder.com/150/FFC0CB/FFFFFF?text=Historia',
                descripción:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                }, 
                {título:'Fantasía',
                imagen: 'https://via.placeholder.com/150/FFC0CB/FFFFFF?text=Fantasia',
                descripción:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                }, 
                {título:'Romántica',
                imagen: 'https://via.placeholder.com/150/FFC0CB/FFFFFF?text=Romántica',
                descripción:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                },
                {título:'Mujeres',
                imagen: 'https://via.placeholder.com/150/FFC0CB/FFFFFF?text=Mujeres',
                descripción:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                },
                {título:'Clásicos',
                imagen: 'https://via.placeholder.com/150/FFC0CB/FFFFFF?text=Clasicos',
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
