import "../Style/Category.css";

function Category(props) {
  const data = props.DrinksCategory;
  return (
    <div className="category">
      <h1>Drinks</h1>
      <ul key={data.id}>
        {data.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default Category;
