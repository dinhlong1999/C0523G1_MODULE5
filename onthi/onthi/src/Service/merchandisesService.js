import axios from "axios";

const URL_MERCHANDISES = "http://localhost:8080/merchandises/";
const URL_TYPE = "http://localhost:8080/type/";
export const getAllMerchandises = async (nameSearch,nameTypeSearch) => {
  try {
      return await axios.get(URL_MERCHANDISES+`?name_like=${nameSearch}&type.name_like=${nameTypeSearch}`)
  }catch (e){
      console.log(e);
  }
}
export const getAllType = async () =>{
    try {
        return await axios.get(URL_TYPE);
    }catch (e) {
        console.log(e)
    }
}
export const deleteMerchandises = async (id) =>{
    try {
        return await axios.delete(URL_MERCHANDISES+id)
    }catch (e) {
        console.log(e)
    }
}