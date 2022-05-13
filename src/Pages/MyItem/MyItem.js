import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyItem = () => {
  const [products, setProducts] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:5000/product?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container py-5">
      <div className="text-center ">
        <h1 className="text-uppercase fw-bold mb-4">
          Here are only those product which you added
        </h1>
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
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
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

export default MyItem;
