import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ManageInventory.css";

const ManageInventory = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("inventory.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
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
        <table class="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col">product Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <button className="btn btn-danger">Delete</button>
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
