import {useNavigate, useParams} from "react-router-dom";
import * as facilityService from "../../../service/facilityService"
import {useEffect, useState} from "react";
import {getAllTypeRent} from "../../../service/facilityService";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";

export function EditVilla() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [typeRent, setTypeRent] = useState([]);
    const [villa, setVilla] = useState();

    useEffect(() => {
        getVillaByID();
        getAllType()
    }, [])

    const getVillaByID = async () => {
        let data = await facilityService.getVillaByID(id);
        setVilla(data.data);
    }

    const getAllType = async () => {
        let data = await facilityService.getAllTypeRent();
        setTypeRent(data.data)
    }

    if (!villa) {
        return null;
    }

    const handleSubmit = async (values) => {

        let result = {...values,typeRent:JSON.parse(values.typeRent)}
        console.log(result)
        let request = await facilityService.editVilla(result)
        if (request.status === 200 ){
            navigate("/villa")
            toast.success("Update success")
        }else {
            toast.error("Failed")
        }
    }

    const initValue = {
        id: villa.id,
        name: villa.name,
        area:villa.area,
        cost:villa.cost,
        maximumPeople:villa.maximumPeople,
        images:villa.images,
        roomStandard:villa.roomStandard,
        description:villa.description,
        areaPool:villa.areaPool,
        flourNumber:villa.flourNumber,
        typeRent:JSON.stringify(villa.typeRent)
    }

    const validateObject = {
        name: Yup.string()
            .required()
            .matches(/^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/, "First letter must be upper case "),
        area:Yup.number()
            .required()
            .min(50),
        cost: Yup.number()
            .required(),
        maximumPeople: Yup.number()
            .required()
            .min(2),
        images: Yup.string()
            .required(),
        roomStandard: Yup.string()
            .required(),
        description: Yup.string()
            .required(),
        flourNumber: Yup.number()
            .required()
            .min(1),
        areaPool: Yup.number()
            .required()
            .min(40,"Area must be lagger than 40m")
    }

    return (
        <Formik
            initialValues={initValue}
            onSubmit={(values) =>handleSubmit(values)}
            validationSchema={Yup.object(validateObject)}
            >
            <div className="container px-5 my-5">
                <h2 style={{marginLeft:'7%'}}>Update Villa</h2>
                <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name"><b>Villa name</b><span style={{color:"red"}}>*</span></label>
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
                        <label className="form-label" htmlFor="areaPool"><b>areaPool</b><span style={{color:"red"}}>*</span></label>
                        <Field className="form-control" id="areaPool" name="areaPool" type="text" placeholder="Area Pool"/>
                        <ErrorMessage className="error" name='areaPool' component='div' />
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