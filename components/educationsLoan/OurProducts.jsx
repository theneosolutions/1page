import Image from "next/image";
import Link from "next/link";
import refinancing from "/public/images/icon/refinancing.png";
import student_loans from "/public/images/icon/student-loans.png";
import our_products_Illus from "/public/images/our-products-Illus.png";

const OurProducts = () => {
  return (
    <section className="our-products">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="img-area d-none d-lg-block">
                <Image src={our_products_Illus} alt="image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-header">
              
                <h2 className="title">Upgrade Your Lifestyle Today</h2>
                <p>
                With our Consumer Durable Finance service, upgrading your lifestyle has never been easier. Don't let budget constraints hold you back from enjoying the luxury of your life. Explore our flexible finance options and start living your dreams today.
                </p>
              </div>
              {/* <div className="content-area d-flex align-items-start">
                <div className="img-area">
                  <Image src={student_loans} alt="image" />
                </div>
                <div className="text-area">
                  <h5>Student Loans</h5>
                  <p>
                    Stress-free loans that let you focus on school without
                    worrying how to pay for it. We offer{" "}
                    <span>undergraduate</span>, <span>graduate</span>,{" "}
                    <span>MBA</span>, <span>dental</span>, and{" "}
                    <span>medical</span> loans.
                  </p>
                </div>
              </div> */}
              {/* <div className="content-area d-flex align-items-start">
                <div className="img-area">
                  <Image src={refinancing} alt="image" />
                </div>
                <div className="text-area">
                  <h5>Refinancing</h5>
                  <p>
                    Simplify your student loans and pay off debt more quickly by
                    refinancing. It only takes minutes to see how much money you
                    can save. <Link href="/">Learn More</Link>
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
