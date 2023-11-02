import Link from "next/link";
import Partners from "./Partners";
import Loan from "../personalLoan/Loan";
import LoanCounter from "../common/LoanCounter";
import MainLoan from "../personalLoan/MainLoan";

const HomeBanner = () => {
  return (
    <section className="banner-section">
      <div className="overlay">
        <div className="banner-content d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-lg-7 col-md-10">
                <div className="main-content">
                  <div className="top-area section-text justify-content-center">
                    <h4 className="sub-title">Seulah The Optimal </h4>
                    <h1 className="title">Financial Partner </h1>
                    <p className="xlr">
                    Embark on your journey towards financial independence and wellness. Make a wiser borrowing decisions.
                    </p>
                  </div>
                  <div className="bottom-area">
                    <Link href="#" className="cmn-btn">
                      Open Account
                    </Link>
                    <Link href="#" className="cmn-btn second">
                      Get in touch
                    </Link>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    <div className="mt-0"></div>
{/* <MainLoan/> */}

      {/* Partners slider here */}
      {/* <Partners /> */}
    
    </section>
  );
};

export default HomeBanner;
