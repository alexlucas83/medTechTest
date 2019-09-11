import React, { Component } from "react";
import logo from "./logo.jpg";
import "./TopNav.scss";
import { Link } from "react-router-dom";

export default class TopNav extends Component {
  render() {
    return (
      <div className="row TopNav">
        <div className=" col-2 TopNavLogo">
          <img src={logo} className="TopNavlogo1" alt="logo" />
        </div>
        <div className=" col-10 TopNavButton">
          <Link className="Accueil" to="/" href="">
            Accueil
          </Link>
          <button className="buttonTopNav">Thibaut Gressier ↓</button>
        </div>
      </div>
    );
  }
}
