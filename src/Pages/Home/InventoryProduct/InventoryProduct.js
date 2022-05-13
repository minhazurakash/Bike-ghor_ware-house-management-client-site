import React from "react";
import inventory from "./../Inventory/Inventory.module.css";
import "animate.css";
import { useNavigate } from "react-router-dom";

const InventoryProduct = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="col ">
      <div className={`${inventory.mainCard} card h-100`}>
        <div
          className={`${inventory.cardHead} d-flex justify-content-between align-items-center p-3`}
        >
          <div>
            <h5>{product.name}</h5>
            <small>Suplier : {product.suplier}</small>
          </div>
          <h5 className="text-danger">${product.price}</h5>
        </div>
        <img src={`${product.img}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="d-flex justify-content-around align-items-center mb-3">
            <div>
              <h6 className="lh-1 fw-bold">YEAR</h6>
              <small>{product.year}</small>
            </div>
            <div>
              <h6 className="lh-1 fw-bold">Brand</h6>
              <small>{product.type}</small>
            </div>
            <div>
              <h6 className="lh-1 fw-bold">Quantity</h6>
              <small>{product.quantity}</small>
            </div>
          </div>
          <p className="card-text">{product.description}</p>
        </div>
        <div className={`${inventory.updateBtn} `}>
          <button
            onClick={() => navigate(`/inventory/${product._id}`)}
            className="btn btn-outline-warning"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryProduct;
