import React from "react";
import "../App.css";
import { useState } from "react";
export default function Header() {
  const [view, setView] = useState("none");
  return (
    <header>
      <h1>
        <a href="/">
          <img
            src="https://z9in.github.io/myhome/images/logoB.svg"
            alt="logo"
          />
        </a>
      </h1>
      <nav>
        <ul class="depth1">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li class="nav_works">
            <a href="/works">WORKS</a>
            <ul class="depth2">
              <li>
                <a href="/works#individual">Individual</a>
              </li>
              <li>
                <a href="/works#team">Team</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <nav style={{ display: view }}>
        <ul class="depth1">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li class="nav_works">
            <a href="/works">WORKS</a>
            <ul class="depth2">
              <li>
                <a href="/works#individual">Individual</a>
              </li>
              <li>
                <a href="/works#team">Team</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <img
        id="nav_open"
        onClick={() => {
          console.log(view);
          if (view == "none") {
            setView("flex");
          } else {
            setView("none");
          }
        }}
        src="https://z9in.github.io/myhome/images/icon _menu_.svg"
        alt="menu"
      />
    </header>
  );
}
