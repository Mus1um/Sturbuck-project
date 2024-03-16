import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Footer from "./Components/Footer";
import Rewards from "./Pages/Rewards";
import Card from "./Pages/Card";
import Previous from './Pages/Previous.jsx'
import Favorites from './Pages/Favorites.jsx'
import Menu2 from './Pages/Menu2.jsx'
import OurCompany from "./Pages/OurCompany.jsx";
import OurCoffee from "./Pages/OurCoffee.jsx";
import People from "./Pages/People.jsx";
import Planet from "./Pages/Planet.jsx";
import Services from "./Pages/Services.jsx";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>} >
          <Route index element={<Menu2/>}/>
          <Route path="previous" element={<Previous/>}/>
          <Route path="favorites" element={<Favorites/>}/>
        </Route>
        <Route path="/rewards" element={<Rewards/>}/>
        <Route path="/gift" element={<Card/>}/>
        <Route path="/about-us/" element={<OurCompany/>}/>
        <Route path="/coffee/" element={<OurCoffee/>} />
        <Route path="/responsibility/people/" element={<People/>}/>
        <Route path="/responsibility/planet/" element={<Planet/>}/>
        <Route path="/sbux" element={<Services/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
