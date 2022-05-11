import React from "react";
import banner from "./Banner.module.css";

const Banner = () => {
  return (
    <div className="container my-5 py-5 text-white">
      <div className="py-5">
        <h1 className="text-uppercase lh-base fw-bolder animate__animated animate__slideInLeft">
          The Combination of <br />
          power and perfection
        </h1>
        <p className="fs-6 my-3">
          We are one of the most biggest Dealer in bangladesh. <br />
          Do you know about us?
        </p>
      </div>
      <div className="text-center py-5">
        <a
          href="#inventory"
          className="btn btn-outline-warning animate__animated animate__backInUp animate__delay-1s"
        >
          Explore us more
        </a>
      </div>
    </div>
  );
};

export default Banner;
