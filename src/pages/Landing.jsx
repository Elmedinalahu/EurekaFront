import './Landing.css'
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { GoBell } from "react-icons/go";
import { FaSignInAlt } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa6";

export default function Landing() {
  return (
    <div class="body">
      <div className="landing-1">
        <div className="navbar">
          <div className="e">
            Eureka...
          </div>
          <div className='nav-links'>
            <div className="nav">
              <span className="course-1">Course</span>
            </div>
            <div className="nav">
              <span className="course-1">Become an Instructor</span>
            </div>
            <div className="nav">
              <span className="course-1">my Insights</span>
            </div>
          </div>
          <div className="nav-right">
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
        <div className="footer">
        <div className="top-footer">
          <div className="explanation">
            <span className="supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium
            </span>
          </div>
          <div className="eureka">
          Eureka...
          </div>
        </div>
        <div className="bottom-footer">
          <span className="privacy-policy-terms-conditions">
          privacy policy | terms &amp; conditions
          </span>
          <span className="all-copyrightc-2024-reserved">
          all copyright (c) 2024 reserved
          </span>
        </div>
      </div>

      </div>
    </div>
  )
}