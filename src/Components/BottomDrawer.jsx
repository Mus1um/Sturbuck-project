import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/BottomDrawer.css";
import { SlArrowDown } from "react-icons/sl";

import { IoBag } from "react-icons/io5";

function BottomDrawer() {
  const [selected, setSelected] = useState(false);
  const [btnClick, setBtnClick] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const handleselected = () => {
    setSelected(!selected);

    document.body.style.overflow = selected ? "visible" : "hidden";
  };
  const handleBtnClick = () => {
    setBtnClick(true)
    if ( clickCount < 15) {
        setClickCount(click=>click+1)  
    }else{
        alert('Maximum order is 15 items. Please adjust your order.')
    }
  };

  return (
    <div className="bottomdrawer">
      <div className="modal" style={{ display: selected ? "flex" : "none" }}>
        <div className="box" style={{ transform: selected ? "scale(1)" : "" }}>
          <p>Please select a store before continuing to the cart.</p>
          <div className="buttons">
            <Link onClick={handleselected}>Cancel</Link>
            <Link>Select Store</Link>
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
          <h3>{clickCount>0? clickCount :''}</h3>
          <button onClick={handleselected}>
            <IoBag
              className="bag"
              style={{ color: btnClick ? "#00a862" : "" }}
            />
          </button>
        </div>
      </div>
      <button onClick={handleBtnClick} className="btn-add">
        Add to Order
      </button>
    </div>
  );
}

export default BottomDrawer;
