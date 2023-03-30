import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom'
import '../All_styls/Pay_wit_UPI.css'

function PayWitUPI() {
  return (
    <>
      <div className="container mt-4">
        <Link to={'/home'}>
          <div className="row bg_color py-2 mx-1">
            <div className="col-6">Pay with UPI</div>
            <div className="col-6 text-end"><ArrowForwardIcon /></div>
          </div>
        </Link>
        <div className="row py-1">
          <div className='col text-center fw-bold text-secondary'>OR</div>
        </div>
      </div>
    </>
  )
}

export default PayWitUPI
