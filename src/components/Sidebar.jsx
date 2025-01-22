import React from 'react'

const Sidebar = () => {
  return (
    <>
      <div className="deznav">
        <div className="deznav-scroll">
          <ul className="metismenu" id="menu">
            <li>
              <a className="ai-icon" href="<?php echo $base_url?>/home" aria-expanded="false">
                <i className="flaticon-025-dashboard" />
                <span className="nav-text">Dashboard</span>
              </a>
            </li>


            <li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
              <i className="flaticon-025-dashboard" />
              <span className="nav-text">Customer</span>
            </a>
              <ul aria-expanded="false">
                <li><a href="<?php echo $base_url?>/customer">Customer Details</a></li>
              </ul>
            </li>



            <li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
              <i className="flaticon-025-dashboard" />
              <span className="nav-text">Category Setup</span>
            </a>
              <ul aria-expanded="false">
                <li><a href="<?php echo $base_url?>/category">categories</a></li>
              </ul>
              <ul aria-expanded="false">
                <li><a href="<?php echo $base_url?>/subcategory">sub category</a></li>
              </ul>
            </li>



            <li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
              <i className="flaticon-025-dashboard" />
              <span className="nav-text">Employee</span>
            </a>
              <ul aria-expanded="false">
                <li><a href="<?php echo $base_url?>/employee">Employee Details</a></li>
              </ul>
            </li>


            <li><a className="ai-icon" href="<?php echo $base_url?>/item" aria-expanded="false">
              <i className="flaticon-025-dashboard" />
              <span className="nav-text">Items</span>
            </a>
            </li>


            <li><a className="has-arrow ai-icon" href="javascript:" aria-expanded="false">
              <i className="flaticon-025-dashboard" />
              <span className="nav-text">Order</span>
            </a>
              <ul aria-expanded="false">
                <li><a href="<?php echo $base_url?>/order/create">orders</a></li>
                <li><a href="<?php echo $base_url?>/order/index">order details</a></li>
              </ul>
            </li>


            <li>
              <a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                <i className="flaticon-025-dashboard" />
                <span className="nav-text">Purchase</span>
              </a>
              <ul aria-expanded="false">
                <li><a href="/supplier">supplier invoice</a></li>
                <li><a href="<?php echo $base_url?>/purchase/index">purchase Details</a></li>
              </ul>
            </li>


            <li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
              <i className="flaticon-043-menu" />
              <span className="nav-text">Table</span>
            </a>
              <ul aria-expanded="false">
                <li><a href="table-bootstrap-basic.html">Bootstrap</a></li>
                <li><a href="table-datatable-basic.html">Datatable</a></li>
              </ul>
            </li>
            <li><a className="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
              <i className="flaticon-022-copy" />
              <span className="nav-text">Pages</span>
            </a>
              <ul aria-expanded="false">
                <li><a href="page-login.html">Login</a></li>
                <li><a href="page-register.html">Register</a></li>
                <li><a className="has-arrow" href="javascript:void()" aria-expanded="false">Error</a>
                  <ul aria-expanded="false">
                    <li><a href="page-error-400.html">Error 400</a></li>
                    <li><a href="page-error-403.html">Error 403</a></li>
                    <li><a href="page-error-404.html">Error 404</a></li>
                    <li><a href="page-error-500.html">Error 500</a></li>
                    <li><a href="page-error-503.html">Error 503</a></li>
                  </ul>
                </li>
                <li><a href="page-lock-screen.html">Lock Screen</a></li>
                <li><a href="empty-page.html">Empty Page</a></li>
              </ul>
            </li>
          </ul>
          <div className="plus-box">
            <img src="images/plus.png" alt />
            <h5 className="fs-18 font-w700">Add Menus</h5>
            <p className="fs-14 font-w400">Manage your food <br />and beverages menus<i className="fas fa-arrow-right ms-3" /></p>
          </div>
          <div className="copyright">
            <p><strong>Lezato Restaurant Admin</strong> © 2021 All Rights Reserved</p>
            <p className="fs-12">Made with <span className="heart" /> by DexignZone</p>
          </div>

        </div>
      </div>

    </>
  )
}

export default Sidebar