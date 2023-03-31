import React, { useState } from 'react'
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../Care24_assigment/All_styls/paymentSec.css'
// import './All_styls/common.css'

// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import HeaderWitIconPay from './Header_wit_icon_pay/HeaderWitIconPay'
import PerDayPrice from './Amount_discription/PerDayPrice'
import TotalSaving from './Amount_discription/TotalSaving'
import TotalAmount from './Amount_discription/TotalAmount'
import SevenDays from './Days/SevenDays'
import FifteenDays from './Days/FifteenDays'
import ThirtyDays from './Days/ThirtyDays'
// import NumberOfDays from './Number_of_days/NumberOfDays';
import PayWitUPI from './Pay_wit_UPI/PayWitUPI';
import PayWitOtherOpt from './Pay_wit_other_opt/PayWitOtherOpt';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import '../Care24_assigment/All_styls/NumberOfDays.css'
// import '../All_styls/common.css'


function MainContainer() {

  let [isActive, setisActive] = useState(true)
  let [isActive2, setisActive2] = useState(true)
  let [isActive3, setisActive3] = useState(true)



  const setStyle = () => {
    setisActive(isActive = false)
    setisActive2(isActive2 = true)
    setisActive3(isActive3 = true)
  }

  const setStyle2 = () => {
    setisActive2(isActive2 = false)
    setisActive(isActive = true)
    setisActive3(isActive3 = true)
  }
  const setStyle3 = () => {
    setisActive3(isActive3 = false)
    setisActive(isActive = true)
    setisActive2(isActive2 = true)
  }




  return (
    <>
      <section className='payment_section'>
        <HeaderWitIconPay />
        {/* Payment Details start */}
        <div className="container">
          <div className="row mx-1">
            <div className="col-3 py-2"></div>
            {/* <div className="col-3 py-2 text-center grayClr onHover1"><SevenDays /></div> */}




            <div className={`col-3 py-2 px-0 text-center ${isActive ? 'grayClr' : 'onHover1'}`}><SevenDays /></div>







            {/* <div className="col-3 py-2 text-center grayClr"><FifteenDays /></div> */}


            <div className={`col-3 py-2 px-0 text-center ${isActive2 ? 'grayClr' : 'onHover1'}`}><FifteenDays /></div>



            {/* <div className="col-3 py-2 text-center grayClr"><ThirtyDays /></div> */}

            <div className={`col-3 py-2 px-0 text-center ${isActive3 ? 'grayClr' : 'onHover1'}`}><ThirtyDays /></div>


          </div>
          <div className="row mx-1">
            <div className="col-3 py-2 padRemov"><PerDayPrice /></div>
            {/* <div className="col-3 py-2 text-center grayClr onHover2">7000 <i class="fa fa-inr" /></div> */}


            <div className={`col-3 py-2 px-0 text-center ${isActive ? 'grayClr' : 'onHover2'}`}>7000 <i class="fa fa-inr" /></div>



            {/* <div className="col-3 py-2 text-center grayClr">15000 <i class="fa fa-inr" /></div> */}



            <div className={`col-3 py-2 px-0 text-center ${isActive2 ? 'grayClr' : 'onHover2'}`}>15000 <i class="fa fa-inr" /></div>


            {/* <div className="col-3 py-2 text-center grayClr">30000 <i class="fa fa-inr" /></div> */}


            <div className={`col-3 py-2 px-0 text-center ${isActive3 ? 'grayClr' : 'onHover2'}`}>30000 <i class="fa fa-inr" /></div>


          </div>
          <div className="row mx-1">
            <div className="col-3 py-2 padRemov"><TotalSaving /></div>
            {/* <div className="col-3 py-2 text-center grayClr onHover2">700  <i class="fa fa-inr" /></div> */}


            <div className={`col-3 py-2 px-0 text-center ${isActive ? 'grayClr' : 'onHover2'}`}>700  <i class="fa fa-inr" /></div>



            {/* <div className="col-3 py-2 text-center grayClr">2250  <i class="fa fa-inr" /></div> */}



            <div className={`col-3 py-2 px-0 text-center ${isActive2 ? 'grayClr' : 'onHover2'}`}>2250  <i class="fa fa-inr" /></div>


            {/* <div className="col-3 py-2 text-center grayClr">6000  <i class="fa fa-inr" /></div> */}


            <div className={`col-3 py-2 px-0 text-center ${isActive3 ? 'grayClr' : 'onHover2'}`}>6000  <i class="fa fa-inr" /></div>


          </div>
          <div className="row mx-1">
            <div className="col-3 py-2 padRemov"><TotalAmount /></div>
            {/* <div className="col-3 py-2 text-center grayClr onHover2 borderLast">6300 <i class="fa fa-inr" /></div> */}


            <div className={`col-3 py-2 px-0 text-center ${isActive ? 'grayClr' : 'onHover2'} ${isActive ? 'grayClr' : 'borderLast'}`}>6300 <i class="fa fa-inr" /></div>




            {/* <div className="col-3 py-2 text-center grayClr">12750 <i class="fa fa-inr" /></div> */}

            <div className={`col-3 py-2 px-0 text-center ${isActive2 ? 'grayClr' : 'onHover2'} ${isActive2 ? 'grayClr' : 'borderLast'}`}>12750 <i class="fa fa-inr" /></div>




            {/* <div className="col-3 py-2 text-center grayClr">24000 <i class="fa fa-inr" /></div> */}


            <div className={`col-3 py-2 px-0 text-center ${isActive3 ? 'grayClr' : 'onHover2'} ${isActive3 ? 'grayClr' : 'borderLast'}`}>24000 <i class="fa fa-inr" /></div>


          </div>
        </div>
        {/* Payment Details end */}

        {/* Number of Days start */}
        <div className="container mt-4">
          <div className="row justify-content-between mx-1">
            <div className="col-3 myWidth">
              <button type="button" onClick={setStyle} className="btn btn-outline-primary position-relative fw-bold">
                7 Days
                <span className="position-absolute top-0 left-0 start-100 translate-middle badge">
                  <CheckCircleOutlineIcon />
                </span>
              </button>
            </div>
            <div className="col-3 text-end myWidth center">
              <button type="button" onClick={setStyle2} className="btn btn-outline-primary position-relative fw-bold">
                15 Days
                <span className="position-absolute top-0 left-0 start-100 translate-middle badge">
                  <CheckCircleOutlineIcon />
                </span>
              </button>
            </div>
            <div className="col-3 text-end myWidth">
              <button type="button" onClick={setStyle3} className="btn btn-outline-primary position-relative fw-bold">
                30 Days
                <span className="position-absolute top-0 left-0 start-100 translate-middle badge">
                  <CheckCircleOutlineIcon />
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Number of Days end */}

        {/* pay with UPI start */}
        <PayWitUPI />
        {/* pay with UPI end */}

        {/* pay with UPI other start */}
        <PayWitOtherOpt />
        {/* pay with UPI other end */}

      </section >
    </>
  )
}

export default MainContainer
