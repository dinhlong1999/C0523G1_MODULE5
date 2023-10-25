import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as libraryService from "../service/libraryService.jsx"
import {Field, Form, Formik} from "formik";
import {toast} from "react-toastify";

export function EditLibrary() {
    const {libraryID} =useParams();
    const [book,setBook] = useState();
    const navigate = useNavigate();

    useEffect(()=>{
        bookByID()
    },[]);


    const bookByID = async () => {
        const result = await libraryService.getLibraryById(libraryID);
        setBook(result);
        console.log(book)

    }
    if (!book) return null;
    const update = async (book)=>{
        const result = await libraryService.editLibrary(book)
        if (result.status === 200){
            toast.success("Save success")
            navigate("/library")
            console.log(book)
        }else
            alert(result.status)
    }

    return(
        <div className="container">
            <Formik initialValues={book} onSubmit={(book) => update(book)}>
                <div>
                    <h1>Update book</h1>
                    <Form>
                        <label htmlFor="title">Title</label>
                        <Field name="title" id='title' type="text" /><br/>
                        <label htmlFor="quantity">Quantity</label>
                        <Field name="quantity" id='quantity' type="number"/><br/>
                        <button type='submit' className='btn btn-outline-primary'>Submit</button>
                    </Form>

                </div>
            </Formik>

        </div>
    )

}
