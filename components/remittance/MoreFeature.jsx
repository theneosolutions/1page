import Image from "next/image";
import more_features_1 from "/public/images/icon/more-features-1.png";
import more_features_2 from "/public/images/icon/more-features-2.png";
import more_features_3 from "/public/images/icon/more-features-3.png";
import more_features_4 from "/public/images/icon/more-features-4.png";

const MoreFeature = () => {
  return (
    <section className="more-feature remittance">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <div className="section-header text-center">
              
                <h2 className="title">Why Choose US?</h2>
                <p>
                  
                </p>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            <div className="col-md-6">
              <div className="content-area d-flex align-items-start">
                <div className="img-area">
                  <Image src={more_features_1} alt="image" />
                </div>
                <div className="text-area">
                  <h5>Flexible</h5>
                  <p>
                  We have tailored our services to cater to your individual requirements, ensuring they are available to you at your convenience, anytime or anywhere. 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-area d-flex align-items-start">
                <div className="img-area">
                  <Image src={more_features_2} alt="image" />
                </div>
                <div className="text-area">
                  <h5>Secure</h5>
                  <p>
                  We guarantee the protection of your money and banking data.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-area d-flex align-items-start">
                <div className="img-area">
                  <Image src={more_features_3} alt="image" />
                </div>
                <div className="text-area">
                  <h5>Transparent</h5>
                  <p>
                  Transparency in all banking services guarantees that you won't encounter unforeseen charges or concealed fees
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-area d-flex align-items-start">
                <div className="img-area">
                  <Image src={more_features_4} alt="image" />
                </div>
                <div className="text-area">
                  <h5>Fast</h5>
                  <p>
                  Our dedication to timeliness and effectiveness ensures that every D360 banking service is executed within seconds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreFeature;
