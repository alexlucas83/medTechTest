import React, { Component } from "react";
import "./MainApp.scss";

export default class MainApp extends Component {
  render() {
    return (
      <div className="MainApp">
        <div class="MainApp1">
          <p className="titleMainApp">
            Comment va Madame Lucette Michu, née le 25/01/1945
          </p>
        </div>

        <div class="container">
          <div class="row ">
            <div class="col-md-5 offset-2">
              <a className="nav-link buttonMainApp" href="https://www.linkedin.com/in/alex-provost">
                Origine
              </a>
            </div>
            <div class="col-md-5">
              <a className="nav-link buttonMainApp" href="https://www.linkedin.com/in/alex-provost">
                Médical
              </a>
            </div>
          </div>

          <div class="row ">
            <div class="col-md-5 offset-2">
              <a className="nav-link buttonMainApp" href="https://www.linkedin.com/in/alex-provost">
                Gênes
              </a>
            </div>
            <div class="col-md-5">
              <a className="nav-link buttonMainApp1" href="https://www.linkedin.com/in/alex-provost">
                Information Patients
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
