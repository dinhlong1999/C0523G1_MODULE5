import axios from "axios";

export const fetchData = async () =>{
    try {
        let fetch = await axios.get("http://localhost:8080/book")
        return fetch.data;
    }catch (e){
        console.log(e)
    }
}
export const addLibrary = async (library) =>{
    try {
        let save = await axios.post("http://localhost:8080/book",library)
        return save.status;
    }catch (e) {
        console.log(e)
    }
}
export const getLibraryById = async (libraryID) =>{
    try {
        let result = await axios.get(`http://localhost:8080/book/${libraryID}`)
        return result.data
    }catch (e) {
        console.log(e)
    }
}
export const editLibrary = async (book) =>{
    try {
       return await axios.put(`http://localhost:8080/book/${book.id}`,book)

    }catch (e){
        console.log(e)
    }
}
export const deleteBook = async (id) =>{
    try {
        return await axios.delete(`http://localhost:8080/book/`+id)
    }catch (e){
        console.log(e)
    }
}