import React, { useEffect, useState } from "react";
import "../Style/InsideProduct.css";
import { SlLocationPin } from "react-icons/sl";
import size12 from "../Images/size12.svg";
import size14 from "../Images/size14.svg";
import size16 from "../Images/size16.svg";
import size12active from "../Images/size12active.svg";
import size14active from "../Images/size14active.svg";
import size16active from "../Images/size16active.svg";

function InsideProduct(props) {
  const data = props.data;
  const sizes = data.sizes || [];
  const [active, setActive] = useState(1);
  const handleSizeClick = (index) => {
    setActive(index);
  };
  const images = [size12, size14, size16];
  const imagesActive = [size12active, size14active, size16active];

  return (
    <div>
      <main>
        <div className="product-banner">
          <img src={data.img} alt="" />
          <div className="product-name">
            <h1>{data.name}</h1>
            <p>{active !== null ? sizes[active]?.calories : ""}</p>
          </div>
        </div>
        <div className="product-customized">
          <div className="product-left">
            <h1>Size options</h1>
            <div className="sizes">
              {sizes.map((size, index) => (
                <div
                  className="size"
                  key={index}
                  onClick={() => handleSizeClick(index)}
                >
                  <img
                    className={`${index === active ? "active" : ""}`}
                    src={index === active ? imagesActive[index] : images[index]}
                    alt=""
                  />
                  <h5>{size.size}</h5>
                  <p>{size.capacity}</p>
                </div>
              ))}
            </div>
            <p>
              <SlLocationPin /> Select a store to view availability
            </p>
          </div>
          <div className="product-right">
            <h1>What's included</h1>
          </div>
        </div>
      </main>
    </div>
  );
}

export default InsideProduct;
