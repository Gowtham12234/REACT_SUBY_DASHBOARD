import React from 'react'

const Navbar = ({ShowLoginHandler,ShowRegisterhandle,showLogOut,logouthandler}) => {
  const firmname=localStorage.getItem('firmname')
  return (
    <>
      <div className="navSection">
        <div className="company">
          <h2>Vendor dashboard</h2>
        </div>
        <div className="firmname">
          <h4>{firmname}</h4>
        </div>
        <div className="userAuth">
          {!showLogOut ? <>
          <span onClick={ShowLoginHandler} >Login / </span>
          <span onClick={ShowRegisterhandle}>Register</span>
          </>:<span onClick={logouthandler}>logout</span> }
          
          
          
        </div>
      </div>
    </>
  )
}

export default Navbar