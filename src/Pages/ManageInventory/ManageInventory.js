import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useProducts from "../../hooks/UseProducts";
import "./ManageInventory.css";

const ManageInventory = () => {
  const [products, setProducts] = useProducts();
  const navigate = useNavigate();

  const handleDelete = (_id) => {
    fetch(`https://bikeghor-server-production.up.railway.app/product/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.warning("Delete Successful", {
          position: "top-center",
          autoClose: 1000,
        });
      });
  };
  return (
    <div className="container">
      <div className="text-center py-5">
        <h1 className="text-uppercase fw-bold mb-4">
          Checkout our all products
        </h1>
        <h4 className="d-inline">Do you have any new product?</h4>{" "}
        <button
          onClick={() => navigate("/addproduct")}
          className="btn btn-primary"
        >
          Add
        </button>
      </div>
      <div className="table">
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col">product Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageInventory;
