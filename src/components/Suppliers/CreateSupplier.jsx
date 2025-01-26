import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cart from './../../cartComponent/Cart';



const Invoice = () => {
  const baseUrl = "http://localhost/Restaurant_management_home/admin/";
  const cart = Cart("purchases")
  const [suppliers, setSuppliers] = useState([]);
  const [selectSuppliers, setSelectSuppliers] = useState(null);
  const [product, setProduct] = useState([])
  // const [purchaseId,SetPurchaseId]=useState([]);
  const [summaryCount, setSummaryCount] = useState({
    discount: 0,
    tax: 0,
    subtotal: 0,
    total: 0
  })
  const [item, setItem] = useState({
    name: "",
    item_id: 0,
    qty: 0,
    price: 0,
    subtotal: 0
  })
  const [items, setItems] = useState([cart.getCart()]);

  const handleSetItem = (e) => {
    const { name, value } = e.target
    if (name == "product") {
      let productData = JSON.parse(value)
      setItem((prev) => ({
        ...prev,
        name: productData.name,
        item_id: productData.id,
        qty: 0,
        price: productData.price,
        subtotal: productData.price
      }))
    }

    if (name == "price") {
      setItem((prev) => ({
        ...prev,
        price: value,
        subtotal: prev.price
      }))
    }

    if (name == "qty") {
      setItem((prev) => ({
        ...prev,
        qty: value,
        subtotal: prev.price * value
      }))

    }
  }

  const handleSetAllItem = (e) => {
    // console.log(item);
    cart.save(item)
    setItems(cart.getCart())
    setItem({
      name: "",
      item_id: 0,
      qty: 1,
      price: 0,
      subtotal: 0,
      total_discount: 0
    })
  }

  // setItem((prev) => ({
  //   ...prev,
  //   [name]:value, 
  // }))



const fetchSuppliers = () => {
  axios.get(baseUrl + "api/supplier/")
    .then((res) => {
      //  console.log(res);
      setSuppliers(res.data.suppliers);
    })
}

const handleSupplierChange = (e) => {
  const { value } = e.target
  setSelectSuppliers(JSON.parse(value))
}

// const fetchpurchseId=()=>{
//   axios.get(baseUrl+"api/purchase/get_last_id")
//   .then((res)=>{
//     console.log(res)
//     SetPurchaseId(res.data.purchases)
//   })
// }

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
  // fetchpurchseId()
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
              <select onChange={handleSupplierChange} className="form-select mb-2">
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
                {/* <th><button onClick={handleDeleteAllItems} className="btn btn-warning">DeleteAll</button></th> */}
              </tr>
              <tr>
                <td>
                  <select onChange={handleSetItem} name='product' className="form-select">
                    <option>Select Product</option>
                    {product?.map((data, i) => {
                      return (
                        <option value={JSON.stringify(data)} key={data.id}>{data.name}</option>
                      )
                    })}
                  </select>
                </td>
                <td><input onChange={handleSetItem} type="number" name='qty' className="form-control" placeholder="Qty" /></td>
                <td><input onChange={handleSetItem} type="number" name='price' className="form-control" placeholder="Price" /></td>

                <td>-</td>
                <td>
                  <button onClick={handleSetAllItem} className="btn btn-info">Add</button>
                </td>
              </tr>
            </thead>
            <tbody id="data_append">
              {

              }
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" className="text-end">Discount</td>
                <td>$0.00</td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="4" className="text-end">Tax</td>
                <td>$0.00</td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="4" className="text-end">Subtotal</td>
                <td>$0.00</td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="4" className="text-end fw-bold">Total</td>
                <td className="fw-bold">$0.00</td>
                <td></td>
              </tr>
            </tfoot>
          </table>

          {/* Footer Actions */}
          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-danger">Clear All</button>
            <button className="btn btn-success">Process</button>
          </div>
        </div>
      </div>
    </div>


  </>
)
}
}

export default Invoice