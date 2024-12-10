import {defineStore} from "pinia"

const useBooksStore = defineStore('books',{
state: ()=> ({
    books:[],
}),
getters:{},
actions: {
    addBook(book){
        return this.books.push('book')
    },
    extractBook(book){
        return this.books.pop('book')
    }
}

})

export default useBooksStore