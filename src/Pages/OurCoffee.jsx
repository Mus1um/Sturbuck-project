import React from "react";
import { Link } from "react-router-dom";
import foto1 from "../Images/137-78073.webp";
import foto2 from "../Images/137-71809.webp";
import foto3 from "../Images/137-71810.webp";
import '../Style/OurCoffee.css'

function OurCoffee() {
  return (
    <div className="section">
        <div className="container">
              <div className="boxes">
        <div className="box">
          <h1>Let's talk coffee</h1>
          <p>
            Whether you're searching for something new to warm your mug, seeking
            the best brew method for your favorite blend or exploring our rarest
            offerings, you’ve come to the right place.
          </p>
          <img src={foto1} alt="" />
        </div>
        <div className="box">
 
          <h1>Find your favorite at-home coffee</h1>
          <p>
            From K-Cup pods to Starbucks® Premium Instant, we offer a wide
            selection of coffee to fill your cup.
          </p>
          <Link className="link-tvo">Browse our coffees</Link>
          <p>
            Still undecided? Our new Coffee Quiz makes it easy to find the
            Starbucks® coffee that's made to be yours. Just answer five
            questions to find the one.
          </p>
          <Link className="link-four">Start Quiz</Link>
          <img src={foto2} alt="" />
        </div>
        <div className="box">
          
          <h1>The rarest, most extraordinary coffees Starbucks has to offer</h1>
          <p>
            Exceptional coffees from around the world. Sourced for the season,
            roasted at Starbucks Reserve® Roasteries and crafted with care.
          </p>
          <Link className="link-three">Explore Starbucks Reserve®</Link>
          <img src={foto3} alt="" />
        </div>
        <div className="box">
        
          <h1>How to brew</h1>
          <p>
            Whether you’re a coffee novice or a seasoned pro, we have all the
            tools you need to bring your brewing game to the next level.
          </p>
          <Link className="link-three">Learn to brew your perfect cup</Link>
          <p className="p2">
            Starbucks and the Starbucks logo are registered trademarks of
            Starbucks Corporation used under license by Nestlé.
          </p>
          <p className="p2">
            Keurig, K-Cup, and the Keurig trade dress are trademarks of Keurig
            Green Mountain, Inc., used with permission. Pike Place is a
            registered trademark of The Pike Place Market PDA, used under
            license.
          </p>
        </div>
      </div>
        </div>
    
    </div>
  );
}

export default OurCoffee;
