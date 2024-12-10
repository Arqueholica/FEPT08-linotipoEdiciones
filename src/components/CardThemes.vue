<template>
    <div v-for="tema in temas" :key="tema" @click.prevent='verLibros(tema)' class="bg-white p-10 m-1 border-2 border-black rounded-md text-serif justify-items-center">
        <img :src="tema.imagen" class="object-cover pb-2"></img>
        <h2 class="font-bold text-xl">{{tema.título}}</h2>
        <p> {{ tema.descripción }}</p>
    </div>
    <div>
        <CardBooks />
    </div>
   
</template>


<script>
import CardBooks from './CardBooks.vue';



export default {
    name: "CardThemes",

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

}
</script>
