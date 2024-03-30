import React, {  useState } from "react";
import "../Style/InsideProduct.css";
import { SlLocationPin } from "react-icons/sl";
import { GiFairyWand } from "react-icons/gi";
import size12 from "../Images/size12.svg";
import size14 from "../Images/size14.svg";
import size16 from "../Images/size16.svg";
import size20 from "../Images/size20.svg";
import size12active from "../Images/size12active.svg";
import size14active from "../Images/size14active.svg";
import size16active from "../Images/size16active.svg";
import size20active from "../Images/size20active.svg";

function InsideProduct(props) {
  const data = props.data;
  const sizes = data.sizes || [];
  const [active, setActive] = useState(1);
  const handleSizeClick = (index) => {
    setActive(index);
  };
  const images = [size12, size14, size16, size20];
  const imagesActive = [size12active, size14active, size16active, size20active];

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
                  <div
                    className="active"
                    style={{ display: index === active ? "block" : "none" }}
                  ></div>
                  <img
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
            <div className="customized">
              <form>
                <fieldset>
                  <legend>Milk</legend>
                  <select name="" id="">
                    <option value="">
                      <p>Milk Foam</p>
                    </option>
                    <option value="">
                      <p>Extra Milk Foam</p>
                    </option>
                    <option value="">
                      <p>Light Milk Foam</p>
                    </option>
                    <option value="">
                      <p>No Milk Foam</p>
                    </option>
                  </select>
                </fieldset>
                <fieldset>
                  <legend>Milk</legend>
                  <select name="" id="">
                    <option value="">
                      <p>Heavy Cream</p>
                    </option>
                    <option value="">
                      <p>Vanilla Sweet Cream</p>
                    </option>
                    <option value="">
                      <p>2% Milk</p>
                    </option>
                    <option value="">
                      <p>Whole Milk</p>
                    </option>
                  </select>
                </fieldset>
                <fieldset>
                  <legend>Milk</legend>
                  <select name="" id="">
                    <option value="">
                      <p>Warm</p>
                    </option>
                    <option value="">
                      <p>Steamed Hot</p>
                    </option>
                    <option value="">
                      <p>Extra Hot</p>
                    </option>
                  </select>
                </fieldset>
                <fieldset>
                  <legend>Add-ins</legend>
                  <select name="" id="">
                    <option value="">
                      <p>Press of Partanna® Olive Oil</p>
                    </option>
                  </select>
                </fieldset>
                <fieldset>
                  <legend>Espresso & Shot Options</legend>
                  <select name="" id="">
                    <option value="">
                      <p>Signature Espresso Roast</p>
                    </option>
                    <option value="">
                      <p>Blonde Espresso Roast</p>
                    </option>
                    <option value="">
                      <p>Decaf Espresso Roast</p>
                    </option>
                    <option value="">
                      <p>1/3 Decaf Espresso Roast</p>
                    </option>
                    <option value="">
                      <p>1/2 Decaf Espresso Roast</p>
                    </option>
                    <option value="">
                      <p>2/3 Decaf Espresso Roast</p>
                    </option>
                  </select>
                </fieldset>
              </form>
              <button className="btn-customize"> <GiFairyWand className="btn-icon" /> Customize</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default InsideProduct;
