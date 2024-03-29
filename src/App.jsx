import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Footer from "./Components/Footer";
import Rewards from "./Pages/Rewards";
import Card from "./Pages/Card";
import Previous from "./Pages/Previous.jsx";
import Favorites from "./Pages/Favorites.jsx";
import OurCompany from "./Pages/OurCompany.jsx";
import Coffee from "./Pages/Coffee.jsx";
import People from "./Pages/People.jsx";
import Planet from "./Pages/Planet.jsx";
import Services from "./Pages/Services.jsx";
import Featured from "./Pages/Featured.jsx";
import MainMenu from "./Pages/MainMenu.jsx";
import MainDrinks from "./Components/MainDrinks.jsx";
import Product from "./Pages/Product.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />}>
          <Route path="" element={<MainMenu />}>
            <Route path="drinks/:id" element={<MainDrinks />} />
          </Route>
          <Route path="product/:id" element={<Product/>}/>  
          <Route path="previous" element={<Previous />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="featured" element={<Featured />} />
        </Route>
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/gift" element={<Card />} />
        <Route path="/about-us/" element={<OurCompany />} />
        <Route path="/coffee/" element={<Coffee />} />
        <Route path="/responsibility/people/" element={<People />} />
        <Route path="/responsibility/planet/" element={<Planet />} />
        <Route path="/sbux" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
