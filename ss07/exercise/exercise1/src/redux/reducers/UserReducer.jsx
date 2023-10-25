import {DELETE, GET_ALL} from "../ActionsType.jsx";

const userReducer = (user = [], action) =>{
    const {type,payload}= action;
    switch (type){
        case GET_ALL:
            return payload;
        case DELETE:
            return user.filter((list) => {
                return list.id !== payload
            });
        default:
            return user;
    }
}
export default userReducer;