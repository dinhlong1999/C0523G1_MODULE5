import axios from "axios";

 const URL_CUSTOMERS ="http://localhost:8080/customers";

export const getAll = async () =>{
    try {
        let result = await axios.get(URL_CUSTOMERS)
        return result.data;
    }catch (e){
        console.log(e)
    }
}

