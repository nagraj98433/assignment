import React, { useState } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import '../All_styls/NumberOfDays.css'
// import '../All_styls/common.css'

function NumberOfDays(props) {
  let [style, setstyle] = useState(props.isActive)



  const setStyle = () => {
    setstyle(style = false)
  }





  return (
    <>
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
            <button type="button" onClick={setStyle} className="btn btn-outline-primary position-relative fw-bold">
              15 Days
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
