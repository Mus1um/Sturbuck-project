import React, { useEffect, useState } from "react";
import "../Style/Rewards.css";
import { Link } from "react-router-dom";
import fotoone from "../Images/one-foto.webp";
import fototwo from "../Images/two-foto.webp";
import fotothree from "../Images/three-foto.webp";
import telone from "../Images/tel-one.png";
import teltwo from "../Images/tel-two.webp";
import telthree from "../Images/tel-three.png";
import telfour from "../Images/tel-four.webp";
import foto25 from "../Images/025.webp";
import foto100 from "../Images/100.webp";
import foto200 from "../Images/200.webp";
import foto300 from "../Images/300.webp";
import foto400 from "../Images/400.webp";
import america from "../Images/bank-of-america.webp";
import skymiles from "../Images/delta-skymiles.webp";

function Rewards() {
  const [selectedCard, setSelectedCard] = useState(false);
  const handleButtonClick = (index) => {
    setSelectedCard(index === selectedCard ? false : index);
    if (index === selectedCard) {
      setSelectedCard(index);
    }
  };
  useEffect(() => {
    setSelectedCard(1);
  }, []);
  return (
    <div className="rewards">
      <div className="banner">
        <h1>STARBUCKS® REWARDS</h1>
        <Link className="banner-link">Join in the app</Link>
      </div>
      <section>
        <div className="section-top">
          <div className="left">
            <div className="text">
              <h1>FREE COFFEE IS A TAP AWAY</h1>
              <p>Join now to start earning Rewards.</p>
              <Link>Join now</Link>
              <p>Or join in the app for the best experience</p>
            </div>
          </div>
        </div>
        <div className="section-center">
          <div className="getting">
            <div className="top">
              <h2>Getting started is easy</h2>
              <p>Earn Stars and get rewarded in a few easy steps.</p>
            </div>
            <div className="process">
              <div className="box">
                <div className="box-number">
                  <h1>1</h1>
                </div>

                <div className="box-text">
                  <h3>Create an account</h3>
                  <p>
                    To get started, join now. You can also join in the app to
                    get access to the full range of Starbucks® Rewards benefits.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="box-number">
                  <h1>2</h1>
                </div>

                <div className="box-text">
                  <h3>Order and pay how you’d like</h3>
                  <p>
                    Use cash, credit/debit card or save some time and pay right
                    through the app. You’ll collect Stars all ways. Learn how
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="box-number">
                <h1>3</h1>
                </div>
             
                <div className="box-text">
                  <h3>Earn Stars, get Rewards</h3>
                  <p>
                    As you earn Stars, you can redeem them for Rewards—like free
                    food, drinks, and more. Start redeeming with as little as 25
                    Stars!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="favorites">
            <div className="top">
              <h1>Get your favorites for free</h1>
              <div className="stars">
                <button
                  onClick={() => handleButtonClick(1)}
                  style={{
                    borderBottom:
                      selectedCard == 1 ? "4px solid #00754a" : "none",
                  }}
                >
                  <span>25</span> <span style={{ color: "#cba258" }}>★</span>
                </button>
                <button
                  style={{
                    borderBottom:
                      selectedCard == 2 ? "4px solid #00754a" : "none",
                  }}
                  onClick={() => handleButtonClick(2)}
                >
                  <span>100</span>
                  <span style={{ color: "#cba258" }}>★</span>
                </button>
                <button
                  style={{
                    borderBottom:
                      selectedCard == 3 ? "4px solid #00754a" : "none",
                  }}
                  onClick={() => handleButtonClick(3)}
                >
                  <span>200</span>
                  <span style={{ color: "#cba258" }}>★</span>
                  <div></div>
                </button>
                <button
                  style={{
                    borderBottom:
                      selectedCard == 4 ? "4px solid #00754a" : "none",
                  }}
                  onClick={() => handleButtonClick(4)}
                >
                  <span>300</span>
                  <span style={{ color: "#cba258" }}>★</span>
                  <div></div>
                </button>
                <button
                  style={{
                    borderBottom:
                      selectedCard == 5 ? "4px solid #00754a" : "none",
                  }}
                  onClick={() => handleButtonClick(5)}
                >
                  <span>400</span>
                  <span style={{ color: "#cba258" }}>★</span>
                  <div></div>
                </button>
              </div>
            </div>
            <div className="bottom">
              <div
                className="card"
                style={{ display: selectedCard == 1 ? "flex" : "none" }}
              >
                <img src={foto25} alt="" />
                <div className="text">
                  <h3>Customize your drink</h3>
                  <p>
                    Make your drink just right with an extra espresso shot,
                    nondairy milk or a dash of your favorite syrup.
                  </p>
                </div>
              </div>
              <div
                className="card"
                style={{ display: selectedCard == 2 ? "flex" : "none" }}
              >
                <img src={foto100} alt="" />
                <div className="text">
                  <h3>
                    Brewed hot or iced coffee or tea, bakery item, packaged
                    snack and more
                  </h3>
                  <p>
                    Treat yourself to an iced coffee, buttery croissant, bag of
                    chips and more.
                  </p>
                </div>
              </div>
              <div
                className="card"
                style={{ display: selectedCard == 3 ? "flex" : "none" }}
              >
                <img src={foto200} alt="" />
                <div className="text">
                  <h3>
                    Handcrafted drink (Cold Brew, lattes and more) or hot
                    breakfast
                  </h3>
                  <p>
                    Turn good mornings great with a delicious handcrafted drink
                    of your choice, breakfast sandwich or oatmeal on us.
                  </p>
                </div>
              </div>
              <div
                className="card"
                style={{ display: selectedCard == 4 ? "flex" : "none" }}
              >
                <img src={foto300} alt="" />
                <div className="text">
                  <h3>Sandwich, protein box or at-home coffee</h3>
                  <p>
                    Enjoy a PM pick-me-up with a lunch sandwich, protein box or
                    a bag of coffee—including Starbucks VIA Instant®.
                  </p>
                </div>
              </div>
              <div
                className="card"
                style={{ display: selectedCard == 5 ? "flex" : "none" }}
              >
                <img src={foto400} alt="" />
                <div className="text">
                  <h3>Select Starbucks® merchandise</h3>
                  <p>
                    Take home a signature cup, drink tumbler or your choice of
                    coffee merch up to $20.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="getting">
            <div className="top top-two">
              <h2>Endless Extras</h2>
              <p>
                Joining Starbucks® Rewards means unlocking access to exclusive
                benefits. Say hello to easy ordering, tasty Rewards and—yes,
                free coffee.
              </p>
            </div>
            <div className="process">
              <div className="box">
                <img src={fotoone} alt="" />
                <div className="box-text">
                <h3>Fun freebies</h3>
                <p>
                  Not only can you earn free coffee, look forward to a birthday
                  treat plus coffee and tea refills.
                </p>
                <p className="modal">Learn more</p>
                </div>
              
              </div>
              <div className="box">
                <img src={fototwo} alt="" />
                <div className="box-text">
                    <h3>Order & pay ahead</h3>
                <p>
                  Enjoy the convenience of in-store, curbside or drive-thru
                  pickup at select stores.
                </p>
                <p className="modal">Learn more</p>
                </div>
              
              </div>
              <div className="box">
                <img src={fotothree} alt="" />
                <div className="box-text">
                <h3>Get to free faster</h3>
                <p>
                  Earn Stars even quicker with Bonus Star challenges, Double
                  Star Days and exciting games.
                </p>
                <p className="modal">Learn more</p>
                </div>
              
              </div>
            </div>
          </div>
          <div className="cash-card">
            <div className="top">
              <h1>Cash or card, you earn Stars</h1>
              <p>
                No matter how you pay, you can earn Stars with your morning
                coffee. Those Stars add up to (really delicious) Rewards.
              </p>
            </div>
            <div className="bottom">
              <div className="dollar dollar-two">
                <div className="card">
                  <h2>1★ per dollar</h2>
                  <p>Pay as you go</p>
                </div>
                <div className="cart">
                  <img src={telone} alt="" />
                  <div className="cart-right">
                    <h3>Scan and pay separately</h3>
                    <p>Use cash or credit/debit card at the register.</p>
                  </div>
                </div>
                <div className="cart">
                  <img src={teltwo} alt="" />
                  <div className="cart-right">
                    <h3>Scan and pay separately</h3>
                    <p>
                      Check-out faster by saving a credit/debit card or PayPal
                      to your account. You’ll be able to order ahead or scan and
                      pay at the register in one step.
                    </p>
                  </div>
                </div>
              </div>
              <div className="dollar">
                <div className="card">
                  <h2>2★ per dollar</h2>
                  <p> Add funds in the app</p>
                </div>
                <div className="cart">
                  <img src={telthree} alt="" />
                  <div className="cart-right">
                    <h3>Preload</h3>
                    <p>
                      To save time and earn Stars twice as fast, add money to
                      your digital Starbucks Card using any payment option. Scan
                      and pay in one step or order ahead in the app.
                    </p>
                  </div>
                </div>
                <div className="cart">
                  <img src={telfour} alt="" />
                  <div className="cart-right">
                    <h3>Register your gift card</h3>
                    <p>
                      Then use it to pay through the app. You can even
                      consolidate balances from multiple cards in one place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rewards">
            <div className="inrewards">
              <div className="left-star"></div>
              <div className="boxs">
                <div className="top">
                  <h1>Keep the Rewards Coming</h1>
                  <p>
                    The Rewards don't stop at your morning coffee. Join
                    Starbucks® Rewards and unlock perks from our partners, all
                    while earning more Stars.
                  </p>
                </div>
                <div className="bottom">
                  <div className="box">
                    <img src={skymiles} alt="" />
                    <p>
                      <Link>Link your Delta SkyMiles®</Link> and Starbucks®
                      Rewards accounts to earn 1 mile per $1 spent at Starbucks
                      and double Stars on Delta travel days.<sup>1</sup>
                    </p>
                  </div>
                  <div className="box">
                    <img src={america} alt="" />
                    <p>
                      <Link>Link your Bank of America</Link> eligible card and
                      Starbucks® Rewards account to earn 2% Cash Back and Bonus
                      Stars on qualifying Starbucks in-app purchases.
                      <sup>2</sup>
                    </p>
                  </div>
                </div>
                <div className="link">
                  <Link>Join Starbucks® Rewards</Link>
                </div>
              </div>
              <div className="right-star"></div>
            </div>
          </div>
        </div>
        <div className="section-bottom">
          <div className="text-center">
            <h2>Questions?</h2>
            <p>
              We want to help in any way we can. You can ask your barista
              anytime or we’ve answered the most commonly asked questions
              <Link> right over here</Link>
            </p>
          </div>
          <div className="text-bottom">
            <div className="alltexts">
              <div className="text-top">
                <p>At participating stores. Restrictions apply.</p>
                <p>
                  <sup>1</sup>Excludes taxes and gratuities. At participating
                  stores. Some restrictions apply. Flights purchased close to
                  departure may not earn double Stars. Stars and miles may not
                  be earned on purchases of alcohol, Starbucks Cards and
                  Starbucks Card reloads. For details, visit
                  <Link> deltastarbucks.com/terms</Link>.↩
                </p>
                <p>
                  <sup>2</sup>At participating stores only. Some restrictions
                  apply. Linked Card members will earn 2% Cash Back on the full
                  purchase price of every Qualifying Purchase. Extra Star offer
                  excludes taxes and tips. Stars may not be earned on purchases
                  of alcohol or on reloads of Starbucks Cards that are not
                  registered. For details, visit
                  <Link> Terms and Conditions</Link>. Bank of America, N.A.
                  Member FDIC.↩
                </p>
                <p></p>
              </div>
              <div className="texts">
                <div className="texts-left">
                  <div className="box">
                    <h3>EARNING STARS</h3>
                    <div className="paragrafs">
                      <p>
                        Stars cannot be earned on purchases of alcohol,
                        Starbucks Cards or Starbucks Card reloads.
                      </p>

                      <p>
                        Earn 1 Star per $1 spent when you scan your member
                        barcode in the app, then pay with cash, credit/debit
                        cards or mobile wallets at participating stores. You can
                        also earn 1 Star per $1 spent when you link a payment
                        method and pay directly through the app.
                      </p>
                      <p>
                        Earn 2 Stars per $1 spent when you load funds and pay
                        with your digital Starbucks Card in the app. You can
                        also earn 2 Stars per $1 spent when you pay in-person at
                        a participating store with your registered physical
                        Starbucks Card or scan your member barcode in the app,
                        and then use any physical Starbucks Card (regardless of
                        whether it is registered) to complete the purchase.
                      </p>
                    </div>
                  </div>
                  <div className="box">
                    <h3>BENEFITS</h3>
                    <div className="paragrafs">
                      <p>
                        Free refills available during same in-store visit only.
                        To qualify for the Birthday Reward, you must have made
                        at least one Star-earning transaction.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="texts-right">
                  <div className="box">
                    <h3>TERMS OF USE</h3>
                    <div className="paragrafs">
                      <p>
                        For full program details visit
                        <Link> starbucks.com/rewards/terms</Link>
                      </p>
                      <p>
                        Starbucks® Rewards benefits are available at
                        participating Starbucks stores. Not all stores have the
                        ability to honor Rewards at this time. Visit the
                        <Link> Starbucks Store Locator</Link> and search for
                        locations honoring “Redeem Rewards”.
                      </p>
                    </div>
                  </div>
                  <div className="box">
                    <h3>REDEEMING REWARDS</h3>
                    <div className="paragrafs">
                      <p>
                        Rewards cannot be redeemed for alcoholic beverages or
                        multi-serve items. You pay the difference for any
                        beverage customization over $1 and/or merchandise item
                        over $20. Not all stores honor tiered Rewards. Select
                        stores redeem 200 Stars for free food or drink items
                        only.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Rewards;
