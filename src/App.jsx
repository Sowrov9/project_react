import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import Footer from './components/Footer';
import Invoice from "./page/Suppliers/CreateSupplier";
import HomePage from "./page/HomePage";
import CustomerManage from "./page/customer/customerManage";
import CreateCustomer from "./page/customer/CreateCustomer";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/supplier" element={<Invoice/>}/>
            <Route path="/customer" element={<CustomerManage/>}/> 
            <Route path="/customer/create" element={<CreateCustomer/>}/> 
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>


    </>
  )
}

export default App
