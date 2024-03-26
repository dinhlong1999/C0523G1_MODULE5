import {useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as facilityService from "../../../service/facilityService"
import {toast} from "react-toastify";
import * as Yup from "yup"
import {useEffect, useState} from "react";

export function CreateRoom() {
    const navigate = useNavigate();
    const [typeRent,setTypeRent] = useState([])
    useEffect(()=>{
        getListTypeRent();
    },[]);

    const getListTypeRent = async () =>{
        let getListType = await facilityService.getAllTypeRent();
        setTypeRent(getListType.data);
    }

    const initialValue = {
        name: "",
        area: 30,
        cost: null,
        maximumPeople: 2,
        service: "",
        images: '',
        typeRent: JSON.stringify({
            id: 1,
            name: "Day"

        })
    }
    const handleSubmit = async (values) => {
        let temp = {...values,typeRent:JSON.parse(values.typeRent)}
        let saveRoom = await  facilityService.createRoom(temp);
        if (saveRoom.status === 201) {
            toast.success("Save success")
            navigate("/room")
        } else {
            toast.error("Failed")
        }
    }
    const validateObject = {
        name: Yup.string()
            .required()
            .matches(/^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/, "First letter must be upper case "),
        area:Yup.number()
            .required()
            .min(30),
        cost: Yup.number()
            .required(),
        maximumPeople: Yup.number()
            .required()
            .min(2),
        images: Yup.string()
            .required(),
        service: Yup.string()
            .required(),
        typeRent: Yup.string()
            .required()
    }


    return (
        <Formik
            initialValues={initialValue}
            onSubmit={(values) =>handleSubmit(values)}
            validationSchema={Yup.object(validateObject)}
        >
            <div className="container px-5 my-5">
                <h2 style={{marginLeft:'7%'}}>Create Room</h2>
                <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name"><b>House name</b><span style={{color:"red"}}>*</span></label>
                        <Field className="form-control" id="name" type="text" placeholder="House name" name="name"/>
                        <ErrorMessage className="error" name='name' component='div' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="area"><b>Area</b><span style={{color:"red"}}>*</span></label>
                        <Field className="form-control" name="area" id="area" type="number" placeholder="area"/>
                        <ErrorMessage className="error" name='area' component='div' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="cost"><b>Cost</b><span style={{color:"red"}}>*</span></label>
                        <Field className="form-control" id="cost" name="cost" type="number" placeholder="Cost"/>
                        <ErrorMessage className="error" name='cost' component='div' />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="maximumPeople"><b>Capacity</b><span style={{color:"red"}}>*</span></label>
                        <Field className="form-control" id="maximumPeople" name="maximumPeople" type="text" placeholder="Capacity"/>
                        <ErrorMessage className="error" name='maximumPeople' component='div' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="images"><b>Images</b><span style={{color:"red"}}>*</span></label>
                        <Field className="form-control" id="images" name="images" type="text" placeholder="images"/>
                        <ErrorMessage className="error" name='images' component='div' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="service"><b>Service</b><span style={{color:"red"}}>*</span></label>
                        <Field className="form-control" id="service" name="service" type="text" placeholder="service"/>
                        <ErrorMessage className="error" name='service' component='div' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="typeRent"><b>Type Rent</b><span style={{color:"red"}}>*</span></label>
                        <Field as="select" className="form-select" id="typeRent" aria-label="typeRent" name="typeRent">
                            {typeRent.map((item) =>
                                <option key={item.id} value={JSON.stringify(item)}>{item.name}</option>
                            )}
                        </Field>
                    </div>
                    <div className="d-grid">
                        <button type='submit' style={{width:"20%",marginLeft:"38%"}}  className='btn btn-primary'>Submit</button>
                    </div>
                </Form>
            </div>
        </Formik>
    )
}