import React from "react";
import Banner from "./Banner/Banner";
import Header from "./Header/Header";
import style from "./Home.module.css";
import Inventory from "./Inventory/Inventory";

const Home = () => {
  return (
    <div>
      <div id={style.home}>
        <div className={style.layer}>
          <Header></Header>
          <Banner></Banner>
        </div>
      </div>
      <Inventory></Inventory>
    </div>
  );
};

export default Home;
