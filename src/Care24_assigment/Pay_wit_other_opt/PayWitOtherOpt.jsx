import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom'
import '../All_styls/Pay_with_other_opt.css'
function PayWitOtherOpt() {
  return (
    <>
      <div className="container expandHeight">
        <Link to={'/home'}>
          <div className="row bg_color2 py-2 mx-1">
            <div className="col-7">Pay with other option</div>
            <div className="col-5 text-end"><ArrowForwardIcon /></div>
          </div>
        </Link>
        <div className="row py-1">
          <div className='col text-center fw-bold text-secondary'>*Terms and Conditions Applied</div>
        </div>
      </div>
    </>
  )
}

export default PayWitOtherOpt

