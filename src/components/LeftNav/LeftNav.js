import React, { Component } from "react";
import "./LeftNav.scss";
// import PremiereVisite from '../../Pages/PremiereVisite/PremiereVisite';
import { Link } from "react-router-dom";

export default class LeftNav extends Component {
  render() {
    return (
      <div className="LeftNav">
        <nav class="nav flex-column">
          <Link className="nav-link" to="/PremiereVisite" href="">
            1ère visite
          </Link>
          <Link className="nav-link" to="/Adaptation">
            Adaptation
          </Link>
          <Link className="nav-link" to="/PatientsEssaie">
            Patients en essaie
          </Link>
          <Link
            className="nav-link patients"
            to="/PatientsAppareille"
            href="Patients appareillé"
          >
            Patients appareillé
          </Link>
          <nav class="nav1 flex-column">
            <Link className="nav-link" to="/Relances">
              Relances
            </Link>
            <Link className="nav-link" to="/Statistiques">
              Statistiques
            </Link>
          </nav>
        </nav>
        {/* <Route path="/PremiereVisite" exact component={PremiereVisite} /> */}
      </div>
    );
  }
}
