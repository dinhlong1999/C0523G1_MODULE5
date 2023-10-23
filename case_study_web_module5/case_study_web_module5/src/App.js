import logo from './logo.svg';
import './App.css';
import Home from "./Components/home";
import {Customer} from "./Components/customer/Customer";
import Header from "./Components/header";
import Footer from "./Components/footer";
import './Components/customer/customer.css'
function App() {
  return (
  <>
    <Header/>
    <Home/>
    <Footer/>
  </>
  );
}
export default App;
