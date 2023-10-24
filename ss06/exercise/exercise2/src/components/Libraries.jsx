import {useEffect, useState} from "react";
import * as libraryService from "../service/libraryService.jsx";
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import Modal from "react-bootstrap/Modal";

export function Libraries() {
    const [book,setBook] = useState([]);
    // const [isShow,setShowModal] = useState(false);
    // const [bookId,setBookId] = useState();
    const navigate = useNavigate();

    useEffect(() =>{
        fetchData();
    },[])

    const fetchData = async () =>{
        let res = await libraryService.fetchData();
        setBook(res);
    }
    const remove = async (bookId) =>{
        const temp = await libraryService.deleteBook(bookId);
        if (temp.status === 200){
            navigate("/library")
            alert("ok")
        }
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
                                <button type="button" className="btn btn-outline-warning"
                                        onClick={() =>{remove(item.id)}}>
                                    Delete
                                </button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
            {/*{isShow && (*/}
            {/*    <div className="modal">*/}
            {/*        <div className="modal-content">*/}
            {/*            <h2>Modal Title</h2>*/}
            {/*            <p>This is the modal content.</p>*/}
            {/*            <button onClick={closeModal}>Đóng Modal</button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>

    )

}