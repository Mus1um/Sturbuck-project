import React from 'react'
import '../Style/Menubanner.css'
import {NavLink  } from 'react-router-dom'

function Menubanner() {
  return (
    <div className='menu-header'>
      <nav>
        <div className="banner">
        <ul>
          <li>
            <NavLink to='/menu' >Menu</NavLink>
          </li>
          <li>
            <NavLink to='featured'>Featured</NavLink>
          </li>
          <li>
            <NavLink to='previous'>Previous</NavLink>
          </li>
          <li>
            <NavLink to='favorites'>Favorites</NavLink>
          </li>
        </ul>
      </div>
      </nav>
    </div>
  )
}

export default Menubanner
