import React from 'react'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
              {/* <Header/> */}
              <div className="container">
                    <Outlet/>
                    
              </div>
              {/* <Footer />
              <User/>
              <ProductViewModal/> */}
    </>  
  )
}

export default Layout