import React, { useContext, useState } from "react";
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
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";

function InsideProduct(props) {
  const data = props.data;
  const sizes = data.sizes || [];
  const [active, setActive] = useState(1);

  const {basketData,setBasketData}=useContext(DataContext)
  const handleSizeClick = (index) => {
    setActive(index);
  };
  const images = [size12, size14, size16, size20, size20];
  const imagesActive = [
    size12active,
    size14active,
    size16active,
    size20active,
    size20active,
  ];

  const handleAddBasket=()=>{
    setBasketData([...basketData,data])
    console.log(basketData);
  }

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
            <p className="product-left-bottom">
              <SlLocationPin /> Select a store to view availability
            </p>
          </div>
          <div className="product-right">
            <h1 className="res-h">What's included</h1>
            <div className="customized">
              <form>
                <fieldset>
                  <legend>Milk</legend>
                  <select name="" id="">
                    <option value="">Milk Foam</option>
                    <option value="">Extra Milk Foam</option>
                    <option value="">Light Milk Foam</option>
                    <option value="">No Milk Foam</option>
                  </select>
                </fieldset>
                <fieldset>
                  <legend>Milk</legend>
                  <select name="" id="">
                    <option value="">Heavy Cream</option>
                    <option value="">Vanilla Sweet Cream</option>
                    <option value="">2% Milk</option>
                    <option value="">Whole Milk</option>
                  </select>
                </fieldset>
                <fieldset>
                  <legend>Milk</legend>
                  <select name="" id="">
                    <option value="">Warm</option>
                    <option value="">Steamed Hot</option>
                    <option value="">Extra Hot</option>
                  </select>
                </fieldset>
                <fieldset>
                  <legend>Add-ins</legend>
                  <select name="" id="">
                    <option value="">Press of Partanna® Olive Oil</option>
                  </select>
                </fieldset>
                <fieldset>
                  <legend>Espresso & Shot Options</legend>
                  <select name="" id="">
                    <option value="">Signature Espresso Roast</option>
                    <option value="">Blonde Espresso Roast</option>
                    <option value="">Decaf Espresso Roast</option>
                    <option value="">1/3 Decaf Espresso Roast</option>
                    <option value="">1/2 Decaf Espresso Roast</option>
                    <option value="">2/3 Decaf Espresso Roast</option>
                  </select>
                </fieldset>
              </form>
              <button className="btn-customize">
                {" "}
                <GiFairyWand className="btn-icon" /> Customize
              </button>
            </div>
          </div>
        </div>
        <div className="product-summary">
          <div className="summary-texts">
            <p>
              <span>200</span>
              <span>★</span>
              <span>item</span>
            </p>
            <p>
              A select blend of rich, full-leaf black teas from India and Sri
              Lanka sweetened with liquid cane sugar and combined with milk and
              ice.
            </p>
            <p>140 calories, 25g sugar, 2.5g fat</p>
            <Link>Full nutrition & ingredients list</Link>
          </div>
          <button
            onClick={handleAddBasket}
            className="btn-add"
          >
            Add to Order
          </button>
        </div>
      </main>
    </div>
  );
}

export default InsideProduct;
