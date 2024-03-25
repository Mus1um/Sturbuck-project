import React from 'react'
import '../Style/Menu.css'
import Menubanner from '../Components/Menubanner'
import BattomDrawer from '../Components/BottomDrawer'
import { Outlet } from 'react-router-dom'



function Menu() {
  
  return (
    <div className='menu'>
      <Menubanner/>
      <Outlet/>
      <BattomDrawer/>
    </div>
  )
}

export default Menu
