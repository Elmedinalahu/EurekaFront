import './Landing1.css'
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { GoBell } from "react-icons/go";
import { FaSignInAlt } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa6";

export default function Landing1() {
  return (
    <div class = "body">
    <div className="landing-1">
      <div className="navbar">
        <div className="e">
        Eureka...
        </div>
        <div className="nav-right">
          <div className="nav">
            <span className="course-1">
            Course
            </span>
          </div>
          <div className="icon">
              <CiHeart size={24} color="black" /> 
          </div>
          <div className="icon">
          <SlBasket size={20} color="black" />
          </div>
          <div className="icon">
          <GoBell size={20} color="black" />
          </div>
          <div className="icon">
          <FaSignInAlt size={20} color="black" />
          </div>
        </div>
      </div>

      <div className="top-categories">
        <div className="categorie-item-1">
          <span className="python-1">
          Development
          </span>
        </div>
        <div className="categorie-item-2">
          <span className="python-2">
          Bussines
          </span>
        </div>
        <div className="categories">
          <div className="categorie-item">
            <span className="python">
            Finance &amp; Accounting
            </span>
          </div>
        </div>
        <div className="categorie-item-3">
          <span className="python-3">
          Design
          </span>
        </div>
        <div className="categorie-item-4">
          <span className="python-4">
          Marketing
          </span>
        </div>
        <div className="categorie-item-5">
          <span className="python-5">
          Lifestyle
          </span>
        </div>
        <div className="categorie-item-6">
          <span className="python-6">
          Photography &amp; Video
          </span>
        </div>
        <div className="categorie-item-7">
          <span className="python-7">
          Health &amp; Fitness
          </span>
         
        </div>
       
      </div>
      <div className="rectangle-46">
      </div>
</div>
</div>
  )
}