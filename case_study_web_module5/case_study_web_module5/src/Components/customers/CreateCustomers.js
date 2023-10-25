import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"

export function CreateCustomers (){
    const initValue ={
        name: "",
        birthday: "",
        address :"",
        gender:0,
        phoneNumber:"",
        roomRented:"",
        customerType:{
            id: 1,
            name:"Gold"
        },
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
        roomRented: Yup.string()
            .required("Required"),
    }

    return(
        <>
            <Formik initialValues={initValue} onSubmit={handleSubmit} validationSchema={Yup.object(validateObject)}>
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
                        <Field className="form-control" id="birthday" type="text" placeholder="Birthday"
                               data-sb-validations=""/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="address"><b>Address</b><span style={{color:"red"}}>*</span></label>
                        <Field className="form-control" id="address" type="text" placeholder="Address"
                               data-sb-validations=""/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label d-block"><b>Gender</b><span style={{color:"red"}}>*</span></label>
                        <div className="form-check form-check-inline">
                            <Field className="form-check-input" id="men" type="radio" name="gender"
                                   data-sb-validations=""/>
                            <label className="form-check-label" htmlFor="men">Men</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field className="form-check-input" id="female" type="radio" name="gender"
                                   data-sb-validations=""/>
                            <label className="form-check-label" htmlFor="female">Female</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="phoneNumber"><b>Phone number</b><span style={{color:"red"}}>*</span></label>
                        <Field className="form-control" id="phoneNumber" type="text" placeholder="Phone number"
                               data-sb-validations=""/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="typeCustomer"><b>Type customer</b><span style={{color:"red"}}>*</span></label>
                        <Field as="select" className="form-select" id="typeCustomer" aria-label="Type customer">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Field>
                    </div>
                </Form>
            </div>
            </Formik>
        </>
    )
}