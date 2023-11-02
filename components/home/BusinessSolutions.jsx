import BusinessSolutionsCard from "../cards/BusinessSolutionsCard";
import { business_solutions_data } from "./homeData";

const BusinessSolutions = () => {
  return (
    <section className="solutions-business">
      <div className="overlay pt-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-header text-center">
                <h5 className="sub-title">
                  Open your account from anywhere in the Saudi Arabia
                </h5>
                <h4 className="title">An Instant Solution for your Financial Needs</h4>
                <p>
                Suleh has got you covered for all your financial needs, whether they're personal or Consumer-related. We provide the best and quickest Islamic Shari'a-compliant loans without any hassle. 
                </p>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            {business_solutions_data.map((singleBusiness) => (
              <div key={singleBusiness.id} className="col-lg-6 col-md-6">
                <BusinessSolutionsCard singleBusiness={singleBusiness} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutions;
