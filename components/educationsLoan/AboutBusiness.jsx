import Image from "next/image";
import AboutLoan from "../common/AboutLoan";
import about_educations_loan_Illus from "/public/images/about-educations-loan-Illus.png";
import check from "/public/images/icon/check.png";

const AboutBusiness = () => {
  return (
    <AboutLoan
      btnText="Apply Now"
      link="/"
      img={about_educations_loan_Illus}
    >
      <div className="section-text">
       
        <h2 className="title">Consumer Durable Finance</h2>
        <p>
        We offer you convenient and flexible way to purchase a wide range of consumer goods, as per your requirement. It allows you to spread the cost over manageable installments, making it easier to acquire the products you desire.
        </p>
        
      </div>
    </AboutLoan>
  );
};

export default AboutBusiness;
