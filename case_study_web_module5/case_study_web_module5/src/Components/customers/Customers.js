import * as customerTypeService from "../../service/customerTypeService"
import * as customerService from "../../service/customerService"
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import {DeleteCustomer} from "./DeleteCustomer";
import {PageList} from "../Pages";

export function Customers() {
    const [customers, setCustomer] = useState([]);
    const [typeCustomers, setTypeCustomer] = useState([]);
    const [show, setShow] = useState(false);
    const [select, setSelect] = useState(null);
    const [nameSearch,setNameSearch] = useState("");
    const [typeNameSearch,setTypeName] =useState("");
    const [currentPage,setPage] = useState(1);
    const [totalCustomer,setTotalCustomer] = useState(0)
    useEffect(() => {
        getDataCustomers();
        getDataCustomerType()
    }, [nameSearch,typeNameSearch,currentPage])

    // const getDataCustomers = async () => {
    //     let result = await customerService.getAll(nameSearch);
    //     console.log(result)
    //     setCustomer(result);
    // }

    const getDataCustomers = async () =>{
        let result = await customerService.getAll(currentPage,nameSearch,typeNameSearch);
        // const dataTemp =result.data.sort((a,b) =>{
        //     return b.id - a.id;
        // })
        setCustomer(result.data);
        setTotalCustomer(result.headers["x-total-count"])
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
                    <button type="button" className="btn btn-outline-success">Create customer</button><br/>
                </NavLink>
                <input className={"input"} type="text" placeholder="Please input name search"  onChange={event => setNameSearch(event.target.value)}/>
                {/*<input className={"input"} type="text" placeholder="Please input type name search"  onChange={event => setTypeName(event.target.value)}/>*/}
                <select className={"input"} onChange={(values) =>setTypeName(values.target.value)}>
                    <option value="">---Please choose type customer</option>
                    {typeCustomers.map((item)=>
                        <option key={item.id} value={item.name}>{item.name}</option>
                    )}
                </select>
                <div className="card-body">
                    <div className="table-responsive" style={{overflowX: "visible"}}>
                        <table className="table table-bordered table-hover" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                            <tr>
                                <th>N0.</th>
                                <th>Name</th>
                                <th>Birthday</th>
                                <th>Address</th>
                                <th>Gender</th>
                                <th>Phone number</th>
                                <th>Email</th>
                                <th>Type customer</th>
                                <th colSpan="2">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {customers.map((customer, index) =>
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{customer.name}</td>
                                    <td>{ new Date(customer.birthday).toLocaleDateString('en-US')}</td>
                                    <td>{customer.address}</td>
                                    <td>{customer.gender === 1 ? "Male" : "Female"}</td>
                                    <td>{customer.phoneNumber}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.typeCustomers.name}</td>
                                    <td>
                                        <NavLink to={`/customers/edit/${customer.id}`}>
                                            <button type="button" className="btn btn-outline-warning"><i
                                                className="fa-solid fa-pen-to-square"></i></button>
                                        </NavLink>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-outline-danger"
                                                onClick={() => showModal(customer)}>
                                            <i
                                            className="fa-solid fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/*    <li><button className={"bt"}>&laquo;</button></li>*/}
                {/*    <li className="page-item active" onClick={}><button className={"bt"}>1</button></li>*/}
                {/*    <li><button className={"bt"}>2</button></li>*/}
                {/*    <li><button className={"bt"}>3</button></li>*/}
                {/*    <li><button className={"bt"}>4</button></li>*/}
                {/*    <li><button className={"bt"}>&raquo;</button></li>*/}
                {/*</ul>*/}
            </div>
            <DeleteCustomer
                show={show}
                closeModal={closeModal}
                select={select}
            >
            </DeleteCustomer>
            <PageList
                currentPage={currentPage}
                totalCustomer={totalCustomer}
                sentPage={setPage}
            >
            </PageList>
        </>
    )
}