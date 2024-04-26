import React, { useContext, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "../Style/BottomDrawer.css";
import { SlArrowDown } from "react-icons/sl";

import { IoBag } from "react-icons/io5";
import DataContext from "../context/DataContext";

function BottomDrawer() {
  const [selected, setSelected] = useState(false);
  const {basketData,setBasketData}=useContext(DataContext)
  const {pathname}=useLocation()
  const {id} =useParams()
  const handleselected = () => {
    setSelected(!selected);

    document.body.style.overflow = selected ? "visible" : "hidden";
  };


  return (
    <div className="bottomdrawer" style={{display:pathname==="/menu/cart"? 'none' : 'block'}}>
      <div className="modal" style={{ display: selected ? "flex" : "none" }}>
        <div className="box" style={{ transform: selected ? "scale(1)" : "" }}>
          <p>Please select a store before continuing to the cart.</p>
          <div className="buttons">
            <Link onClick={handleselected}>Cancel</Link>
            <Link to='cart' >Select Store</Link>
          </div>
        </div>
      </div>
      <div className="drawer" style={{ display: selected ? "none" : "flex" }}>
        <div className="left">
          <Link>
            <p>
              <span>For item availability</span>
              <strong>Choose a store</strong>
            </p>
            <SlArrowDown className="sl" />
          </Link>
        </div>
        <div className="right">
          <h3>{basketData.length!==0 && basketData.length}</h3>
          <button onClick={handleselected}>
            <IoBag
              className="bag"
              style={{ color: basketData.length>0  ? "#00a862" : "" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BottomDrawer;
