import React from "react";
import inventory from "./Inventory.module.css";

const Inventory = () => {
  return (
    <div>
      <div className="text-center">
        <i class="fa-solid fa-motorcycle fs-3"></i>
        <h5 className="text-danger">TAKING RIDES TO A NEWER LEVEL</h5>
        <h1 className="fw-bold mb-5">WHICH ONE DO YOU LIKE MOST?</h1>
      </div>
      <div className="container">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div class="col">
            <div class={`${inventory.mainCard} card h-100`}>
              <div
                className={`${inventory.cardHead} d-flex justify-content-between align-items-center p-3`}
              >
                <div>
                  <h5>BMW T9034 RX</h5>
                  <small>Suplier : Akash</small>
                </div>
                <h5 className="text-danger">$5,025</h5>
              </div>
              <img
                src="https://i.ibb.co/dctKvv0/bike-1.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <div className="d-flex justify-content-around align-items-center mb-3">
                  <div>
                    <h6 className="lh-1 fw-bold">YEAR</h6>
                    <small>2021</small>
                  </div>
                  <div>
                    <h6 className="lh-1 fw-bold">TYPE</h6>
                    <small>BMW</small>
                  </div>
                  <div>
                    <h6 className="lh-1 fw-bold">MADE</h6>
                    <small>JAPAN</small>
                  </div>
                </div>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src="https://i.ibb.co/dctKvv0/bike-1.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a short card.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src="https://i.ibb.co/dctKvv0/bike-1.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
