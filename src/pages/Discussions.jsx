import './Discussions.css'
import { FaHome, FaUserGraduate, FaUser, FaEnvelope, FaCog, FaSignOutAlt } from 'react-icons/fa';

export default function Discussions() {
  return (
    <div className="discussions">
      <div className="menu">
        <div className="rectangle-5">
        </div>
        <div className="container-12">
          <div className="e">
          E.
          </div> 
          <img className="vector-9" src="/assets/images/Home.png" alt="Icon 9"/>
          <img className="vector-15" src="assets\images\Profile.png" alt="Icon 9" />
          <div className="group-6">
            <div className="group-1">
              <img className="vector-14" src="assets\images\Message.png"/>
            </div>
          </div>
          <div className="group-3">
            <img className="vector-12" src="assets\images\Settings.png" />
          </div>
          <img className="group-2" src="assets\images\Logout.png" />
          <div className="group-7">
            <img className="vector-16" src="/assets/images/Hat.png" />
          </div>
        </div>
      </div>
      <div className="container-7">
        <div className="container-23">
          <div className="header">
            <div className="discussions-1">
            Discussions
            </div>
            <span className="discuss-the-eureka-platform-this-includes-sharing-feedback-asking-questions-and-more">
            Discuss the Eureka platform – this includes sharing feedback, asking questions, and more.
            </span>
          </div>
          <div className="navigation">
            <div className="search-bar">
              <div className="group-35">
                <img className="vector-6" src="data:image/png;base64,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" />
             
              </div>
            </div>
            <div className="notification">
              <img className="group-34" src="data:image/png;base64,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" />
 
               <div className="container-1">
                <div className="ellipse-4">
                </div>
              </div>
              <span className="container">
              1
              </span>
            </div>
            <div className="profile-picture">
              <div className="mask-group">
                <div className="mask-group-1">
                  <div className="image-16">
                  </div>
                </div>
              </div>
              <div className="group-38">
                <img className="vector" src="assets/vectors/Unknown" />
              </div>
            </div>
          </div>
        </div>
        <div className="my-course">
          <div className="container-19">
            <div className="group-351">
              <img className="vector-8" src="data:image/png;base64,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" />
           
            </div>
            <div className="search-discussions">
            Search discussionsss
            </div>
          </div>
          <div className="container-27">
            <div className="line-144">
            </div>
            <div className="container-33">
              <span className="ask-new">
              + Ask New
              </span>
            </div>
          </div>
        </div>
        <div className="container-5">
          <div className="frame-1235">
            <div className="choice-chipa-enabled">
              <span className="label">
              Machine Learning
              </span>
            </div>
            <div className="choice-chipb-active">
              <span className="label-1">
              IoT
              </span>
            </div>
            <div className="choice-chipa-enabled-1">
              <span className="label-2">
              UI/UX
              </span>
            </div>
            <div className="choice-chipa-enabled-2">
              <span className="label-3">
              algorithm
              </span>
            </div>
            <div className="choice-chipa-enabled-3">
              <span className="label-4">
              Biology
              </span>
            </div>
          </div>
          <div className="choice-chipa-enabled-4">
            <span className="label-5">
            more
            </span>
          </div>
        </div>
        <div className="courses-section">
          <div className="learn-figma">
            <img className="rectangle-7" src="assets\images\imageA.png" />
            <div className="container-25"> 
              <div className="container-18">
              <img className="ellipse-2861 " src="assets/images/Ellipse286.jpeg" />
              </div>
                <img className="ellipse-2854" src="assets/vectors/Unknown" />
              </div>
              <div className="container-13">
                <div className="dplace-solution">
                3D Place solution
                </div>
                <span className="shams-tabrez-last-comment-7-hago-by-nahin-5">
                Shams Tabrez • Last comment 7h ago by Nahin
                </span>
              
            </div>
            <div className="container-4">
              <div className="rating-discussion-4">
                <div className="frame-12774">
                </div>
                <div className="frame-12784">
                  <span className="container-5">
                  15
                  </span>
                </div>
              </div>
              <span className="comments-4">
              9 comments
              </span>
            </div>
          </div>
          <div className="analog-photography">
            <img className="rectangle-8" src="assets/vectors/Unknown" />
            <div className="container-22">
              <div className="container-6">
                <div className="rectangle-13">
                </div>
                <div className="container-24">
                  <div className="what-is-the-pcb-board-made-of">
                  What is the pcb board made of?
                  </div>
                  <span className="shams-tabrez-last-comment-7-hago-by-nahin-4">
                  Shams Tabrez • Last comment 7h ago by Nahin
                  </span>
                </div>
              </div>
              <div className="container">
                <div className="rating-discussion-3">
                  <div className="frame-12773">
                    <img className="arrow-drop-up-6" src="assets/vectors/Unknown" />
                  </div>
                  <div className="frame-12783">
                    <span className="container-4">
                    15
                    </span>
                  </div>
                </div>
                <span className="comments-3">
                7 comments
                </span>
              </div>
            </div>
            <img className="ellipse-2853" src="assets/vectors/Unknown" />
            <div className="ellipse-2843">
            </div>
          </div>
          <div className="master-instagram">
            <img className="rectangle-9" src="assets/vectors/Unknown" />
            <div className="container-30">
              <div className="container-16">
                <div className="ellipse-2842">
                </div>
                <img className="ellipse-2852" src="assets/vectors/Unknown" />
              </div>
              <div className="container-32">
                <div className="deep-learning-in-the-field-of-labour">
                Deep Learning in the field of labour.
                </div>
                <span className="shams-tabrez-last-comment-7-hago-by-nahin-3">
                Shams Tabrez • Last comment 7h ago by Nahin
                </span>
              </div>
            </div>
            <div className="container-3">
              <div className="rating-discussion-2">
                <div className="frame-12772">
                  <img className="arrow-drop-up-4" src="assets/vectors/Unknown" />
                </div>
                <div className="frame-12782">
                  <span className="container-3">
                  15
                  </span>
                </div>
              </div>
              <span className="comments-2">
              2 comments
              </span>
            </div>
          </div>
          <div className="basics-of-drawing">
            <img className="rectangle-10" src="assets/vectors/Unknown" />
            <div className="container-9">
              <div className="container-14">
                <div className="ellipse-2841">
                </div>
                <img className="ellipse-2862" src="assets/vectors/Unknown" />
              </div>
              <div className="container-20">
                <div className="soil-moisture-prediction-with-ml">
                Soil Moisture Prediction with ML
                </div>
                <span className="shams-tabrez-last-comment-7-hago-by-nahin-2">
                Shams Tabrez • Last comment 7h ago by Nahin
                </span>
              </div>
            </div>
            <div className="container-28">
              <div className="rating-discussion-1">
                <div className="frame-12771">
                  <img className="arrow-drop-up-2" src="assets/vectors/Unknown" />
                </div>
                <div className="frame-12781">
                  <span className="container-2">
                  15
                  </span>
                </div>
              </div>
              <span className="comments-1">
              6 comments
              </span>
            </div>
          </div>
          <div className="group-66">
            <img className="rectangle-11" src="assets/vectors/Unknown" />
            <img className="rectangle-21" src="assets/vectors/Unknown" />
            <div className="container-26">
              <div className="container-17">
                <div className="container-2">
                  <div className="container-15">
                    <div className="ellipse-284">
                    </div>
                  </div>
                  <div className="container-29">
                    <div className="photoshop-essence">
                    Photoshop - Essence
                    </div>
                    <span className="shams-tabrez-last-comment-7-hago-by-nahin">
                    Shams Tabrez • Last comment 7h ago by Nahin
                    </span>
                  </div>
                  <div className="flame-8">
                    <img className="vector-7" src="assets/vectors/Unknown" />
                  </div>
                </div>
                <div className="container-8">
                  <div className="rating-discussion">
                    <div className="frame-1277">
                      <img className="arrow-drop-up" src="assets/vectors/Unknown" />
                    </div>
                    <div className="frame-1278">
                      <span className="container-1">
                      15
                      </span>
                    </div>
                  </div>
                  <span className="comments">
                  9 comments
                  </span>
                </div>
              </div>
              <div className="container-11">
                <div className="container-34">
                  <div className="container-31">
                    <div className="ellipse-285">
                    </div>
                    <img className="ellipse-2851" src="assets/vectors/Unknown" />
                  </div>
                  <div className="container-10">
                    <div className="big-opportunity-of-io-tin-africa">
                    Big Opportunity of IoT in Africa
                    </div>
                    <span className="shams-tabrez-last-comment-7-hago-by-nahin-1">
                    Shams Tabrez • Last comment 7h ago by Nahin
                    </span>
                  </div>
                </div>
                <div className="container-21">
                  <div className="rating-discussion-5">
                    <div className="frame-12775">
                      <img className="arrow-drop-up-10" src="assets/vectors/Unknown" />
                    </div>
                    <div className="frame-12785">
                      <span className="container-6">
                      15
                      </span>
                    </div>
                  </div>
                  <span className="comments-5">
                  9 comments
                  </span>
                </div>
              </div>
            </div>
            <img className="ellipse-286" src="assets/vectors/Unknown" />
          </div>
        </div>
      </div>
    </div>
  )
}