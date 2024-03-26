import axios from "axios";

const URL_CONTRACT = "http://localhost:8081/contracts/";

export const getALlContract = async (contractNumber,currentPage) => {
    try {
        return  await axios.get(URL_CONTRACT+`?contractNumber_like=${contractNumber}&_sort=startDate&_order=asc&_page=${currentPage}&_limit=5`);
    }catch (e) {
        console.log(e)
    }
}
export const saveContract = async (contract) =>{
    try {
        return await axios.post(URL_CONTRACT,contract)
    }catch (e){
        console.log(e)
    }
}

export const getContractByID = async (id) =>{
    try {
        let result = await axios.get(URL_CONTRACT+id);
        return result.data;
    }catch (e){
        console.log(e)
    }
}

export const updateContract = async (contract) =>{
    try {
        return await axios.put(URL_CONTRACT+contract.id,contract);
    }catch (e) {
        console.log(e)
    }
}

export const deleteContract = async (contract) =>{
    try {
        return await axios.delete(URL_CONTRACT+contract.id)
    }catch (e) {
        console.log(e)
    }
}