import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/product?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/product/${_id}`, {
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

export default MyItem;
