import {useEffect, useState} from "react";
import * as merchandisesService from "../Service/merchandisesService"
import {DeleteMerchandises} from "./DeleteMerchandises";

export function Merchandises() {
    const [merchandises, setMerchandises] = useState([])
    const [nameSearch,setNameSearch] = useState("");
    const [nameTypeSearch,setNameTypeSearch] = useState("");
    const [type,setType] = useState([]);
    const [show, setShow] = useState(false);
    const [select,setSelect] = useState(null);

    useEffect(()=>{
        getAllList();
        getAllType();
    },[nameSearch,nameTypeSearch,show])

    const getAllList = async () => {
       let result = await merchandisesService.getAllMerchandises(nameSearch,nameTypeSearch)
        setMerchandises(result.data);
    }
    const getAllType = async () =>{
        let result = await merchandisesService.getAllType()
        setType(result.data)
    }

    const closeModal = async () => {
        setShow(false)
        setSelect(null);
    }

    const handleModal = async (values) =>{
        setShow(true);
        setSelect(values);
    }

    return(
        <>
            <div className={"container"}>
                <h1>LIST OF MERCHANDISES</h1>
                <input type="text" onChange={(event) => setNameSearch(event.target.value)} placeholder={"Please enter name search"} />
                <select onChange={(values) =>setNameTypeSearch(values.target.value)}>
                    <option value={""}>Vui lòng chọn</option>
                    {type.map((item)=>
                        <option key={item.id} value={item.name}>{item.name}</option>
                    )}
                </select>
                <table className={"table table-hover"}>
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã hàng hoá</th>
                        <th>Tên hàng hoá</th>
                        <th>Đơn vị tính</th>
                        <th>Loại hàng hoá</th>
                        <th>Ngày thu hoạch</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {merchandises.map((item,index)=>
                        <tr key={item.id}>
                            <td>{index+1}</td>
                            <td>{item.code}</td>
                            <td>{item.name}</td>
                            <td>{item.unit}</td>
                            <td>{item.type.name}</td>
                            <td>{item.date}</td>

                            <td>
                                <button type="button" className="btn btn-outline-warning">Warning</button></td>
                            <td>
                                <button type="button" className="btn btn-outline-danger" onClick={() => handleModal(item) }>Remove</button></td>
                        </tr>
                    )}
                    </tbody>
                </table>

            </div>
            <DeleteMerchandises
                show={show}
                select={select}
                close={closeModal}
            >
            </DeleteMerchandises>
        </>
    )
}