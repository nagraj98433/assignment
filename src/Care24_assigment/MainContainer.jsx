import React from 'react'
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../Care24_assigment/All_styls/paymentSec.css'
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import HeaderWitIconPay from './Header_wit_icon_pay/HeaderWitIconPay'
import PerDayPrice from './Amount_discription/PerDayPrice'
import TotalSaving from './Amount_discription/TotalSaving'
import TotalAmount from './Amount_discription/TotalAmount'
import SevenDays from './Days/SevenDays'
import FifteenDays from './Days/FifteenDays'
import ThirtyDays from './Days/ThirtyDays'
import NumberOfDays from './Number_of_days/NumberOfDays';
import PayWitUPI from './Pay_wit_UPI/PayWitUPI';
import PayWitOtherOpt from './Pay_wit_other_opt/PayWitOtherOpt';

function MainContainer() {
  return (
    <>
      <section className='payment_section'>
        <HeaderWitIconPay />
        {/* Payment Details start */}
        <div className="container">
          <div className="row mx-1">
            <div className="col-3 py-2"></div>
            <div className="col-3 py-2 text-center onHover1"><SevenDays /></div>
            <div className="col-3 py-2 text-center grayClr"><FifteenDays /></div>
            <div className="col-3 py-2 text-center grayClr"><ThirtyDays /></div>
          </div>
          <div className="row mx-1">
            <div className="col-3 py-2 padRemov"><PerDayPrice /></div>
            <div className="col-3 py-2 text-center onHover2">7000 <i class="fa fa-inr" /></div>
            <div className="col-3 py-2 text-center grayClr">15000 <i class="fa fa-inr" /></div>
            <div className="col-3 py-2 text-center grayClr">30000 <i class="fa fa-inr" /></div>
          </div>
          <div className="row mx-1">
            <div className="col-3 py-2 padRemov"><TotalSaving /></div>
            <div className="col-3 py-2 text-center onHover2">700  <i class="fa fa-inr" /></div>
            <div className="col-3 py-2 text-center grayClr">2250  <i class="fa fa-inr" /></div>
            <div className="col-3 py-2 text-center grayClr">6000  <i class="fa fa-inr" /></div>
          </div>
          <div className="row mx-1">
            <div className="col-3 py-2 padRemov"><TotalAmount /></div>
            <div className="col-3 py-2 text-center onHover2 borderLast">6300 <i class="fa fa-inr" /></div>
            <div className="col-3 py-2 text-center grayClr">12750 <i class="fa fa-inr" /></div>
            <div className="col-3 py-2 text-center grayClr">24000 <i class="fa fa-inr" /></div>
          </div>
        </div>
        {/* Payment Details end */}

        {/* Number of Days start */}
        <NumberOfDays />
        {/* Number of Days end */}

        {/* pay with UPI start */}
        <PayWitUPI />
        {/* pay with UPI end */}

        {/* pay with UPI other start */}
        <PayWitOtherOpt />
        {/* pay with UPI other end */}








      </section>
    </>
  )
}

export default MainContainer
