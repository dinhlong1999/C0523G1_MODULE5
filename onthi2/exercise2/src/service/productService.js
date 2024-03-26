import axios from "axios";

const URL_PRODUCT = "http://localhost:8080/api/product";
const URL_TYPE = "http://localhost:8080/api/typeproduct";

export const getAllType = async () => {
    try {
        return await axios.get(URL_TYPE)
    }catch (e) {
        console.log(e)
    }
}

export const getAllProduct = async (nameSearch,typeName) => {
  try {
      return await axios.get(URL_PRODUCT+ `?name_like=${nameSearch}&typeProduct.name_like=${typeName}&_sort=name`)
  }catch (e) {
      console.log(e)
  }
}

export const saveProduct = async  (product) => {
  try {
      return await axios.post(URL_PRODUCT,product)
  }catch (e) {
      console.log(e)
  }
}

export const deleteProduct = async (product) =>{
    try {
        return await axios.delete(URL_PRODUCT+`/${product.id}`)
    }catch (e) {
        console.log(e)
    }
}

export const editProduct = async (product) =>{
    try {
        return await axios.put(URL_PRODUCT+`/${product.id}`,product)
    }catch (e) {
        console.log(e)

    }
}
export const getProductByID = async (id) =>{
    try {
        return await axios.get(URL_PRODUCT+`/${id}`)
    }catch (e){
        console.log(e)
    }
}