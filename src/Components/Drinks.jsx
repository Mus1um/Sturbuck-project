import React from "react";
import "../Style/Drinks.css";
import { Link } from "react-router-dom";

function Drinks(props) {
  const data = props.data;
  const uniqueData=Array.from(new Set(data.map((item) => item.subcategory))).map(
    (subcategory) => {
      const findData = data.find(
        (item) => item.subcategory === subcategory
      );
      return (
        <Link to={`/${findData.subcategory}`}>
        <div  className="cardss" key={findData.id}>
          <img src={findData.img} alt="" />
          <p>{findData.subcategory}</p>
        </div>
        </Link>
        
      );
    }
  )


  return (
    <div className="drinks">
      <strong>Menu</strong>
      <div className="main">
        <h2>Drinks</h2>
        <div className="menu-coffes">
          {uniqueData}
        </div>
      </div>
    </div>
  );
}

export default Drinks;
