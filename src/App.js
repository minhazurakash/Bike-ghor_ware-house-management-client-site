import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Shared/Login/Login";
import Signup from "./Pages/Shared/Signup/Signup";
import Reset from "./Pages/Shared/Reset/Reset";
import Home from "./Pages/Home/Home";
import Header from "././Pages/Home/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import ManageInventory from "./Pages/ManageInventory/ManageInventory";

import SingleInventory from "./Pages/Shared/SingleInventory/SingleInventory";
import AddProduct from "./Pages/AddProduct/AddProduct";
import MyItem from "./Pages/MyItem/MyItem";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/reset" element={<Reset></Reset>}></Route>
        <Route path="/addproduct" element={<AddProduct></AddProduct>}></Route>
        <Route path="/myitem" element={<MyItem></MyItem>}></Route>
        <Route
          path="/manage"
          element={<ManageInventory></ManageInventory>}
        ></Route>
        <Route
          path="/inventory/:id"
          element={<SingleInventory></SingleInventory>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
