import React from "react";
import "../Style/People.css";
import foto1 from "../Images/137-73340.jpg";
import foto2 from "../Images/137-73341.jpg";
import foto3 from "../Images/137-73342.jpg";
import { Link } from "react-router-dom";

function People() {
  return (
    <div className="People-Page">
      <div className="container">
        <div className="top-text">
          <strong>PUTTING PEOPLE FIRST</strong>
          <p>
            We’re investing in the well-being of those we connect with, working
            hard toward a better future.
          </p>
        </div>
        <div className="boxes">
          <div className="box">
            <div className="image">
              <img src={foto1} alt="" />
            </div>
            <div className="text">
              <h1>Inclusion & Diversity</h1>
              <p>
                Our commitment to equal opportunity means cultivating an
                environment where differences are embraced and building a
                culture that fosters a sense of belonging.
              </p>
              <Link>Find examples</Link>
            </div>
          </div>
          <div className="box revarse">
            <div className="image">
              <img src={foto2} alt="" />
            </div>
            <div className="text">
              <h1>Opportunity</h1>
              <p>
                We put our partners (employees) first, empowering them by
                providing meaningful opportunities to pursue their aspirations.
              </p>
              <Link>Read stories</Link>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={foto3} alt="" />
            </div>
            <div className="text">
              <h1>Community</h1>
              <p>
                Across the globe, we serve to strengthen each community we are
                part of by being the neighbor every neighborhood wants.
              </p>
              <Link>See how</Link>
            </div>
          </div>
        </div>
        <div className="top-text">
          <strong>SEE WHAT’S NEXT</strong>
          <p >
            Follow the latest ways we’re supporting and strengthening the people
            around us.
          </p>
          <Link>Learn more</Link>
        </div>
      </div>
    </div>
  );
}

export default People;
