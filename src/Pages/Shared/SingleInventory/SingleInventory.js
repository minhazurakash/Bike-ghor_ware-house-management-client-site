import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const SingleInventory = () => {
  // load specific items by id
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://stark-brushlands-59441.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);

  // deliver function
  const deliver = () => {
    const previousQuantity = parseInt(product.quantity);
    const newQuantity = previousQuantity - 1;
    fetch(`https://stark-brushlands-59441.herokuapp.com/update/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({ quantity: newQuantity }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  // addQuntity function
  const addQuntity = (e) => {
    e.preventDefault();
    const previousQuantity = parseInt(product.quantity);
    const quantityInput = parseInt(e.target.quantity.value);
    const newQuantity = previousQuantity + quantityInput;
    fetch(`https://stark-brushlands-59441.herokuapp.com/update/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({ quantity: newQuantity }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    e.target.reset();
  };

  return (
    <div className="container p-5">
      <h2 className="text-center mb-5">
        Add more abailable quantity || Delivered product
      </h2>
      <div className="row">
        <div className=" col-md-8 col-lg-6 mx-auto">
          <Form onSubmit={addQuntity}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Product name"
                value={`Product name : ${product.name}`}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Control
                type="text"
                placeholder="Brand"
                value={`Brand : ${product.type}`}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Control
                type="text"
                placeholder="Quantity"
                value={`Product Quantity : ${product.quantity}`}
                disabled
              />
            </Form.Group>
            <label htmlFor="">Add more abailable Quantity</label>
            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Control
                name="quantity"
                type="number"
                placeholder="Add Quantity"
                required
              />
            </Form.Group>
            <Button variant="outline-primary" type="submit" className=" mb-4">
              Add Quantity
            </Button>
          </Form>
          <div>
            <h5>If already delivered any product then send response.</h5>
            <button onClick={deliver} className="btn btn-outline-primary">
              Delivered One Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleInventory;
