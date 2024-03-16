import React from "react";
import { Link } from "react-router-dom";
import fotogreen from "../Images/137-73350.webp";
import foto1 from '../Images/137-73351.webp';
import foto2 from '../Images/137-73352.webp';
import foto3 from '../Images/137-73353.webp';
import foto4 from '../Images/137-73354.webp';
import foto5 from '../Images/137-73355.webp';

function Planet() {
  return (
    <div className="Planet-page">
      <div className="container">
        <div className="top-text" style={{padding:'40px 590px'}}>
          <strong>BECOMING RESOURCE POSITIVE</strong>
          <p>
            We are committed to becoming resource positive – to give more than
            we take from the planet. We will store more carbon than we emit,
            eliminate waste and conserve and replenish more freshwater than we
            use.
          </p>
        </div>
        <div className="boxes">
          <div className="box">
            <div className="image">
              <img src={fotogreen} alt="" />
            </div>
            <div className="text">
              <h1>2030 COMMITMENTS</h1>
              <p>
                Starbucks set a multi-decade commitment to reduce our carbon,
                our water and our waste footprints by half by 2030.
              </p>
              <Link>Read more</Link>
            </div>
          </div>
        </div>
        <div className="top-text">
          <strong>AREAS OF FOCUS</strong>
          <p>
            We’re driving innovation at scale to achieve our 2030 targets
            through these five focus areas:
          </p>
        </div>
        <div className="boxes">
          <div className="box">
            <div className="image">
              <img src={foto1} alt="" />
            </div>
            <div className="text" style={{backgroundColor:'white'}}>
              <p className="planet-text">               
Expanding <b>plant-based menu options</b>
              </p>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={foto2} alt="" />
            </div>
            <div className="text" style={{backgroundColor:'white'}}>
              <p className="planet-text">               
              Shifting away from single-use to <b>reusable packaging</b> 

              </p>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={foto3} alt="" />
            </div>
            <div className="text" style={{backgroundColor:'white'}}>
              <p className="planet-text">               
              Investing in <b>regenerative agriculture, reforestation, forest conservation and water replenishment</b>  in our supply chain
              </p>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={foto4} alt="" />
            </div>
            <div className="text" style={{backgroundColor:'white'}}>
              <p className="planet-text">               

              Working on better ways to <b>manage our waste</b>
              </p>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={foto5} alt="" />
            </div>
            <div className="text" style={{backgroundColor:'white'}}>
              <p className="planet-text">               
              Innovating with more <b>responsible stores,</b> operations, manufacturing and delivery
              </p>
            </div>
          </div>
        </div>
        <div className="top-text" style={{padding:'40px 590px'}}>
          <strong>PROGRESS TOWARD OUR COMMITMENTS</strong>
          <p>
            Starbucks is committed to transparency. Learn more about our
            commitments to the planet and our progress on our Environmental and
            Social Impact Reporting Hub.
          </p>
          <Link>Learn more</Link>
        </div>
        <div className="top-text" style={{padding:'40px 590px'}}>
          <strong>ETHICAL SOURCING STANDARDS</strong>
          <p>
          Track the responsible ways we produce and purchase our coffee, tea, cocoa and manufactured goods.
          </p>
          <Link>Learn more</Link>
        </div>
        <div className="top-text" >
          <strong>ALL THE LATEST</strong>
          <p>
          Stay up to date with Starbucks commitment to environmental sustainability.
          </p>
          <Link>Get news now</Link>
        </div>
      </div>
    </div>
  );
}

export default Planet;
