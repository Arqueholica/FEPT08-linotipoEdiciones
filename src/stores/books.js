import {defineStore} from "pinia"

const userBooksStore = defineStore('book',{
state: ()=> ({
    books:[],
}),
getters:{},
actions: {
    addBook(){
        return this.books.push('book')
    }
}

})

export default userBooksStore