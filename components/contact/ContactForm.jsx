import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState(""); // Initialize success message state
  const [code, setCode] = useState("+971");
  const [services, setServices] = useState("Micro Financing");

  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting

    // Validate the form fields
    const newErrors = {};
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    }
    if (formData.phone.trim() === "") {
      newErrors.phone = "Phone is required";
    }

    // Check if there are any errors
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, you can submit the data or perform other actions
      // console.log('Form data:', formData);
      setSuccessMessage("Message Sent!");

      sendEmail(
        formData.name,
        formData.email,
        formData.phone,
        formData.loan,
        formData.message
      );
    } else {
      // There are validation errors, update the state
      setErrors(newErrors);
    }
  };

  function sendEmail(name, email, phone, loan, message) {
    const templateParam = {
      name: name,
      email: email,
      phone: code + phone,
      loan: services,
      message: message,
    };
    console.log("params", templateParam);
    emailjs
      .send(
        "service_t75hx4n",
        "template_imwffwh",
        templateParam,
        "FAUfdkoBk63a7Ne2q"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    ResetForm();
  }

  function ResetForm() {
    setFormData(initialFormData);
    // setSuccessMessage('');
    setErrors({});
  }
  const handlePhoneInputChange = (e) => {
    const { name, value } = e.target;

    // Remove non-numeric characters and limit to 10 digits
    const numericValue = value.replace(/\D/g, "").slice(0, 10);

    setFormData({
      ...formData,
      [name]: numericValue,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="What's your name?"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
        </div>
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="What's your email?"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="send">Phone</label>
            <div className="single d-flex align-items-center">
              <div className="d-flex align-items-center selecthPhone">
                <select
                  className="selectmain"
                  onChange={(e) => setCode(e.target.value)}
                  defaultValue={code}>
                  <option value="+966">+966</option>
                  <option value="+971">+971</option>
                </select>
              </div>
              <input
                type="number"
                style={{ marginLeft: "10px" }}
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={(e) => handlePhoneInputChange(e)}
                required
              />
            </div>
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
        </div>
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="send">Service interested in</label>
            <div className="single d-flex align-items-center">
              <div className="d-flex align-items-center select2">
                <select
                  className="selectmain"
                  onChange={(e) => setServices(e.target.value)}
                  defaultValue={services}>
                  <option value="Micro Financing">Micro Financing</option>
                  <option value="Consumer Durable Finance">
                    Consumer Durable Finance
                  </option>
                </select>
              </div>
            </div>
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="single-input">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="I would like to get in touch with you..."
              cols="30"
              rows="10"
              value={formData.message}
              onChange={handleInputChange}
              required></textarea>
          </div>
        </div>
      </div>
      <div className="btn-area text-center">
        <button
          type="submit"
          className="cmn-btn"
          disabled={successMessage ? true : false}>
          {successMessage ? successMessage : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
