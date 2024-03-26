import logo from './logo.svg';
import './App.css';
import {Merchandises} from "./components/Merchandises";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Merchandises/>}></Route>
            </Routes>
        </BrowserRouter>
        <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
