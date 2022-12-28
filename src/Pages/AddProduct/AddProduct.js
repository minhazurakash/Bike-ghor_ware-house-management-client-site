import React from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddProduct = () => {
  const [user] = useAuthState(auth);
  const handleAddProduct = (event) => {
    event.preventDefault();
    const email = user.email;
    const name = event.target.name.value;
    const price = event.target.price.value;
    const img = event.target.img.value;
    const suplier = event.target.suplier.value;
    const type = event.target.type.value;
    const year = 2022;
    const quantity = event.target.quantity.value;
    const description = event.target.description.value;

    const product = {
      email,
      name,
      price,
      suplier,
      type,
      year,
      img,
      quantity,
      description,
    };
    fetch("https://bikeghor-server-production.up.railway.app/addproduct", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    toast.success("Product added", {
      position: "top-center",
      autoClose: 2000,
    });
    event.target.reset();
  };
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-4">
        Do you want to add some items?
      </h2>
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <Form onSubmit={handleAddProduct}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                name="name"
                type="text"
                placeholder="Product Name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                name="price"
                type="number"
                placeholder="Product price"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                name="suplier"
                type="text"
                placeholder="Product Suplier"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                name="type"
                type="text"
                placeholder="Product Brand"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                name="img"
                type="text"
                placeholder="Product Image Link"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                name="quantity"
                type="number"
                placeholder="Product Quanty"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <textarea
                name="description"
                className="form-control"
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
