import React from "react";
import "../Style/Services.css";
import { GoSearch } from "react-icons/go";
import { MdChat } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { PiCardholderBold } from "react-icons/pi";
import bottomfoto from "../Images/partnerGraphic.png";
function Services() {
  return (
    <div className="customer-services">
      <nav>
        <div className="banner">
          <div className="left">
            <h1>Starbucks Customer Service</h1>
            <div className="inp">
              <GoSearch className="icon" />
              <input type="text" placeholder="How can we help you?" />
            </div>

            <div className="bottom-box">
              <p>Suggestions:</p>
              <button>Missing stars</button>
              <button>Order was incomplete</button>
              <button>Apple Pay</button>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </nav>
      <section>
        <div className="cards"></div>
        <div className="page-bottom">
          <div className="left">
            <img src={bottomfoto} alt="" />
          </div>
          <div className="right">
            <h2>Need to get in touch?</h2>
            <div className="box">
              <h3>Our customer care team is here to save the day!</h3>
              <button>
                <MdChat className="bottom-icon" /> Chat with us
              </button>
              <button>
                <BiSolidPhoneCall className="bottom-icon" /> Give us a call
              </button>
              <button>
                <PiCardholderBold className="bottom-icon" /> Send us a message
              </button>
            </div>
            <div className="box">
              <h3>Customer Service Hours</h3>
              <div className="text">
                <table>
                  <th>CHAT</th>
                  <td>7 days a week</td>
                  <td>4:00 a.m.–10:00 p.m. (Pacific)</td>
                </table>
              </div>
              <div className="text">
                <table>
                  <th>PHONE</th>
                  <td>7 days a week</td>
                  <td>5:00 a.m.–8:00 p.m. (Pacific)</td>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
