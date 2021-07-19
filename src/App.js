import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Apartamento from "./components/pages/Apartamento";
import Pontos from "./components/pages/Pontos";
import Serviços from "./components/pages/Serviços";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/apartamento" component={Apartamento} />
          <Route path="/pontos" component={Pontos} />
          <Route path="/serviços" component={Serviços} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
