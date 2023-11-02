import Image from "next/image";
import AboutLoan from "../common/AboutLoan";
import about_business_loan_Illus from "/public/images/about-business-loan-Illus.png";
import check from "/public/images/icon/check.png";

const AboutBusiness = () => {
  return (
    <AboutLoan
      img={about_business_loan_Illus}
      btnText="Apply Now"
      link="/"
    >
      <div className="section-text">
        
        <h2 className="title">Micro Financing – Just as you need </h2>
        <p>
        Get your business loan approval in a matter of days with clear lending criteria and a transparent application process;
        </p>
        <ul className="list">
          <li className="list-item d-flex align-items-center">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Instant approvals</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Shariah compliant</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>•	Short-term financing</span>
          </li>
        </ul>
      </div>
    </AboutLoan>
  );
};

export default AboutBusiness;
