import {ErrorMessage, Field, Form, Formik} from "formik";
import * as customerTypeService from "../../service/customerTypeService"
import * as customerService from  "../../service/customerService"
import * as Yup from "yup"
import {useEffect, useState} from "react";
import Header from "../header";
import Footer from "../footer";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

export function CreateCustomers (){
    const [type,setType] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        display();
    },[])

    const display = async ()=>{
        let result = await customerTypeService.getAllTypeCustomer();
        setType(result);
    }

    const saveCustomer = async (customer) => {
        customer.gender = +customer.gender
        let customerSave = {...customer,customerType:JSON.parse(customer.customerType)}
        let save = await customerService.saveCustomer(customerSave);
        if (save.status === 201){
            toast.success("Save success")
            navigate("/customers")
        }

    }


    const initValue ={
        name: "",
        birthday: "",
        address :"",
        gender:"",
        phoneNumber:"",
        roomRented:"",
        customerType:JSON.stringify({
            id: 1,
            name:"Gold"
        })
    }
    const handleSubmit = (event) =>{
        console.log(event)
        alert("success")
    }
    const validateObject ={
        name:Yup.string()
            .required("Required"),
        birthday: Yup.date()
            .required("Required"),
        address: Yup.string()
            .required("Required"),
        gender: Yup.string()
            .required("Required"),
        phoneNumber: Yup.string()
            .required("Required"),
            // .matches(/^[a-zA-z0-9+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/, "Invalid email address"),
        roomRented: Yup.string()
            .required("Required"),

    }

    return(
        <>
            <Formik initialValues={initValue} onSubmit={(customer) =>saveCustomer(customer)} validationSchema={Yup.object(validateObject)}>
            <div className="container px-5 my-5">
                <h2 style={{marginLeft:'17%'}}>Create Customer</h2>
                <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="fullName"><b>Full name</b><span style={{color:"red"}}>*</span></label>
                        <Field className="form-control" id="fullName" type="text" placeholder="Full name" name="name"/>
                        <ErrorMessage className="error" name='name' component='div' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="birthday"><b>Birthday</b><span style={{color:"red"}}>*</span></label>
                        <Field className="form-control" name="birthday" id="birthday" type="date" placeholder="Birthday"/>
                        <ErrorMessage className="error" name='name' component='div' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="address"><b>Address</b><span style={{color:"red"}}>*</span></label>
                        <Field className="form-control" id="address" name="address" type="text" placeholder="Address"/>
                        <ErrorMessage className="error" name='address' component='div' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label d-block"><b>Gender</b><span style={{color:"red"}}>*</span></label>
                        <div className="form-check form-check-inline">
                            <Field className="form-check-input"  id="men" type="radio" name="gender" value="1"/>
                            <label className="form-check-label" htmlFor="men">Men</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field className="form-check-input" id="female" type="radio" name="gender" value="0"/>
                            <label className="form-check-label" htmlFor="female">Female</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="phoneNumber"><b>Phone number</b><span style={{color:"red"}}>*</span></label>
                        <Field className="form-control" id="phoneNumber" name="phoneNumber" type="text" placeholder="Phone number"/>
                        <ErrorMessage className="error" name='phoneNumber' component='div' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="phoneNumber"><b>Room rented</b><span style={{color:"red"}}>*</span></label>
                        <Field className="form-control" id="phoneNumber" name="roomRented" type="text" placeholder="Room rented"/>
                        <ErrorMessage className="error" name='roomRented' component='div' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="typeCustomer"><b>Type customer</b><span style={{color:"red"}}>*</span></label>
                        <Field as="select" className="form-select" id="typeCustomer" aria-label="Type customer" name="customerType">
                            {type.map((item) =>
                                <option key={item.id} value={JSON.stringify(item)}>{item.name}</option>
                            )}
                        </Field>
                    </div>
                    <div className="d-grid">
                        <button type='submit' style={{width:"20%",marginLeft:"38%"}}  className='btn btn-primary'>Submit</button>
                    </div>
                </Form>
            </div>
            </Formik>
        </>
    )
}