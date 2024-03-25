import React from "react";
import "../Style/Drinks.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';


function Drinks(props) {
  const location = useLocation();

  const pathName=location.pathname.split("/")[location.pathname.split("/").length-1];
  const data = props.data;
  const uniqueData = Array.from(
    new Set(data.map((item) => item.subcategory))
  ).map((subcategory) => {
    const findData = data.find((item) => item.subcategory === subcategory);
    return (
      <div>
        <Link key={findData.id} to={`/menu/drinks/${findData.subcategory}`}>
          <div className="cardss">
            <img src={findData.img} alt="" />
            <p>{findData.subcategory}</p>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <div className="drinks">
      <div style={{display:location.pathname === "/menu" ? "none":'block'}}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/menu" underline="hover" style={{color:"#00000094"}} >
          Menu
        </Link>
        <Typography style={{color:"#00000094",fontWeight:'600'}}>{unescape(pathName)}</Typography>
      </Breadcrumbs>
    </div>
      <strong style={{display:location.pathname === "/menu" ? "block":'none'}}>Menu</strong>
      <div className="main">
        <h2>Drinks</h2>
        <div className="menu-coffes" >
          {location.pathname === "/menu" ? uniqueData : <Outlet />}
        </div>
      </div>
    </div>
  );
}

export default Drinks;
