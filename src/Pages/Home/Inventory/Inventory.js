import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import InventoryProduct from "../InventoryProduct/InventoryProduct";
import inventory from "./Inventory.module.css";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("inventory.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div id="inventory" className="py-4">
      <div className="text-center animate__animated animate__slideInLeft">
        <i className="fa-solid fa-motorcycle fs-3"></i>
        <h5 className="text-danger">TAKING RIDES TO A NEWER LEVEL</h5>
        <h1 className="fw-bold mb-5">WHICH ONE DO YOU LIKE MOST?</h1>
      </div>
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {products.map((product) => (
            <InventoryProduct
              key={product.id}
              product={product}
            ></InventoryProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
