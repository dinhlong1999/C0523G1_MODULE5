import {useNavigate} from "react-router-dom";
import * as libraryService from "../service/libraryService.jsx"
import {toast} from "react-toastify";
import {Field, Form, Formik} from "formik";

export function CreateLibrary() {
    const navigate = useNavigate();
    const handleSubmit = async (values) =>{
        const saveData = await libraryService.addLibrary(values)
        if (saveData === 201){
            toast.success("Save success")
            navigate("/library")
        }
    }
    return(
        <Formik
            initialValues={{
                title:"",
                quantity:0
            }}
            onSubmit={(event)=> handleSubmit(event)}
        >
            <div className="container">
                <h1>Create library</h1>
                <Form>
                    <label htmlFor="title">Title</label>
                    <Field type="text" id="title" name = "title"></Field><br/>
                    <label htmlFor="quantity">Quantity</label>
                    <Field type="text" id="quantity" name = "quantity"></Field>
                    <button type='submit' className='btn btn-outline-primary'>Submit</button>
                </Form>
            </div>
        </Formik>
    )
}