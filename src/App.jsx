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
import MainCard from "./Pages/MainCard.jsx";
import AllCards from "./Pages/AllCards.jsx";
import Basket from "./Pages/Basket.jsx";
import DataContext from "./context/DataContext.jsx";
import { useState } from "react";

function App() {
  const [basketData,setBasketData]=useState([])
  return (
    <>
      <Header />
      <DataContext.Provider value={{basketData,setBasketData}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />}>
            <Route path="" element={<MainMenu />}>
              <Route path="drinks/:id" element={<MainDrinks />} />
            </Route>
            <Route path="cart" element={<Basket />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="previous" element={<Previous />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="featured" element={<Featured />} />
          </Route>
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/gift" element={<Card />} />
          <Route path="/gift/:id" element={<MainCard />} />
          <Route path="/gift/category/:id" element={<AllCards />} />
          <Route path="/about-us/" element={<OurCompany />} />
          <Route path="/coffee/" element={<Coffee />} />
          <Route path="/responsibility/people/" element={<People />} />
          <Route path="/responsibility/planet/" element={<Planet />} />
          <Route path="/sbux" element={<Services />} />
        </Routes>
      </DataContext.Provider>
      <Footer />
    </>
  );
}

export default App;
