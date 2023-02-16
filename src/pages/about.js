import React from "react";
import Header from "../component/header";
import "./about.css";
export default function About() {
  return (
    <div className="container">
      <Header />
      <div className="about_main">
        <h1>ABOUT</h1>
        <div className="about_info about_details">
          <h2>Infomation</h2>
          <ul className="about_details_text">
            <li>권동환(Kwon Dong hwan), 1983.07.27.</li>
            <li className="about_details_link">
              <a href="mailto:z9in21@naver.com">E-mail</a>
            </li>
            <span className="about_details_link_span">|</span>
            <li className="about_details_link">
              <a href="https://github.com/z9in" target="_blank">
                GitHub
              </a>
            </li>
            <span className="about_details_link_span">|</span>
            <li className="about_details_link">
              <a href="tel:010-8618-0735">phone</a>
            </li>
          </ul>
        </div>
        <div className="about_experience about_details">
          <h2>Experience</h2>
          <ul className="about_details_text">
            <li>
              UI/UX 웹디자인(웹퍼블리셔&프론트엔드개발)실무(2022.08.~2022.02.)
            </li>
            <li>
              2014.05.~2022.07. 중소기업 사무직 업무: 인사노무관리, 영업 및 현장
              관리
            </li>
          </ul>
        </div>
        <div className="about_skills about_details">
          <h2>Skills</h2>
          <ul className="about_details_text">
            <li>HTML5, CSS3</li>
            <li>JAVASCRIPT : J-QUERY, REACT</li>
            <li>NODE.JS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
