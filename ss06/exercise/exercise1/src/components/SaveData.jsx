import {useEffect, useState} from "react";
import * as toDoService from "../service/todoService.jsx";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

function SaveData() {
    const navigate = useNavigate();
    const handleSubmit = async (values) => {
        const saveData = await toDoService.saveData(values);
        if (saveData === 201) {
            toast.success("success")
            navigate("/")
        }
    }
    const initValue = {
        name: ""
    }

    return (

        <Formik initialValues={initValue} onSubmit={(values) => {
            handleSubmit(values)
        }}>
            <div>
                <h1>Create todo list</h1>
                <Form>
                    <Field type="text" name="name"/>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </Form>
            </div>

        </Formik>
    )
}

export default SaveData;