import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"
import {useEffect, useState} from "react";
import * as facilityService from "../../service/facilityService"
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

export function CreateFacilities() {
    // const [typeFacility,setType] = useState([])
    // const navigate = useNavigate();
    //
    // useEffect(()=>{
    //     display();
    // },[])
    //
    // const display = async () => {
    //    let result =  await facilityService.getDataTypeFacility()
    //     setType(result);
    // }
    //
    // const saveFacility = async (facility) =>{
    //     let dataMain = {...facility,typeFacility: JSON.parse(facility.typeFacility)}
    //     let result = await facilityService.saveContract(dataMain)
    //     if (result.status === 201){
    //         toast.success("Create success")
    //         navigate("/")
    //     }else {
    //         toast.error("Failed")
    //     }
    // }
    // if (!typeFacility){
    //     return null
    // }
    //
    //
    // const initValues = {
    //     name:"",
    //     area:"",
    //     cost:0,
    //     maximumPeople : 0,
    //     images: "",
    //     typeFacility: JSON.stringify({
    //         id:1,
    //         name:"Villa"
    //     })
    // }
    // const validateObject = {
    //     name: Yup.string()
    //         .required()
    //         .matches(/^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/,"First letter must be upper case "),
    //     area: Yup.number()
    //         .min(20)
    //         .required(),
    //     cost: Yup.number()
    //         .required(),
    //     maximumPeople: Yup.number()
    //         .required()
    //         .min(0),
    //     images: Yup.string()
    //         .required(),
    //
    // }
    //
    // return(
    //     <Formik
    //         initialValues={initValues}
    //         onSubmit={(values) => saveFacility(values)}
    //         validationSchema={Yup.object(validateObject)}
    //         >

}