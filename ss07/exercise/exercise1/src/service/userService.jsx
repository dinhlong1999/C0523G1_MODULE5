import axios from "axios";
const URL = "http://localhost:8080/users"

export const getData = async ()=>{
    try {
        let result = await axios.get(URL);
        return result.data;
    }catch (e){
        console.log(e)
    }
}
export const deleteUser = async (id) =>{
    try {
        return await  axios.delete(URL+id);

    }catch (e){
        console.log(e)
    }
}