import React from "react";
import "./home.css";
import Header from "../component/header";
export default function Home() {
  return (
    <div className="container">
      <Header />
      <div className="header"></div>
      <div className="home_main">
        <div className="home_main_contents">
          <h2>KWON DONG HWAN'S</h2>
          <h1>PORTFOLIO</h1>
          <div className="btn">
            <a href="./about">ABOUT</a>
            <a href="./works">WORKS</a>
          </div>
        </div>
      </div>
    </div>
  );
}
