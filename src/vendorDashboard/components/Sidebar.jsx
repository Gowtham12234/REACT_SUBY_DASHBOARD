import React from 'react'

const Sidebar = ({ShowAddFirmHandler,ShowAddProductHandler,ShowAllProductsHandler,showFirmTitle}) => {
  return (
    <>
      <div className="sidebar">
        <ul>
          {showFirmTitle ? <li onClick={ShowAddFirmHandler}>Add-Firm</li>:""}
          <li onClick={ShowAddProductHandler}>Add-Product</li>
          <li onClick={ShowAllProductsHandler}>All-Products</li>
          <li>User Details</li>
        </ul>
      </div>

    </>
  )
}

export default Sidebar