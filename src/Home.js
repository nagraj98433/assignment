import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className='home'>
        <h1>Welcome on this page of Care24</h1>
        <h2>
          <Link to={"/"}>
            Click for Payment Page
          </Link>
        </h2>
      </div>
    </>
  )
}

export default Home
