import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Layout from './Layout'
import Home from '../pages/Home'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'

const Rountes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path='/' element={<Home/>} />
                <Route path="/signup" element={<Signup />}/>
                <Route path="/signin" element={<Signin />}/>
            </Route>
        </Routes>     
  </BrowserRouter>
  )
}

export default Rountes