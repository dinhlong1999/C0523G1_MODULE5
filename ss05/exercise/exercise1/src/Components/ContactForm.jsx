import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import "../index.css"
import React from "react";
import {toast} from "react-toastify";



export function ContactForm() {

    const initValue = {
        name: "",
        email: "",
        phone: "",
        message: ""
    };
    const validateObject = {
        name: Yup.string()
            .required("Required"),
        email: Yup.string()
            .required("Required")
            .matches(/^[a-zA-z0-9+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/, "invalid"),
        phone: Yup.string()
            .required()
    };
    return (
        <>
            <Formik
                initialValues={initValue}
                validationSchema={Yup.object(validateObject)}
                onSubmit={(values) => {
                    alert("success")

            }}>
                <div>
                    <h1>Contact login</h1>
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor="name" className='form-label'>Name</label>
                            <Field type="text" className="form-control" name="name" id="name"/>
                            <ErrorMessage className="error" name='name' component='div'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="email" className='form-label'>email</label>
                            <Field type="text" className="form-control" name="email" id="email"/>
                            <ErrorMessage className="error" name='email' component='div'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="phone" className='form-label'>phone</label>
                            <Field type="text" className="form-control" name="phone" id="phone"/>
                            <ErrorMessage className="error" name='phone' component='div'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="message" className='form-label'>message</label>
                            <Field as="textarea" className="form-control" name="message" id="message"/>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>

                    </Form>
                </div>

            </Formik>
        </>
    )
}