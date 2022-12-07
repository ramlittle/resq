import React from "react";
import {useState} from 'react';
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "./HomePage.css";
import Footer from "../components/Footer";

const HomePage = () => {

  const [isVisible, setIsVisible] = useState(false);

  const handleClick = event => {
    setIsVisible(current => !current);
  };
  return (
    <div>
      <Header />
      <div className="container body-container">
          <div className="container">
              <div className="d-flex justify-content-center">
                <Link to="/userhelp">
                  <button class="button button5 main-button fw-bold">HELP!</button>
                </Link>
              </div>
              <div className="container d-flex links-user btn-group pb-3 justify-content-center">
                <Link to="/">
                  <button type="button" className="btn links-button mx-1">
                    <i class="bi bi-house"></i> Home
                  </button>
                </Link>
                {/* <Link to="/status">
                  <button type="button" className="btn links-button mx-1">
                    <i class="bi bi-question-circle"></i> Status
                  </button>
                </Link> */}
                <Link to="/hotline">
                  <button type="button" className="btn links-button mx-1">
                    <i class="bi bi-telephone"></i> Hotlines
                  </button>
                </Link>
                <Link>
                  <button className="btn links-button mx-1" onClick={handleClick}>
                    <i class="bi bi-info-circle"></i> Info
                  </button>
                </Link>
              </div>
          </div>

          <section class="accordion" id="accordionExample" style={{display: isVisible ? 'block' : 'none'}}>
            <div className="steps__info d-flex flex flex-column align-items-center text-center">
              <h2>How to use RESQ</h2>
              <h4>
                RESQ is a Emergency Response System Query for the CAR Region. In order to
                help individuals accurately and immidiately.
              </h4>
            </div>

            <div className="steps__info d-flex flex flex-column align-items-center text-center mt-3">
              <h2>Frequently Asked Questions</h2>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <strong>When will help arrive?</strong>
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Our system calls the nearest Emergency response team that will
                  accommodate you ASAP.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <strong>Where is your nearest hospital?</strong>
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  It depends on your location where our system will give you the
                  nearest medical hotline.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <strong>Why use the app?</strong>
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Our system is responsive and perfect for tourist who had urgent
                  emergency since our system sort the nearest location provided
                  for your device. Then after filling the form our respondent
                  call you to confirm and help will provide at your current
                  location.
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    <strong>What if i can't type?</strong>
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    If the emergency is critical then press the call now button.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    <strong>How do i remove my account?</strong>
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Just open the Setting on the upper right corner and delete your account from there.
                  </div>
                </div>
              </div>
            </div>
          </section>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
