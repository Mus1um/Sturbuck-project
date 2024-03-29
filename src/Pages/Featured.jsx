import React from 'react'
import { Link } from 'react-router-dom'
import cofefoto1 from '../Images/137-89185.webp'
import cofefoto2 from '../Images/137-89186.webp'
import cofefoto3 from '../Images/137-89190.webp'
import cofefoto4 from '../Images/137-89191.webp'
import cofefoto5 from '../Images/137-88994.webp'
import cofefoto6 from '../Images/137-88995.webp'
import cofefoto7 from '../Images/137-88999.webp'
import cofefoto8 from '../Images/137-89000.jpg'
import '../Style/Featured.css'



function Featured() {
  return (
    <div>
      <section>
        <div className="featured-top-text">
          <strong>Spring it on</strong>
        </div>
        <div className="featured-cards">
          <div className="featured-card">
            <img src={cofefoto1} alt="" />
            <div className="featured-card-text">
              <h1>New Lavender Crème Frappuccino® blended beverage</h1>
              <p>A smooth blend of milk and ice with subtle floral notes, topped with whipped cream.</p>
              <Link>Order now</Link>
            </div>
          </div>
          <div className="featured-card">
            <img src={cofefoto2} alt="" />
            <div className="featured-card-text">
              <h1>New Lavender Crème Frappuccino® blended beverage</h1>
              <p>A smooth blend of milk and ice with subtle floral notes, topped with whipped cream.</p>
              <Link>Order now</Link>
            </div>
          </div>
          <div className="featured-card">
            <img src={cofefoto3} alt="" />
            <div className="featured-card-text">
              <h1>New Lavender Crème Frappuccino® blended beverage</h1>
              <p>A smooth blend of milk and ice with subtle floral notes, topped with whipped cream.</p>
              <Link>Order now</Link>
            </div>
          </div>
          <div className="featured-card">
            <img src={cofefoto4} alt="" />
            <div className="featured-card-text">
              <h1>New Lavender Crème Frappuccino® blended beverage</h1>
              <p>A smooth blend of milk and ice with subtle floral notes, topped with whipped cream.</p>
              <Link>Order now</Link>
            </div>
          </div>
          <div className="featured-card">
            <img src={cofefoto5} alt="" />
            <div className="featured-card-text">
              <h1>New Lavender Crème Frappuccino® blended beverage</h1>
              <p>A smooth blend of milk and ice with subtle floral notes, topped with whipped cream.</p>
              <Link>Order now</Link>
            </div>
          </div>
          <div className="featured-card">
            <img src={cofefoto6} alt="" />
            <div className="featured-card-text">
              <h1>New Lavender Crème Frappuccino® blended beverage</h1>
              <p>A smooth blend of milk and ice with subtle floral notes, topped with whipped cream.</p>
              <Link>Order now</Link>
            </div>
          </div>
          <div className="featured-card">
            <img src={cofefoto7} alt="" />
            <div className="featured-card-text">
              <h1>New Lavender Crème Frappuccino® blended beverage</h1>
              <p>A smooth blend of milk and ice with subtle floral notes, topped with whipped cream.</p>
              <Link>Order now</Link>
            </div>
          </div>
          <div className="featured-card">
            <img src={cofefoto8} alt="" />
            <div className="featured-card-text">
              <h1>New Lavender Crème Frappuccino® blended beverage</h1>
              <p>A smooth blend of milk and ice with subtle floral notes, topped with whipped cream.</p>
              <Link>Order now</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Featured
