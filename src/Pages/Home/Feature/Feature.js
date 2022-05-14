import React from "react";
import feature from "./Feature.module.css";

const Feature = () => {
  return (
    <div className="container mb-5 py-3">
      <h2 className="text-uppercase mb-5 text-center fw-bold">
        Checkout our key feature
      </h2>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-6">
          <img
            src="https://i.ibb.co/VDQjQpT/feature.png"
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="col-lg-6 ">
          <div className="text-center">
            <h5 className="text-danger fw-bold">
              TAKING RIDES TO A NEWER LEVEL
            </h5>
            <h1 className="fw-bolder mb-4">
              A STEP ABOVE WITH <br /> RIDER-FRIENDLY NATURE
            </h1>
            <p className="lh-lg text-muted mb-5 text-start">
              We are Bike Ghor. The most popular Bike dealer point in all over
              Bangladesh. People loves us and also loves our bikes. We never get
              any complain about our service from any customer.
            </p>
          </div>
          <div>
            <div className="row">
              <div className="col-6 col-sm-4 mb-3 d-flex justify-content-center align-items-center">
                <div
                  className={`border border-primary p-3 rounded-circle d-flex justify-content-center align-items-center me-3 ${feature.iconDiv}`}
                >
                  <i className="fa-solid fa-gear fs-5"></i>
                </div>
                <h6 className="fw-bold">EASY TO BOOK FOR RENTALS</h6>
              </div>

              <div className="col-6 col-sm-4 mb-3 d-flex justify-content-center align-items-center">
                <div
                  className={`border border-primary p-3 rounded-circle d-flex justify-content-center align-items-center me-3 ${feature.iconDiv}`}
                >
                  <i className="fa-solid fa-key fs-5"></i>
                </div>
                <h6 className="fw-bold">LONGER RIDES FOR ALL DAY</h6>
              </div>

              <div className="col-6 col-sm-4 mb-3 d-flex justify-content-center align-items-center">
                <div
                  className={`border border-primary p-3 rounded-circle d-flex justify-content-center align-items-center me-3 ${feature.iconDiv}`}
                >
                  <i className="fa-solid fa-gas-pump fs-5"></i>
                </div>
                <h6 className="fw-bold">GET MILEAGE UNLIMITED</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
