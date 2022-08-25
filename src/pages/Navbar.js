import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className="navbar">
            <div>
            <h1>Campus Management System</h1>
            </div>
            <div className='links'>
            <Link to={"/campusPage"}>CAMPUS</Link>
            <Link to={"/buildingPage"} >BUILDINGS</Link>
            <Link to={"/add-campus"} >ADD CAMPUS</Link>
            </div>
        </div>
    </>
  )
}

export default Navbar