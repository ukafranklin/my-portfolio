import React, { useState, useRef } from "react";
import { Formik, Form, Field } from "formik";

import emailjs from '@emailjs/browser';




const SContactForm = ({ noLine }) => {
  const messageRef = React.useRef(null);
  const form = useRef()
  const [success, setSuccess] = useState(false)
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  const sendEmail = () => {

  emailjs
    .sendForm(
      "service_udxazzi",
      "template_mhna9xq",
      form.current,
      "LxWDlGGXmd0DaWWRH"
    )
    .then(
      (result) => {
        if (result.status === 200) {
          setSuccess(true);
        }
      },
      (error) => {
        console.log(error.text);
      }
    );

};

  return (
    <section className="contact-sec section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Contact Me
              </h6>
              <h3 className="wow color-font">
              Got a question, feedback or an idea?  Say Hi, 👋🏼
              </h3>
            </div>
          </div>
        </div>



        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="form wow fadeInUp" data-wow-delay=".5s">



              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: "",
                }}
                onSubmit={(values) => {
                  sendEmail()

               
                  // Reset the values
                  values.user_name = "";
                  values.user_email = "";
                  values.message = "";
                  // clear message
                  setSuccess(false)
            
                }}
              >
                {({ errors, touched }) => (




                  <Form id="contact-form" ref={form}>
                    <div className="messages">{success ? "Message sent successfully" : ""}</div>
                    <div className="controls">
                      <div className="row">





                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field
                              id="name"
                              type="text"
                              name="user_name"
                              placeholder="Name"
                              required="required"
                            />
                          </div>
                        </div>



                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field
                              validate={validateEmail}
                              id="email"
                              type="email"
                              name="user_email"
                              placeholder="Email"
                              required="required"
                            />
                            {errors.email && touched.email && (
                              <div>{errors.email}</div>
                            )}
                          </div>
                        </div>



                        <div className="col-12">
                          <div className="form-group">
                            <Field
                              as="textarea"
                              id="message"
                              name="message"
                              placeholder="Message"
                              rows="4"
                              required="required"
                            />
                          </div>
                        </div>











                        <div className="col-12">
                          <div className="text-center">
                            <button
                              type="submit"
                              className="nb butn bord curve mt-30"
                            >
                              <span>Send Message</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      {!noLine ? <div className="line bottom left"></div> : ""}
    </section>
  );
};

export default SContactForm;
