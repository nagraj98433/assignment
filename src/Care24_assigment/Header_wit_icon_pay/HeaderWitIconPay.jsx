import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import '../All_styls/Header_wit_icon_pay.css'


function HeaderWitIconPay() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-5 align-self-center ps-4 ">
            <Link to={"/home"}>
              <ArrowBackIcon className='fs-2 text-secondary fw-bold' />
            </Link>
          </div>
          <div className="col-7 fw-bold fs-4 myfontColor">Payment</div>
        </div>
      </div>
      <div>
        <hr />
      </div>
    </>
  )
}

export default HeaderWitIconPay



