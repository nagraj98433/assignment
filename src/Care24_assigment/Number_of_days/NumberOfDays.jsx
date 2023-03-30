import React, { useState } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import '../All_styls/NumberOfDays.css'

function NumberOfDays() {
  let [days, setdays] = useState('15 Days')


  const setStyle = () => {

  }




  return (
    <>
      <div className="container mt-4">
        <div className="row justify-content-between mx-1">
          <div className="col-3 myWidth">
            <button type="button" className="btn btn-outline-primary position-relative fw-bold">
              7 Days
              <span className="position-absolute top-0 left-0 start-100 translate-middle badge">
                <CheckCircleOutlineIcon />
              </span>
            </button>
          </div>
          <div className="col-3 text-end myWidth center">
            <button type="button" onClick={setStyle} className="btn btn-outline-primary position-relative fw-bold">
              {days}
              <span className="position-absolute top-0 left-0 start-100 translate-middle badge">
                <CheckCircleOutlineIcon />
              </span>
            </button>
          </div>
          <div className="col-3 text-end myWidth">
            <button type="button" className="btn btn-outline-primary position-relative fw-bold">
              30 Days
              <span className="position-absolute top-0 left-0 start-100 translate-middle badge">
                <CheckCircleOutlineIcon />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NumberOfDays
