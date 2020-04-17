import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

const submitHandler = ( ) => {
  axios.post("http://localhost:3300/notify".{
    name:name,
    email:email,
    message:message
  })
  .then(res=>{console.log(res)})
  .catch(err=>{})
}

  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <div className="container contact-tab d-flex justify-content-center align-items-center">
      <div className="row animated fadeInUp slow">
        <div className="col-md-6 d-flex justify-content-start align-items-center details">
          <ul>
            <div>
              <li>
                <i className="fas fa-map-marker-alt" />
                Via Rossini 10, 10136 Turin Italy
              </li>
              <li>
                <i className="fas fa-phone" />
                Phone: (0039) 333 12 68 347
              </li>
              <li>
                <i className="fas fa-envelope" />
                Email: hello@domain.com
              </li>
              <li>
                <i className="fab fa-skype" />
                Skype: you_online
              </li>
            </div>
          </ul>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center form-col">
          <div className="form">
            <label htmlFor="basic-url">
              <h2>GET IN TOUCH WITH ME</h2>
            </label>
            <div className="input-group my-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">
                  Your Name
                </span>
              </div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                required
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">@</span>
              </div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="form-control"
                aria-label=""
                placeholder="email address"
                required
              />
            </div>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">Message</span>
              </div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="form-control"
                aria-label="With textarea"
                defaultValue={""}
                required
              />
            </div>
            <div className="pt-4">
              <button className="btn btn-primary" onClick={submitHandler}>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
