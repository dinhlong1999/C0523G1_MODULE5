import {combineReducers} from "redux";
import UserReducer from "./UserReducer.jsx";

export const rootReducer = combineReducers({
    users: UserReducer,
})