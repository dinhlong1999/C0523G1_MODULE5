import * as  productService from "../service/productService";
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {DeleteProduct} from "./DeleteProduct";

export function Products() {
    const [products, setProducts] = useState([]);
    const [types, setType] = useState([]);
    const [nameSearch, setNameSearch] = useState("");
    const [typeName, setTypeName] = useState("");
    const [show, setShow] = useState(false);
    const [select,setSelect] = useState(null)

    useEffect(() => {
        getAllProduct();
        getAllType()
    }, [nameSearch, typeName,show]);

    const getAllProduct = async () => {
        let result = await productService.getAllProduct(nameSearch,typeName);
        console.log(result)
        setProducts(result.data)
    }

    const getAllType = async () => {
        let result = await productService.getAllType();
        setType(result.data)
    }

    const handleModal = async (value) => {
        setShow(true);
        setSelect(value)
    }

    const closeModal = async () => {
        setShow(false);
        setSelect(null);
    }


    return (
        <div className={"container"}>
            <h2>DANH SÁCH SẢN PHẨM</h2>
            <NavLink to={"/create"}>
                <button type={"button"} className={"btn btn-light"}>Thêm mới sản phẩm</button>
            </NavLink>
            <input type={"text"} className={"input"} placeholder="Nhập tên sản phẩm cần tìm"
                   onChange={(event) => setNameSearch(event.target.value)}/>
            <select className={"select"} onChange={(event) => setTypeName(event.target.value)}>
                <option value="">--Loại thực phẩm---</option>
                {types.map((item) =>
                    <option key={item.id} value={item.name}>{item.name}</option>
                )}
            </select>
            <table className={"table table-bordered table-hover"}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Thể loại</th>
                    <th>Mô tả sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                    <th>Ngày nhập</th>
                    <th colSpan={2}></th>
                </tr>
                </thead>
                {(products.length > 0 ? (
                    <tbody>
                    {products.map((item, index) =>
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.codeProduct}</td>
                            <td>{item.name}</td>
                            <td>{item.typeProduct.name}</td>
                            <td>{item.describer}</td>
                            <td>{item.quantity}</td>
                            <td>{item.cost}</td>
                            <td>{new Date(item.date).getDate() + "/" + (new Date(item.date).getMonth()+1) + "/" + new Date(item.date).getFullYear()}</td>
                            <td>
                                <NavLink to={`/edit/${item.id}`}>
                                    <button type={"button"} className={"btn btn-light btn-sm"}>Cập nhât</button>
                                </NavLink>
                            </td>
                            <td>
                                <button type={"button"} onClick={() => handleModal(item)} className={"btn btn-light btn-sm"}>Xoá</button>
                            </td>

                        </tr>
                    )}
                    </tbody>
                ) :(<td colSpan={8}>Không có dữ liệu</td> ) )}

            </table>
            <DeleteProduct
                show={show}
                select={select}
                close={closeModal}
            >

            </DeleteProduct>
        </div>
    )
}