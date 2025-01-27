import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cart from '../../cartComponent/Cart';
import { toast } from 'react-toastify';



const Invoice = () => {
  const baseUrl = "http://localhost/Restaurant_management_home/admin/";
  // const cart = Cart("purchases")
  const [suppliers, setSuppliers] = useState([]);
  const [selectSuppliers, setSelectSuppliers] = useState(null);
  const [product, setProduct] = useState([])
  // 1-27-2025
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cartProducts");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [data,setData] = useState({product:"", price:"",qty: ""})
  const [subTotal,setSubTotal] = useState(0)

  const handleChange = e =>{
    const {name,value} = e.target;
    setData({...data, [name]: value});
  }


const fetchSuppliers = () => {
  axios.get(baseUrl + "api/supplier/")
    .then((res) => {
      //  console.log(res);
      setSuppliers(res.data.suppliers);
    })
}

// Handle Add to cart
const handleAdd = e=>{
  e.preventDefault();
  setCart([...cart, data]);
  setData({product:"", price:"",qty: ""})
}
useEffect(() => {
  localStorage.setItem("cartProducts", JSON.stringify(cart));
}, [cart]);


const calculatePrice = arr =>{
  const subTotal = arr.reduce((prev,cur)=> prev + parseInt(cur.price), 0)
  return subTotal;
}

useEffect(()=>{
  const calculatePrice = () =>{
    const subTotal = cart.reduce((prev,cur)=> prev + parseInt(cur.price * cur.qty), 0)
    setSubTotal(subTotal)
  }
  calculatePrice();
},[cart])

const handleSupplierChange = (e) => {
  const { value } = e.target
  setSelectSuppliers(JSON.parse(value))
}

const handleProcess = async(e) => {
  e.preventDefault();
  const purchaseData = {
    supplier_id: selectSuppliers?.id,
    total_amount: (subTotal + subTotal * 0.05),
    purchase_date: new Date()
  }
  const response = await axios.post('http://localhost/Restaurant_management_home/admin/api/purchase/save',purchaseData);
  // console.log(response)
 if(response.data.success == 'yes'){
  localStorage.clear()
  setCart([])
  toast.success("Purchase successfully done!")
 }
}

// Handle Clear
const handleClearAll = ()=> {
  setCart([]);
    localStorage.clear();
}



const fetchProduct = () => {
  axios.get(baseUrl + "api/item/")
    .then((res) => {
      // console.log(res.data.items);
      setProduct(res.data.items);
    })
    .catch((err) => {
      console.log(err);

    })
}

useEffect(() => {
  fetchSuppliers()
  fetchProduct()
}, [])

return (
  <>
    <div className="container my-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white text-center">
          <h1 className="mb-0">Invoice</h1>
        </div>
        <div className="card-body">
          {/* Invoice Details */}
          <div className="row mb-4">
            <div className="col-md-4">
              <h5>Supplier</h5>
              <select onChange={handleSupplierChange} name='supplier' className="form-select mb-2">
                <option>Select Supplier</option>
                {
                  suppliers?.map((data, index) => {
                    return (
                      <option value={JSON.stringify(data)} key={data.id}>{data.name}</option>
                    )
                  })

                }
              </select>
              <p className="mb-1">Phone: {selectSuppliers && selectSuppliers.mobile}<span id="phone"></span></p>
              <p>Address: {selectSuppliers && selectSuppliers.address}<span id="email"></span></p>
            </div>


            <div className="col-md-4 text-end" >
              <h5>Invoice Details</h5>

              <p>Invoice No: <strong>#12345</strong></p>
              <p>Date: <strong>{new Date().toLocaleDateString()}</strong></p>
              <div>
                Delivery Date:
                <input type="date" className="form-control mt-1 text-end" style={{ width: "auto", marginLeft: "auto" }} />
              </div>
            </div>
          </div>

          {/* Product Table */}
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total</th>
                <th>Action</th>
                {/* <th><button onClick={handleDeleteAllItems} className="btn btn-warning">DeleteAll</button></th> */}
              </tr>
              <tr>
                <td>
                  <select onChange={handleChange} name='product' className="form-select">
                    <option>Select Product</option>
                    {product?.map((data, i) => {
                      return (
                        <option value={data.name} key={data.id}>{data.name}</option>
                      )
                    })}
                  </select>
                </td>
                <td><input onChange={handleChange} type="number" name='qty' value={data.qty} className="form-control" placeholder="Qty" /></td>
                <td><input onChange={handleChange} type="number" name='price' value={data.price} className="form-control" placeholder="Price" /></td>

                <td>{data.qty ? data.qty * data.price : 0}</td>
                <td>
                  <button onClick={handleAdd} className="btn btn-info">Add</button>
                </td>
              </tr>
            </thead>
            <tbody id="data_append">
              {
                cart.length > 0 && cart.map(item=>(
                  <tr key={item.item_id}>
                      <td>{item.product}</td>
                      <td>{item.qty}</td>
                      <td>{item.price}</td>
                      <td>{item.qty && item.qty * item.price}</td>
                  </tr>
                ))
              }
            </tbody>
            <tfoot>
            <tr>
                <td colSpan="3" className="text-end">Subtotal</td>
                <td>&#2547;{subTotal}</td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="3" className="text-end">Tax</td>
                <td>&#2547;{subTotal * 0.05}</td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="3" className="text-end fw-bold">Total</td>
                <td className="fw-bold">&#2547;{subTotal + (subTotal * 0.05)}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>

          {/* Footer Actions */}
          <div className="d-flex justify-content-between mt-4">
            <button onClick={handleClearAll} className="btn btn-danger">Clear All</button>
            <button onClick={handleProcess} className="btn btn-success">Process</button>
          </div>
        </div>
      </div>
    </div>


  </>
)
}

export default Invoice