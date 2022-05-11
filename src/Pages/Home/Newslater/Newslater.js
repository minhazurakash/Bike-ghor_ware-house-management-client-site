import React from "react";
import newslater from "./Newslater.module.css";

const Newslater = () => {
  return (
    <div className={`${newslater.newslater} my-5`}>
      <div className={`${newslater.layer} py-5`}>
        <div className="container py-5 my-5">
          <div className="row text-white">
            <div className="col-lg-6 mb-4  d-block justify-content-center align-items-center">
              <h6 className="">LATEST NEWS AND DEALS DIRECTLY TO YOUR INBOX</h6>
              <h1>SUBSCRIBE FOR UPDATED</h1>
            </div>
            <div className="col-lg-6 mb-4 d-block justify-content-center align-items-center">
              <div class="input-group input-group-lg">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Large"
                  placeholder="Enter your email"
                  aria-describedby="inputGroup-sizing-sm"
                />
                <button className="btn btn-danger">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newslater;
