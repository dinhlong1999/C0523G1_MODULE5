import * as customerTypeService from "../../service/customerTypeService"
import * as customerService from "../../service/customerService"
import {useEffect, useState} from "react";
export function Customers() {
    const [customers,setCustomer] = useState([]);
    const [typeCustomers,setTypeCustomer] = useState();
    useEffect(()=>{
        getDataCustomers();
        getDataCustomerType()
    },[])

    const getDataCustomers = async () =>{
        let result = await customerService.getAll();
        console.log(result)
        setCustomer(result);
    }

    const getDataCustomerType = async () =>{
        let resultType = await customerTypeService.getAllTypeCustomer();
        setTypeCustomer(resultType);
    }
    return (
        <div className="container-fluid">
            <h1 id="bd" className="h3 mb-2 text-gray-800">CUSTOMER</h1>
            <div className="card-body">
                <div className="table-responsive" style={{overflowX:"visible"}}>
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                        <tr>
                            <th>N0.</th>
                            <th>Name</th>
                            <th>Birthday</th>
                            <th>Address</th>
                            <th>Gender</th>
                            <th>Phone number</th>
                            <th>Room rented</th>
                            <th>Type customer</th>
                            <th colSpan="2">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {customers.map((customer,index)=>
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{customer.name}</td>
                                <td>{customer.birthday}</td>
                                <td>{customer.address }</td>
                                <td>{customer.gender === 1 ? "Male":"Female"}</td>
                                <td>{customer.phoneNumber}</td>
                                <td>{customer.roomRented}</td>
                                <td>{customer.customerType.name}</td>
                                <td><a className="btn btn-outline-info" href="#" role="button">Edit</a></td>
                                <td>
                                    <button type="button" className="btn btn-outline-danger" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal">
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                         aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">CONFIRM DELETE</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <b style={{color:"red"}}>Are you sure you want to delete?</b>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close
                                    </button>
                                    <button type="button" className="btn btn-outline-primary">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}