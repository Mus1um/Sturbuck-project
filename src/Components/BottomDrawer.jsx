import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Style/BottomDrawer.css'
import { SlArrowDown } from "react-icons/sl";
import { IoBagOutline } from "react-icons/io5";

function BottomDrawer() {
    const [selected,setSelected]=useState(false)
    const handleselected=()=>{
        setTimeout(()=>{
   setSelected(!selected)
        },200)
     
    }
  return (
    <div className='bottomdrawer'>
        <div className="modal" style={{display:selected ? 'flex' :'none'}}>
            <div className="box" style={{transform:selected ? 'scale(1)' :''}}>
                <p>Please select a store before continuing to the cart.</p>
                <div className="buttons">
                    <Link onClick={handleselected}>Cancel</Link>
                    <Link>Select Store</Link>
                </div>
            </div>
        </div>
        <div className="drawer" style={{display:selected? 'none':'flex'}}>
            <div className="left">
         <Link>
         <p>
         <span>For item availability</span>
         <strong>Choose a store</strong>
         </p>
         <SlArrowDown className='sl'/>
         </Link>
        </div>
        <div className="right">
       <button onClick={handleselected}><IoBagOutline className='bag' /></button>
        </div>
        </div>
        
      
    </div>
  )
}

export default BottomDrawer
