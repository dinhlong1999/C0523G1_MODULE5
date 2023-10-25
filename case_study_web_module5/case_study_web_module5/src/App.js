import logo from './logo.svg';
import './App.css';
import Home from "./Components/home";
import {Customers} from "./Components/customers/Customers";
import Header from "./Components/header";
import Footer from "./Components/footer";
import './Components/customers/customer.css'
import {CreateCustomers} from "./Components/customers/CreateCustomers";
function App() {
  return (
  <>
    <Header/>
    <CreateCustomers/>
    <Footer/>
  </>
  );
}
export default App;
