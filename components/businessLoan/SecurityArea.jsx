import Image from "next/image";
import security_area_left from "/public/images/security-area-left.png";

const SecurityArea = () => {
  return (
    <section className="security-section">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="img-area">
                <Image src={security_area_left} alt="image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-right">
             
                <h2 className="title">Hassle- Free Process</h2>
                <p>
                We understand the needs of entrepreneurs and the dynamic corporate landscape, teeming with both challenges and prospects. Our commitment to efficiency means we minimize hurdles and favor digital processes. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityArea;
