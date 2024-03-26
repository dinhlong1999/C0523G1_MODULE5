
import './App.css';
import {Customers} from "./Components/customers/Customers";
import Header from "./Components/header";
import Footer from "./Components/footer";
import './Components/customers/customer.css'
import {CreateCustomers} from "./Components/customers/CreateCustomers";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {EditCustomer} from "./Components/customers/EditCustomer";
import {ContractList} from "./Components/Contracts/ContractList";
import {CreateContract} from "./Components/Contracts/CreateContract";
import {EditContract} from "./Components/Contracts/EditContract";
import {CreateFacilities} from "./Components/facilities/CreateFacilities";
import {Rooms} from "./Components/facilities/room/Rooms";
import {Villas} from "./Components/facilities/villa/Villas";
import {Houses} from "./Components/facilities/house/Houses";
import {Homes} from "./Components/facilities/Home";
import {CreateHouse} from "./Components/facilities/house/CreateHouse";
import {CreateRoom} from "./Components/facilities/room/CreateRoom";
import {CreateVilla} from "./Components/facilities/villa/CreateVilla";
import {EditVilla} from "./Components/facilities/villa/EditVilla";
import {EditRoom} from "./Components/facilities/room/EditRoom";
import {EditHouse} from "./Components/facilities/house/EditHouse";
function App() {
  return (
  <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/customers" element={<Customers/>}></Route>
        <Route path="/customers/create" element={<CreateCustomers/>}></Route>
        <Route path="/" element={<Homes/>}></Route>
        <Route path="/villa" element={<Villas/>}></Route>
        <Route path="/room" element={<Rooms/>}></Route>
        <Route path="/house" element={<Houses/>}></Route>
        <Route path="/customers/edit/:customerId" element={<EditCustomer/>}></Route>
        <Route path="/contracts" element={<ContractList/>}></Route>
        <Route path="/contracts/create" element={<CreateContract/>}></Route>
        <Route path='/contracts/edit/:contractID' element={<EditContract/>}></Route>
        <Route path="/house/create" element={<CreateHouse/>}></Route>
        <Route path="/room/create" element={<CreateRoom/>}></Route>
        <Route path="/villa/create" element={<CreateVilla/>}></Route>
        <Route path="/villa/edit/:id" element={<EditVilla/>}></Route>
        <Route path="/room/edit/:id" element={<EditRoom/>}></Route>
        <Route path="/house/edit/:id" element={<EditHouse/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    <ToastContainer></ToastContainer>

  </>
  );
}
export default App;
