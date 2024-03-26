import axios from "axios";

const URL_CUSTOMERS = "http://localhost:8080/api/customers/";

// export const getAll = async (nameSearch) => {
//     try {
//         let result = await axios.get(URL_CUSTOMERS + `?name_like=${nameSearch}`)
//         return result.data;
//     } catch (e) {
//         console.log(e)
//     }
// }
export const getAll = async (page,nameSearch,typeName) => {
    try {
        return await axios.get(URL_CUSTOMERS + `?name_like=${nameSearch}&typeCustomers.name_like=${typeName}`+`&_page=${page}&_limit=5&_sort=id&_order=desc`);
    } catch (e) {
        console.log(e)
    }
}
export const saveCustomer = async (customer) => {
    try {
        return await axios.post(URL_CUSTOMERS, customer);

    } catch (e) {
        console.log(e)
    }
}
export const customerByID = async (customerID) => {
    try {
        let customer = await axios.get(URL_CUSTOMERS + customerID)
        return customer.data;
    } catch (e) {
        console.log(e)
    }
}
export const editCustomer = async (customer) => {
    try {
        return await axios.put(URL_CUSTOMERS + customer.id, customer)
    } catch (e) {
        console.log(e)
    }
}
export const deleteCustomer = async (customer) => {
    try {
        return await axios.delete(URL_CUSTOMERS + customer.id)
    } catch (e) {
        console.log(e)
    }
}