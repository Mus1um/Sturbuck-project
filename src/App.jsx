
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Footer from "./Components/Footer";
import Rewards from "./Pages/Rewards";
import Card from "./Pages/Card";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/rewards" element={<Rewards/>}/>
        <Route path="/gift" element={<Card/>}/>
      </Routes>
      <Footer/>
     
    </>
  );
}

export default App;
