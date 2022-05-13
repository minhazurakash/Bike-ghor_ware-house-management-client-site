import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const SingleInventory = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="container p-5">
      <h2 className="text-center mb-5">
        Add more abailable quantity || Delivered product
      </h2>
      <div className="row">
        <div className=" col-md-8 col-lg-6 mx-auto">
          <Form>
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
              <Form.Control type="number" placeholder="Add Quantity" />
            </Form.Group>
            <Button variant="outline-primary" type="submit" className=" mb-4">
              Add Quantity
            </Button>
          </Form>
          <div>
            <h5>If already delivered any product then send response.</h5>
            <button className="btn btn-outline-primary">
              Delivered One Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleInventory;
