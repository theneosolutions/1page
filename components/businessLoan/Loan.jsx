import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import business_loan_section_left from "/public/images/business-loan-section-left.png";

const Loan = () => {
  const [sliderValue, setSliderValue] = useState(45000);
  const MAX = 80000;

  const getBackgroundSize = () => {
    return {
      backgroundSize: `${(sliderValue * 100) / MAX}% 100%`,
    };
  };
  return (
    <section className="business-loan-section">
      <div className="img-area">
        <Image src={business_loan_section_left} alt="image" />
      </div>
      <div className="overlay pt-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-header text-center">
                
                <h2 className="title">
                Low Mark-up and Flexible Loan on your Own Terms:
                </h2>
                <p className="top-para">
                We provide individuals seeking financing the convenience of instantly accessing an Islamic Shari'a-compliant loan without the need to visit a physical bank branch. Our streamlined Shari'a-approved process takes just a few minutes, from downloading the app to receiving the loan amount in your account.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-lg-12">
              <div className="main-content">
                <div className="section-text">
                  <h3 className="title">Loan Calculator</h3>
                  <p>
                    Choose the business loan amount that you need ($1,000 to
                    $250,000) and the payment period (6–18 months) that suits
                    you best.
                  </p>
                </div>
                <form action="#">
                  <div className="form-group">
                    <div className="range-amount">
                      <h4 className="d-flex flex-column align-items-center justify-content-center">
                        <label>
                          Business Loan Amount : <span> ${sliderValue}</span>
                        </label>
                        <input
                          type={"range"}
                          min={1000}
                          max={MAX}
                          onChange={(e) => setSliderValue(e.target.value)}
                          style={getBackgroundSize()}
                          value={sliderValue}
                        />
                      </h4>
                    </div>
                  </div>
                  <ul
                    className="nav nav-tabs justify-content-between"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="active cmn-btn second"
                        id="months6-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#months6"
                        type="button"
                        role="tab"
                        aria-controls="months6"
                        aria-selected="true"
                      >
                        6 Months
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="cmn-btn second"
                        id="months12-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#months12"
                        type="button"
                        role="tab"
                        aria-controls="months12"
                        aria-selected="false"
                      >
                        12 Months
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="cmn-btn second"
                        id="months18-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#months18"
                        type="button"
                        role="tab"
                        aria-controls="months18"
                        aria-selected="false"
                      >
                        18 Months
                      </button>
                    </li>
                  </ul>
                  <div className="bottom-area pt-120 d-xl-flex align-items-center justify-content-between">
                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="months6"
                        role="tabpanel"
                        aria-labelledby="months6-tab"
                      >
                        <h5>
                          Monthly instalment of <span>$9.00</span>
                        </h5>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="months12"
                        role="tabpanel"
                        aria-labelledby="months12-tab"
                      >
                        <h5>
                          Monthly instalment of <span>$18.00</span>
                        </h5>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="months18"
                        role="tabpanel"
                        aria-labelledby="months18-tab"
                      >
                        <h5>
                          Monthly instalment of <span>$36.00</span>
                        </h5>
                      </div>
                    </div>
                    <Link href="/#business-loan-form" className="cmn-btn">
                      Apply for a business loan
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Loan;
