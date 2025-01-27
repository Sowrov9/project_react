import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const CustomerManage = () => {
    const [customers, setCustomers] = useState([]);

    const fetchCustomer = () => {
        axios.get("http://localhost/Restaurant_management_home/admin/api/customer/")
            .then((res) => {
                // console.log(res.data.customers);
                setCustomers(res.data.customers)

            })
    }
    useEffect(() => {
        fetchCustomer()
    }, [])
    return (
        <>
            <div className="container mt-5">
                <h2 className="text-center mb-4">All Customers</h2>
                <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                    <NavLink  to="/customer/create" className={"btn btn-primary"}>Create Customer</NavLink>
                </div>
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers?.map((data, i) => {
                            return (
                                <tr key={i}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.mobile}</td>
                                    <td>{data.address}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default CustomerManage