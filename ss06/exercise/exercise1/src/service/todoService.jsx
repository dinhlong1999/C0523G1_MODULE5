import axios from "axios";

export const fetchData = async () =>{
    try {
        let fetchData = await axios.get("http://localhost:8080/ToDos");
        console.log(fetchData.data)
        return fetchData.data
    }catch (e) {
        alert(e)
    }
}
export const saveData = async (toDo)=>{
    try {
        let saveData = await axios.post("http://localhost:8080/ToDos",toDo);
        console.log(saveData.status)
        return saveData.status;
    }catch (e){
        alert(e)
    }
}