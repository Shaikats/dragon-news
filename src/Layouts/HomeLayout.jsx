import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import LatestNews from "../Components/LatestNews";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-3">
          <LatestNews></LatestNews>
        </section>
      </header>
      <main>
        <section className="left_nav"></section>
        <section className="main">
          <Outlet></Outlet>
        </section>
        <section className="right_nav"></section>
      </main>
    </div>
  );
};

export default HomeLayout;
