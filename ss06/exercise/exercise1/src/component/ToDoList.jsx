import {useEffect, useState} from "react";
import * as toDoService from "../service/todoService.jsx"
import {ErrorMessage, Field, Form, Formik} from "formik"
import {NavLink, useNavigate} from "react-router-dom";

function ToDoList() {
    const [toDos, setToDos] = useState([]);


    useEffect(() => {
        temp()
    }, []);


    const temp = async () => {
        const res = await toDoService.fetchData();
        setToDos(res);
    }
    return (
        <div>
            <h1>Todo List</h1>
            <NavLink to="/todo/create"><button>Create</button></NavLink>
            <table border="1px">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {toDos.map((item, index) =>
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}

export default ToDoList;