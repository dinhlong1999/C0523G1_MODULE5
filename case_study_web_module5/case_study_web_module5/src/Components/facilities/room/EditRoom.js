import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as facilityService from "../../../service/facilityService"
import {toast} from "react-toastify";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";

export function EditRoom() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [typeRent, setTypeRent] = useState([]);
    const [room,setRoom] = useState();
    
    useEffect(()=>{
        getRoomByID();
        getTypeRent();
    },[]);
    
    const getRoomByID = async () => {
      let result = await facilityService.getRoomByID(id);
      setRoom(result.data)
    }

    const getTypeRent = async () => {
       let result = await facilityService.getAllTypeRent();
       setTypeRent(result.data)
    }
    if (!room){
        return null
    }
    const handleSubmit = async (values) => {
       let temp = {...values,typeRent:JSON.parse(values.typeRent)}
        let result = await facilityService.editRoom(temp);
        console.log(temp)
       if (result.status === 200){
           toast.success("Edit success")
           navigate("/room")
       }else {
           toast.error("Failed")
       }
    }


    const initValue = {
        id:room.id,
        name:room.name,
        area:room.area,
        cost:room.cost,
        maximumPeople: room.maximumPeople,
        images: room.images,
        service:room.service,
        typeRent:JSON.stringify(room.typeRent)
    }
    const validate = {
        name: Yup.string()
            .required()
            .matches(/^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/, "First letter must be upper case "),
        area: Yup.number()
            .required()
            .min(30,"Area must be larger than 30"),
        cost:Yup.number()
            .required(),
        maximumPeople: Yup.number()
            .required()
            .min(2,"Capacity must be larger than 30"),
        images: Yup.string()
            .required(),
        service: Yup.string()
            .required(),
        typeRent: Yup.string()
            .required()
    }

    return (
        <Formik
            initialValues={initValue}
            onSubmit={(values) => handleSubmit(values)}
            validationSchema={Yup.object(validate)}
            >
            <div className="container px-5 my-5">
                <h2 style={{marginLeft:'7%'}}>Edit Room</h2>
                <Form id="contactFrom" data-sb-form-api-token="API_TOKEN">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Room name</label>
                        <Field className={"form-control"} id="name" type="text" placeholder="Room name" name="name"/>
                        <ErrorMessage name="name" className="error" component='div'></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Area</label>
                        <Field className={"form-control"} id="area" type="text" placeholder="area" name="area"/>
                        <ErrorMessage name="area" className="error" component='div'></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cost" className="form-label">Cost</label>
                        <Field className={"form-control"} id="cost" type="number" placeholder="Cost" name="cost"/>
                        <ErrorMessage name="cost" className="error" component='div'></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="maximumPeople" className="form-label">Capacity</label>
                        <Field className={"form-control"} id="maximumPeople" type="number" placeholder="Capacity" name="maximumPeople"/>
                        <ErrorMessage name="maximumPeople" className="error" component='div'></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="images" className="form-label">Images</label>
                        <Field className={"form-control"} id="images" type="text" placeholder="Capacity" name="images"/>
                        <ErrorMessage name="images" className="error" component='div'></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="service" className="form-label">Service</label>
                        <Field className={"form-control"} id="service" type="text" placeholder="service" name="service"/>
                        <ErrorMessage name="service" className="error" component='div'></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="typeRent" className='form-label'>Type rent</label>
                        <Field as='select' className='form-select' id='typeRent' aria-label='typeRent' name='typeRent'>
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