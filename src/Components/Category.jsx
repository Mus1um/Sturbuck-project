import { useState } from "react";
import "../Style/Category.css";

function Category(props) {
  const [clicked,setClikced]=useState(false)
  const handleClick=(name)=>{
    console.log(name);
  }
  const data = props.categoryData;
  return (
    <div className="category">
      <h1>Drinks</h1>
      <ul >
        {data.map((item) => {
          return <li onClick={()=>handleClick(item.name)} key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Category;
