import {defineStore} from "pinia"

const useBooksStore = defineStore('books',{
state: ()=> ({
    books:[],
    loading:false,
    error:false,
    errorMess: 'Lo siento, algo no ha salido bien',
    tema:''
}),
getters:{ 
    totalBooks: (state) => state.books.length
},
actions: {
    addBook(book){
        return this.books.push('book')
    },
    extractBook(book){
        return this.books.pop('book')
    },
    async fetchBooks(){
        this.loading = true
        this.error = false
    
        try{
            const response = await fetch(
                'https://www.googleapis.com/books/volumes?q=${tema}&maxResults=12')
            if (!response.ok){
                throw new Error ('Algo no ha salido bien ${response.status}: ${response.statusText}')
            }
            const data = await response.json()
            this.books = data.items
            
        }catch(err){
        this.error = true
        return this.errorMess
        }finally{
            this.loading = false
        }
    
    }
}

})

export default useBooksStore