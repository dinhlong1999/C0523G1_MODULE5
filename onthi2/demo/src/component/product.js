import {useEffect, useState} from "react";
import * as productService from "../service/productService";

export default function Product () {
    const [products, setProducts] = useState([]);
    const [nameSearch, setNameSearch] = useState("");
    const [codeSearch,setCodeSearch] = useState("")

    useEffect(()=>{
        getData();
    },[nameSearch,codeSearch]);

    const getData = async () => {
        let response = await productService.getProduct(nameSearch,codeSearch);
        setProducts(response);
    }
    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <input type="text" className={"input"} placeholder={"nhập tên sản phẩm cần tìm"}
                    onChange={(event) => setNameSearch(event.target.value)}/>
            <input type="text" className={"input"} placeholder={"nhập mã sản phẩm cần tìm "}
                   onChange={(event) => setCodeSearch(event.target.value)}/>
            <table className={"table table-bordered table-hover"}>
                <thead>
                <tr style={{textAlign:"center"}}>
                    <th>STT</th>
                    <th>Code product</th>
                    <th>Name product</th>
                    <th>Price buy</th>
                    <th>Price sell</th>
                </tr>
                </thead>
                {(products.length > 0 ? (
                    <tbody style={{textAlign:"center"}}>
                    {products.map((item, index) =>
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.codeProduct}</td>
                            <td>{item.nameProduct}</td>
                            <td>{item.priceBuy}</td>
                            <td>{item.priceSell}</td>
                        </tr>
                    )}

                    </tbody>
                ) : (<td colSpan={5}>Không tìm thấy sản phẩm</td>))}

            </table>
        </div>
    )
}