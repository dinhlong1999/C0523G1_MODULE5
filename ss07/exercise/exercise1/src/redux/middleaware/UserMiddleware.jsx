import * as userService from "../../service/userService.jsx"
import {DELETE, GET_ALL} from "../ActionsType.jsx";
import {useParams} from "react-router-dom";
export const getAll =() => async (dispatch) =>{
    const data = await userService.getData();
    dispatch({
        type: GET_ALL,
        payload: data
    })

};
export const removeUser = (id) => async (dispatch) =>{
    const remove = await userService.deleteUser(id);
    dispatch({
        type:DELETE,
        payload: id
    })
}