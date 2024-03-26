import * as facilityService from "../../../service/facilityService"
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";

export function EditHouse() {
    const navigate = useNavigate();
    const [typeRent,setTypeRent] = useState([]);
    const [house,setHouse] = useState();
    const {id} =useParams();

    useEffect(()=>{
        getHouseByID();
        getAllType();
    },[])


    const getHouseByID = async () =>{
        let result = await facilityService.getHouseByID(id);
        setHouse(result.data)
    }

    const getAllType = async () =>{
        let result = await facilityService.getAllTypeRent();
        setTypeRent(result.data)
    }
    const editHouse = async (values) => {
        let temp ={...values,typeRent:JSON.parse(values.typeRent)}
        let result = await facilityService.editHouse(temp);
        if (result.status === 200){
            toast.success("Edit success");
            navigate("/house")
        }else {
            toast.error("Failed")
        }
    }

    if (!house){
        return null;
    }
    const initValue = {
        id:house.id,
        name:house.name,
        area:house.area,
        cost:house.cost,
        maximumPeople: house.maximumPeople,
        images:house.images,
        roomStandard:house.roomStandard,
        description:house.description,
        flourNumber:house.flourNumber,
        typeRent:JSON.stringify(house.typeRent)
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
            .min(4),
        images: Yup.string()
            .required(),
        roomStandard: Yup.string()
            .required(),
        description: Yup.string()
            .required(),
        typeRent: Yup.string()
            .required(),
        flourNumber: Yup.number()
            .required()
            .min(1)
    }
    return (
        <Formik
            initialValues={initValue}
            onSubmit={(values) =>editHouse(values)}
            validationSchema={Yup.object(validateObject)}
        >
            <div className="container px-5 my-5">
                <h2 style={{marginLeft:'7%'}}>Update information House</h2>
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
                        <label className="form-label" htmlFor="roomStandard"><b>Room standard<small>(Premium,Luxury,Deluxe)</small></b><span style={{color:"red"}}>*</span></label>
                        <Field className="form-control" id="roomStandard" name="roomStandard" type="text" placeholder="Room standard"/>
                        <ErrorMessage className="error" name='roomStandard' component='div' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="description"><b>Description</b><span style={{color:"red"}}>*</span></label>
                        <Field className="form-control" id="description" name="description" type="text" placeholder="Description"/>
                        <ErrorMessage className="error" name='description' component='div' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="flourNumber"><b>Flour Number</b><span style={{color:"red"}}>*</span></label>
                        <Field className="form-control" id="flourNumber" name="flourNumber" type="text" placeholder="flourNumber"/>
                        <ErrorMessage className="error" name='flourNumber' component='div' />
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