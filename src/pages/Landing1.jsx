import './Landing1.css'
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { GoBell } from "react-icons/go";
import { FaSignInAlt } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa6";

export default function Landing1() {
  return (
    <div className = "body">
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
      <div className="rectangle-46">
      </div>
</div>
</div>
  )
}