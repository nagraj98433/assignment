import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
// import HeaderWitIconPay from './Care24_assigment/Header_wit_icon_pay/HeaderWitIconPay'
import MainContainer from './Care24_assigment/MainContainer';
import Home from './Home';
import './App.css'


function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<MainContainer />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App


// btn bg: #e8f6ff
// payment color:#313131
// amount color:#b6b6b6
// UPI color: #007cba
// border color: #89b2bd