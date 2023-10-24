import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as libraryService from "../service/libraryService.jsx"

export function EditLibrary() {
    const {libraryID} =useParams();
    const [book, setBook] = useState({});
    useEffect(()=>{
        bookByID()
        console.log("abc")
    },[])

    const bookByID = async () =>{
        let data = await libraryService.getLibraryById(libraryID);
        setBook(data)
    }
    const handleChange = (event) =>{
        setBook({
            ...book,
            [event.target.name]:event.target.value
        })
    }
    return(
        <div className="container">
            <h1>Update book</h1>
            <label htmlFor="title">Title</label>
            <input name="title" id='title' type="text" value={book.title} onChange={(event) => handleChange(event)}/><br/>
            <label htmlFor="quantity">Quantity</label>
            <input name="quantity" id='quantity' type="text" value={book.quantity} onChange={(event) => handleChange(event)}/>

        </div>
    )

}
