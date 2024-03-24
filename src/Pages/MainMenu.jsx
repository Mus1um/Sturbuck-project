import axios from "axios";
import React, { useEffect, useState } from "react";
import Category from "../Components/Category";
import Drinks from "../Components/Drinks";
import "../Style/MainMenu.css";

function MainMenu() {
  const [data, setData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  function fetchingData() {
    axios.get("http://localhost:3000/coffee").then((res) => {
      setData(res.data);
    });
  }

  const AxiosData = () => {
    axios.get("http://localhost:3000/category").then((res) => {
      setCategoryData(res.data);
    });
  };


  useEffect(() => {
    fetchingData();
    AxiosData();
  }, []);
  return (
    <div className="menu-main">
      <Category categoryData={categoryData} />
      <Drinks data={data} />
    </div>
  );
}

export default MainMenu;
