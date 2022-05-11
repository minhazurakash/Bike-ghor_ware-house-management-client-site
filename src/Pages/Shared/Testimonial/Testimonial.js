import React from "react";

const Testimonial = () => {
  return (
    <div className="container mb-5 py-3">
      <h2 className="text-uppercase mb-5 text-center fw-bold">Testimonial</h2>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-6">
          <img
            src="https://i.ibb.co/zsX3W9W/img-reviews-1-min.png"
            className="img-fluid mb-5"
            alt=""
          />
        </div>
        <div className="col-lg-6">
          <h5 className="text-danger fw-bold">TAKING RIDES TO A NEWER LEVEL</h5>
          <h1 className="fw-bolder mb-4">WHY PEOPLE ARE TALKING ABOUT US</h1>
          <p className="lh-lg text-muted mb-5">
            We are Bike Ghor. The most popular Bike dealer point in all over
            Bangladesh. People loves us and also loves our bikes. We never get
            any complain about our service from any customer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
