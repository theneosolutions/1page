import Link from "next/link";
import faqData from "../../data/faqData";

const Faq = ({ cls = "" }) => {
  return (
    <section className={`faqs-section ${cls}`}>
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6">
              <div className="section-header text-center">
                <h5 className="sub-title">
                Frequently Asked Questions 
                </h5>
                <h2 className="title">Frequently asked questions</h2>
                <p>
                Seulah offers a online platform for individuals to apply for personal loans at their convenience, from anywhere. {" "}
                  <Link href="/faqs">See all questions here!</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-xl-8">
              <div className="faq-box wow fadeInUp">
                <div className="accordion" id="accordionExample">
                  {faqData.map((itm, i) => (
                    <div key={itm.id} className="accordion-item">
                      <h5 className="accordion-header" id={`heading${i}`}>
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${i}`}
                          aria-expanded="false"
                          aria-controls={`collapse${i}`}
                        >
                          {itm.question}
                        </button>
                      </h5>
                      <div
                        id={`collapse${i}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`heading${i}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>{itm.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
