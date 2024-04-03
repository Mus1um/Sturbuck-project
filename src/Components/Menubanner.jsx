import React, { useEffect, useState } from "react";
import "../Style/Menubanner.css";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import axios from "axios";

function Menubanner() {
  const { pathname } = useLocation();
  const [data, setData] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const { id } = useParams();
  useEffect(() => {
    fetchingData();
  }, [pathname]);
  function fetchingData() {
    axios.get(`http://localhost:3000/coffee/${id}`).then((res) => {
      setData(res.data);
      setCategoryName(res.data.subcategory);
    });
  }

  return (
    <div className="menu-header">
      <nav>
        <div
          className={`banner ${
            pathname === "/menu/featured" ? "bannerHidden" : ""
          }`}
        >
          <div 
            style={{
              display: pathname === `/menu/product/${id}` ? "block" : "none",
            }}
          >
            <Breadcrumbs aria-label="breadcrumb">
              <Link to="/menu" underline="hover" style={{ color: "#00000094" }}>
                Menu
              </Link>
              <Link
                to={`drinks/${categoryName}`}
                underline="hover"
                style={{ color: "#00000094" }}
              >
                {categoryName}
              </Link>
              <Typography style={{ color: "#00000094", fontWeight: "600" }}>
                {data.name}
              </Typography>
            </Breadcrumbs>
          </div>
          <ul
            style={{
              display: pathname === `/menu/product/${id}` ? "none" : "flex",
            }}
          >
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="featured">Featured</NavLink>
            </li>
            <li>
              <NavLink to="previous">Previous</NavLink>
            </li>
            <li>
              <NavLink to="favorites">Favorites</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menubanner;
