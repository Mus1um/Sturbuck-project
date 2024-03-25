import "../Style/Category.css";
import { Link } from "react-router-dom";

function Category(props) {
  const data = props.categoryData;
  return (
    <div className="category">
      <h1>Drinks</h1>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`/menu/drinks/${item.name}`}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Category;
