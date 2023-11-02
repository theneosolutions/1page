import Image from "next/image";
import Link from "next/link";
import personalized from "/public/images/personalized1.png";

const Personalized = () => {
  return (
    <section className="personalized">
      <div className="overlay">
        <div className="container wow fadeInUp">
          <div className="row d-flex justify-content-between">
            <div className="col-lg-4 col-xl-3 d-flex align-items-center justify-content-end">
              <div className="img-area">
                <Image src={personalized} alt="image" />
              </div>
            </div>
            <div className="col-lg-8 col-xl-8 pt-120 pb-120">
              <div className="section-text">
                <h3 className="title">We are all about following Shari'a rules.</h3>
                <p>
                Seulah's primary focus is on providing Shari'a compliant products and adhering to Islamic Shari'a principles in all our services.

We've taken deliberate steps to collaborate with a dedicated team of expert Shari'a advisors and scholars to guarantee that our product development and processes align with Shari'a principles.

Our Shari'a advisors and scholars conduct regular reviews and audits of our company's operations to ensure a consistent and ongoing delivery of Shari'a compliant products and services in harmony with Islamic values.
                </p>
              </div>
              {/* <Link href="/" className="cmn-btn">
                Apply for a loan
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personalized;
