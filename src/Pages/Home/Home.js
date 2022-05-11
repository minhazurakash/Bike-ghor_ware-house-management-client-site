import React from "react";
import Banner from "./Banner/Banner";
import Feature from "./Feature/Feature";
import style from "./Home.module.css";
import HomeNav from "./HomeNav/HomeNav";
import Inventory from "./Inventory/Inventory";

const Home = () => {
  return (
    <div>
      <div id={style.home}>
        <div className={style.layer}>
          <HomeNav></HomeNav>
          <Banner></Banner>
        </div>
      </div>
      <Inventory></Inventory>
      <Feature></Feature>
    </div>
  );
};

export default Home;
