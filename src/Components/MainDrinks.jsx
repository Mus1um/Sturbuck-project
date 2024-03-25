import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import "../Style/MainDrinks.css";

function MainDrinks() {
  const [categoryData, setCategoryData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchingData();
  }, []);
  function fetchingData() {
    axios.get("http://localhost:3000/coffee").then((res) => {
      setCategoryData(res.data);
    });
  }
  const filterCategory = categoryData?.filter(
    (item) => item.subcategory === id
  );
  return (
    <div className="main-drinks">
      <div className="drink-cards">
      {filterCategory?.map((item) => {
        return (
          <Link key={item.id}>
          <div className="drink-card" >
            <img src={item.img} alt="" />
            <p>{item.name}</p>
          </div>
          </Link>
        );
      })}
      </div>
     
    </div>
  );
}

export default MainDrinks;
