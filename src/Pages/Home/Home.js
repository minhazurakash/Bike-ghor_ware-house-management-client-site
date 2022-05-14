import React from "react";
import Testimonial from "../Shared/Testimonial/Testimonial";
import Banner from "./Banner/Banner";
import Feature from "./Feature/Feature";
import style from "./Home.module.css";
import HomeNav from "./HomeNav/HomeNav";
import Inventory from "./Inventory/Inventory";
import Newslater from "./Newslater/Newslater";

const Home = () => {
  console.log(process.env);
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
      <Newslater></Newslater>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
