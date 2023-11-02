import Image from "next/image";
import about_img_1 from "/public/images/about-img-1.png";
import about_img_2 from "/public/images/about-img-2.png";
import about_img_3 from "/public/images/about-img-3.png";

const Hero = () => {
  return (
    <section className="about-section">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text-area">
                <h5 className="sub-title">Why Us</h5>
                <h5 className="title">
                We are committed to providing top-tier financial services in full compliance with Islamic Sharia principles.
                </h5>
                <p>
                Sauleh is a forward-thinking fintech organization committed to advancing financial inclusion in Saudi Arabia. The core purpose of our service is to provide a convenient and accessible platform for individuals and businesses to access various types of loans, such as personal loans, business loans, mortgages, and more.
We offer Islamic Shari'a compliant loans to individuals in need, all without requiring a physical visit to a bank or branch. Our end-to-end Shari'a-approved process is meticulously designed for expediency and convenience, enabling you to access your desired loan amount within minutes of downloading our app.

                </p>
              </div>
              <div className="row cus-mar">
                <div className="col-xl-4 col-md-4">
                  <div className="count-content text-center">
                    <div className="count-number">
                      <h4 className="counter">98</h4>
                      <h4 className="static">%</h4>
                    </div>
                    <p>Customer satisfaction</p>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4">
                  <div className="count-content text-center">
                    <div className="count-number ">
                      <h4 className="counter">25</h4>
                      <h4 className="static">k</h4>
                    </div>
                    <p>Monthly active users</p>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4">
                  <div className="count-content text-center">
                    <div className="count-number ">
                      <h4 className="counter">1</h4>
                      <h4 className="static">K</h4>
                    </div>
                    <p>New Users per week</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-end">
              <div className="img-area">
                <Image className="img-1" src={about_img_1} alt="image" />
                <Image className="img-2" src={about_img_2} alt="image" />
                <Image className="img-3" src={about_img_3} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
