import React from "react";
import { Button, Form } from "react-bootstrap";

const AddProduct = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">
        Do you want to add some items?
      </h2>
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Product Name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="number" placeholder="Product pricerequired" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Product Suplirequireder" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Product Brandrequired" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="number" placeholder="Relase Year" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Product Origirequiredn Country"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="number"
                placeholder="Product Quantrequiredity"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </Form.Group>
            <Button variant="outline-primary" type="submit" className=" mb-4">
              Add Your Product
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
