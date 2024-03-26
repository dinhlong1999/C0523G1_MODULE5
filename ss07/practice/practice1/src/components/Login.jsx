import {useNavigate} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {useState} from "react";

export function Login() {
    const navigate = useNavigate();
    const dispatch= useDispatch();
    const [user,setUser]= useState({username:'',password:''})
    const userlogined = useSelector(state => state.userlogined)
}