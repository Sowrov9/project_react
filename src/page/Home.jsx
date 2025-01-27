import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Invoice from './Suppliers/CreateSupplier'

const Home = () => {
  return (
    <div id="main-wrapper">
        <Header/>
        <Sidebar/>
        <div className="content-body">
            <Outlet/>
            
        </div>
    </div>
  )
}

export default Home