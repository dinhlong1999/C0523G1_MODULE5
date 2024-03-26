import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
;
import {Products} from "./components/Products";
import {CreateProduct} from "./components/CreateProduct";
import {EditProduct} from "./components/EditProduct";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Products/>}></Route>
                    <Route path={"/create"} element={<CreateProduct/>}></Route>
                    <Route path={"/edit/:id"} element={<EditProduct/>}></Route>
                </Routes>
            </BrowserRouter>
            <ToastContainer></ToastContainer>
        </>
    );
}

export default App;
