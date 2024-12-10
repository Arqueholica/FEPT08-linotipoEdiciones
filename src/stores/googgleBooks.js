import {defineStore} from "pinia"


const useGBStore = defineStore('books',{
state: ()=> ({
    books:[],
    loading:false,
    error:false,
    errorMess: 'Lo siento, algo no ha salido bien'
}),
getters:{
    totalBooks: (state) => state.books.lenght
},
actions: {
async fetchBooks(){
    this.loading = true
    this.error = false
    try{
        const response = await fetch('https://www.googleapis.com/books/volumes?q=terror&maxResults=12')
        if (!response.ok){
            throw new Error ('Algo no ha salido bien ${response.status}: ${response.statusText}')
        }
        const data = await response.json()
        this.books = data.items.map
        
    }catch(err){
    this.error = true
    return this.errorMess
    }finally{
        this.loading = false
    }

}
}

})

export default useGBStore