import React from "react";
import "./App.scss";
import TopNav from "./components/TopNav/TopNav";
import LeftNav from "./components/LeftNav/LeftNav";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import MainApp from "./components/MainApp/MainApp";
import PremiereVisite from "./Pages/PremiereVisite";
import Adaptation from "./Pages/Adaptation";
import PatientsEssaie from "./Pages/PatientsEssaie";
import PatientsAppareille from "./Pages/PatientsAppareille";
import Relances from "./Pages/Relances";
import Statistiques from "./Pages/Statistiques";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopNav />
        <div class="row">
          <div class="col-lg-2 col-md-3 col-12">
            <LeftNav />
          </div>
          <div class="col-lg-10 col-md-3 col-12 MainApp">
            <Switch>
              <Route exact path="/" component={MainApp} />
              <Route path="/PremiereVisite" component={PremiereVisite} />
              <Route path="/Adaptation" component={Adaptation} />
              <Route path="/PatientsEssaie" component={PatientsEssaie} />
              <Route path="/PatientsAppareille" component={PatientsAppareille}/>
              <Route path="/Relances" component={Relances} />
              <Route path="/Statistiques" component={Statistiques} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
