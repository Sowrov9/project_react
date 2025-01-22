import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import Footer from './components/Footer';
import Index from "./page/Index";
import Invoice from "./components/Suppliers/CreateSupplier";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
          <Route path="/supplier" element={<Invoice/>}/>
          <Route index element={<Index/>} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>


    </>
  )
}

export default App
