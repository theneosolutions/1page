import Image from "next/image";
import Link from "next/link";
import how_works_business from "/public/images/how-works-business.png";
import how_works_1 from "/public/images/icon/how-works-1.png";
import how_works_11 from "/public/images/icon/how-works-11.png";
import how_works_2 from "/public/images/icon/how-works-2.png";
import how_works_22 from "/public/images/icon/how-works-22.png";
import how_works_3 from "/public/images/icon/how-works-3.png";
import how_works_33 from "/public/images/icon/how-works-33.png";
import how_works_4 from "/public/images/icon/how-works-4.png";
import how_works_44 from "/public/images/icon/how-works-44.png";

const HowItWorks = () => {
  return (
    <section className="financial-planning how-works-business">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 wow fadeInUp">
              <div className="section-header">
                <h5 className="sub-title">Your Financing Solutions start from here!</h5>
                <h2 className="title">How it works</h2>
                <p>
                It's easier than you consider. Follow the following simple easy steps
                </p>
              </div>
              <div className="mb-60">
                <div className="row cus-mar">
                  <div className="col-md-6 col-sm-6">
                    <div className="plan-box">
                      <div className="thumb">
                        <Image
                          src={how_works_1}
                          alt="icon"
                          className="active"
                        />
                        <Image src={how_works_11} alt="icon" className="alt" />
                      </div>
                      <h5>1. Fill the form</h5>
                      <p>
                      Seulah offers a online platform for individuals to apply for personal loans at their convenience, from anywhere. Our streamlined application process involves three simple steps:
•	Provide your essential personal and professional information.
•	Share your contact details.
•	Upload a clear front image of your identification document for verification.

                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="plan-box">
                      <div className="thumb">
                        <Image
                          src={how_works_2}
                          alt="icon"
                          className="active"
                        />
                        <Image src={how_works_22} alt="icon" className="alt" />
                      </div>
                      <h5>2. Get Account Approval</h5>
                      <p>
                      After you have completed the application by either uploading or filling in the required information, you can proceed to submit your loan request. You will receive a notification regarding the approved loan amount within a short period of time.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="plan-box">
                      <div className="thumb">
                        <Image
                          src={how_works_3}
                          alt="icon"
                          className="active"
                        />
                        <Image src={how_works_33} alt="icon" className="alt" />
                      </div>
                      <h5>3. Documents Verification</h5>
                      <p>
                      After setting up your account, you'll need to provide certain documents in a portable format. Please be patient as we process your information before proceeding to the next step.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="plan-box">
                      <div className="thumb">
                        <Image
                          src={how_works_4}
                          alt="icon"
                          className="active"
                        />
                        <Image src={how_works_44} alt="icon" className="alt" />
                      </div>
                      <h5>4. Get a loan</h5>
                      <p>
                      After your account and documents have been verified, you can initiate a loan request. It will take a short while to calculate your eligible amount. Once our team has made a decision, you will be notified via text, and you can easily withdraw the approved amount through your connected bank
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-area">
                <Link href="/" className="cmn-btn">
                  Apply Now
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5">
              <div className="right-box">
                <Image src={how_works_business} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
