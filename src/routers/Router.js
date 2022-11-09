import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Menu from '../components/common/Menu'
import Submenu from '../components/common/Submenu'
import Home from '../layouts/Home'

const Router = () => {
  return (
    <div>
      <Menu/>
      <Submenu/>
         <Routes>
  
        <Route path="/" exact element={<Home />} />

      </Routes>
    </div>
  )
}

export default Router