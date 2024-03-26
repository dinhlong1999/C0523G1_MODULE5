import {NavLink, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as productService from "../service/productService"
import * as Yup from "yup";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";

export function EditProduct() {
    const navigate = useNavigate();
    const [product,setProduct] = useState();
    const [type,setType] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        getProductByID();
        getAllType();
    },[]);


    const getProductByID = async () => {
        let result = await productService.getProductByID(id);
        setProduct(result.data)
    }

    const getAllType = async ()=>{
        let result = await productService.getAllType();
        setType(result.data)
    }

    if (!product){
        return null;
    }

    const initValue = {
        id:product.id,
        codeProduct:product.codeProduct,
        name:product.name,
        quantity:product.quantity,
        cost:product.cost,
        date:product.date,
        describer:product.describer,
        typeProduct: JSON.stringify(product.typeProduct)
    }

    const validateObject = {
        codeProduct: Yup.string()
            .required("Bắt buộc nhập")
            .matches(/^PROD-[0-9]{4}$/, "Không đúng định dạng, ĐÚNG: PROD-XXXX(X là chữ số)"),
        name: Yup.string()
            .required("Bắt buộc nhập"),
        quantity: Yup.number()
            .required("Bắt buộc nhập")
            .min(1, "Số lượng phải lớn hơn 0"),
        cost: Yup.number()
            .required("Bắt buộc nhập"),
        date: Yup.date()
            .required("Bắt buộc nhập")
            .max(new Date(), "Ngày nhập phải lớn hơn ngày hiện tại"),
        describer: Yup.string()
            .required("Bắt buộc nhập")
    }

    const handleSubmit = async (values) => {
        let result = {...values,typeProduct:JSON.parse(values.typeProduct)}
        let data = await productService.editProduct(result);
        if (data.status === 200){
            navigate("/")
            toast.success("Sửa thành công")
        }else {
            toast.error("Thất bại")
        }
    }
    return(
        <Formik
            initialValues={initValue}
            onSubmit={(values)=>handleSubmit(values)}
            validationSchema={Yup.object(validateObject)}
        >
            <div className="container px-5 my-5">
                <h2>DANH SÁCH SẢN PHẨM</h2>
                <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="codeProduct"><b>Nhập mã sản phẩm<span style={{color:"red"}}>*</span></b></label>
                        <Field className="form-control" id="codeProduct" type="text" placeholder="Vui lòng nhập mã sản phẩm"
                               name="codeProduct"/>
                        <ErrorMessage name={"codeProduct"} component={"div"} className={"error"}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name"><b>Tên sản phẩm<span style={{color:"red"}}>*</span></b></label>
                        <Field className="form-control" id="name" type="text" placeholder="Vui lòng nhập tên sản phẩm" name="name"/>
                        <ErrorMessage name={"name"} component={"div"} className={"error"}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="quantity"><b>Số lượng<span style={{color:"red"}}>*</span></b></label>
                        <Field className="form-control" id="quantity" type="number" placeholder="Vui lòng nhập số lượng" name="quantity"/>
                        <ErrorMessage name={"quantity"} component={"div"} className={"error"}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="cost"><b>Giá thành<span style={{color:"red"}}>*</span></b></label>
                        <Field className="form-control" id="cost" type="number" placeholder="Vui lòng nhập giá thành" name="cost"/>
                        <ErrorMessage name={"cost"} component={"div"} className={"error"}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="typeProduct"><b>Thể loại<span style={{color:"red"}}>*</span></b></label>
                        <Field as= "select" className="form-select" id="typeProduct" aria-label="type" name="typeProduct">
                            {type.map((item)=>
                                <option key={item.id} value={JSON.stringify(item)}>{item.name}</option>
                            )}
                        </Field>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="date"><b>Ngày nhập<span style={{color:"red"}}>*</span></b></label>
                        <Field className="form-control" id="date" type="date" placeholder="Vui lòng nhập ngày nhập" name="date"/>
                        <ErrorMessage name={"date"} component={"div"} className={"error"}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="describer"><b>Mô tả<span style={{color:"red"}}>*</span></b></label>
                        <Field className="form-control" id="describer" as="textarea" placeholder="Vui lòng nhập ngày nhập" name="describer"/>
                        <ErrorMessage name={"describer"} component={"div"} className={"error"}/>
                    </div>
                    <div className="d-grid" style={{float: "left",marginLeft:"30%"}}>
                        <button className="btn btn-primary btn-lg" id="submitButton" type="submit">Cập nhật</button>
                    </div>
                    <NavLink to={"/"}>
                        <div className="d-grid" style={{float: "left",marginLeft:"20%"}} >
                            <button className="btn btn-primary btn-lg" id="submitButton" type="button">Huỷ</button>
                        </div>
                    </NavLink>

                </Form>
            </div>
        </Formik>
    )
}