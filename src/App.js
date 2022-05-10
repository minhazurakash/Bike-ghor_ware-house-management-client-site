import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Shared/Login/Login";
import Signup from "./Pages/Shared/Signup/Signup";
import Reset from "./Pages/Shared/Reset/Reset";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/reset" element={<Reset></Reset>}></Route>
      </Routes>
    </div>
  );
}

export default App;
