import {useEffect, useState} from "react";
import * as libraryService from "../service/libraryService.jsx";
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import {DeleteLibrary} from "./DeleteLibrary.jsx";

export function Libraries() {
    const [book,setBook] = useState([]);
    const [isShow,setShow] = useState(false);
    const [bookDelete,setBookDelete] = useState(null);

    useEffect(() =>{
        fetchData();
    },[])


    const fetchData = async () =>{
        let res = await libraryService.fetchData();
        setBook(res);
    }
    const showModal = async (book) =>{
        setBookDelete(book)
        setShow(true)
    }
    const closeModal = async () =>{
        fetchData()
        setShow(false)
        setBookDelete(null)

    }

    return(
        <div className="container">
            <h1>Library</h1>
            <NavLink to="/library/create"><button type="button" className="btn btn-outline-warning">Create library</button></NavLink>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>No.</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th colSpan="2">Action</th>
                </tr>
                </thead>
                <tbody>
                {book.map((item,index) =>
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.quantity}</td>
                        <td>
                            <NavLink to={`/library/edit/${item.id}`}>
                            <button type="button" className="btn btn-outline-warning">Edit</button>
                            </NavLink>
                        </td>
                        <td>
                            <NavLink to="/library">
                                <button type="button" className="btn btn-outline-warning"
                                        onClick={() =>showModal(item)}>
                                    Delete
                                </button>
                            </NavLink>

                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        <DeleteLibrary
            isShow={isShow}
            bookDelete={bookDelete}
            closeModal={closeModal}
        >
        </DeleteLibrary>
        </div>

    )

}