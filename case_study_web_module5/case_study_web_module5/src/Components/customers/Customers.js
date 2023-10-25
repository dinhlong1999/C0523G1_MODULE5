import * as customerTypeService from "../../service/customerTypeService"
import * as customerService from "../../service/customerService"
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import {DeleteCustomer} from "./DeleteCustomer";

export function Customers() {
    const [customers, setCustomer] = useState([]);
    const [typeCustomers, setTypeCustomer] = useState();
    const [show, setShow] = useState(false);
    const [select, setSelect] = useState(null);
    useEffect(() => {
        getDataCustomers();
        getDataCustomerType()
    }, [])

    const getDataCustomers = async () => {
        let result = await customerService.getAll();
        console.log(result)
        setCustomer(result);
    }

    const getDataCustomerType = async () => {
        let resultType = await customerTypeService.getAllTypeCustomer();
        setTypeCustomer(resultType);
    }

    const showModal = async (customer) => {
        setSelect(customer);
        setShow(true);
    }
    const closeModal = async () => {
        getDataCustomers();
        setSelect(null);
        setShow(false);
    }


    return (
        <>
            <div className="container-fluid">
                <h1 id="bd" className="h3 mb-2 text-gray-800">CUSTOMER</h1>
                <NavLink to="/customers/create">
                    <button type="button" className="btn btn-outline-success">Create customer</button>
                </NavLink>
                <div className="card-body">
                    <div className="table-responsive" style={{overflowX: "visible"}}>
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
                            {customers.map((customer, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.birthday}</td>
                                    <td>{customer.address}</td>
                                    <td>{customer.gender === 1 ? "Male" : "Female"}</td>
                                    <td>{customer.phoneNumber}</td>
                                    <td>{customer.roomRented}</td>
                                    <td>{customer.customerType.name}</td>
                                    <td>
                                        <NavLink to={`/customers/edit/${customer.id}`}>
                                            <button type="button" className="btn btn-outline-warning">Edit</button>
                                        </NavLink>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-outline-danger"
                                                onClick={() => showModal(customer)}>
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
                                        <b style={{color: "red"}}>Are you sure you want to delete?</b>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-outline-secondary"
                                                data-bs-dismiss="modal">Close
                                        </button>
                                        <button type="button" className="btn btn-outline-primary">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DeleteCustomer
                show={show}
                closeModal={closeModal}
                select={select}
            >
            </DeleteCustomer>
        </>
    )
}