import React from "react";
import foto1 from "../Images/foto1.webp";
import foto2 from "../Images/foto2.webp";
import foto3 from "../Images/foto3.webp";
import foto4 from "../Images/foto4.jpg";
import foto5 from "../Images/foto5.jpg";
import foto6 from "../Images/foto6.webp";
import foto7 from "../Images/foto7.webp";
import foto8 from "../Images/foto8.webp";
import "../Style/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <section>
        <div className="home-card">
          <div className="card-left">
            <img src={foto1} alt="" />
          </div>
          <div className="card-right">
            <div className="text">
              <h1>You + Starbucks Rewards = ❤️</h1>
              <p>
                Sounds like a perfect match. Everything you need is in the app:
                download and start earning free drinks and more. Plus, enjoy
                mobile ordering and offers made just for you.
              </p>
              <Link>Get the app</Link>
            </div>
          </div>
        </div>
        <div className="home-card  reverse-section">
          <div className="card-left">
            <img src={foto2} alt="" />
          </div>
          <div className="card-right">
            <div className="text">
              <h1>What the heart wants</h1>
              <p>
                Treat yourself and a friend to swirls of happiness and rich java
                chips with the new Chocolate-Covered Strawberry Crème
                Frappuccino® drink. Here for a limited time.
              </p>
              <Link>Order now</Link>
            </div>
          </div>
        </div>
        <div className="home-card">
          <div className="card-left">
            <img src={foto3} alt="" />
          </div>
          <div className="card-right">
            <div className="text">
              <h1>Totally smitten</h1>
              <p>
                Join your Val pal and indulge in the new Chocolate Hazelnut
                Cookie Cold Brew, a decadent coffee confection with chocolaty
                cookie crumbles. Here for a limited time.
              </p>
              <Link>Order now</Link>
            </div>
          </div>
        </div>
        <div className="home-card  reverse-section">
          <div className="card-left">
            <img src={foto4} alt="" />
          </div>
          <div className="card-right">
            <div className="text">
              <h1>Share the love</h1>
              <p>
                A heartfelt Starbucks eGift is sure to make them smile this
                Valentine’s Day.
              </p>
              <Link>Send an eGift</Link>
            </div>
          </div>
        </div>
        <div className="home-card">
          <div className="card-left">
            <img src={foto5} alt="" />
          </div>
          <div className="card-right">
            <div className="text">
              <h1>Happy Lunar New Year</h1>
              <p>
                It’s the dragon’s time to shine with this Starbucks eGift, the
                perfect way to wish someone a happy 2024.
              </p>
              <Link>Send an eGift</Link>
            </div>
          </div>
        </div>
        <div className="home-card  reverse-section">
          <div className="card-left">
            <img src={foto6} alt="" />
          </div>
          <div className="card-right">
            <div className="text">
              <h1>Bold and bright</h1>
              <p>
                Celebrate the Year of the Dragon with the fruity, lively Dragon
                Drink™.
              </p>
              <Link>Order now</Link>
            </div>
          </div>
        </div>
        <div className="home-card">
          <div className="card-left">
            <img src={foto7} alt="" />
          </div>
          <div className="card-right">
            <div className="text">
              <h1>Deliver the love</h1>
              <p>
                Send your loved ones their favorites with a Starbucks® delivery
                on DoorDash and Uber Eats. Menu limited.*{" "}
              </p>
              <Link>Order now</Link>
            </div>
          </div>
        </div>
        <div className="home-card reverse-section">
          <div className="card-left">
            <img src={foto8} alt="" />
          </div>
          <div className="card-right">
            <div className="text">
              <h1>“A smile makes a big difference.”</h1>
              <p> - Brenda, Starbucks Partner (Employee)</p>
              <p>
                Our partners uplift each other and their communities every day.
              </p>
              <Link>Learn more</Link>
            </div>
          </div>
        </div>
        <div className="text-bottom">
          <p>
            *At participating stores only. Some restrictions apply. Linked Card
            members will earn 2% Cash Back on the full purchase price of every
            Qualifying Purchase. Bonus Star offer excludes taxes and tips. Stars
            may not be earned on purchases of alcohol or on reloads of Starbucks
            Cards that are not registered. For full details, visit
            www.starbucks.com/bofa. Bank of America, N.A. Member FDIC.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
