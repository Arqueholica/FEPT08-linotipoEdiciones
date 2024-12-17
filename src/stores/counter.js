// este es el ejemplo a seguir marichocho 
// SIGUE EN HOME CON LA APLICACIÓN PARA VERLO

import { defineStore } from "pinia";

const useCounterStore = defineStore('counter', {
// state (similar al data en components/views)
state: ()=> ({
    count: 0,
    name:'MariCarmen',
    title: 'Josefa',
}),

// getters (se pasa el state en la arrow function para poder usar las propiedades interiores
// RECUERDA PONER RETURN CUANDO NO SEA UNA FUNCIÓN DE LÍNEA QUE TE ESTRESAS LUEGO POR NADA)

getters: {
    dobleCount: (state) =>  state.count * 2,
    multiplyfour: (state) =>  state.count * 4,
    halfCount: (state) =>  state.count / 2,
},

// actions (con THIS. se accede a las propiedades del state )

actions: {
    increment(){
        return this.count++
    },
    decrement(){
        return this.count--
    },
    restart(){
        this.count = 0
    }
},

})
export default useCounterStore