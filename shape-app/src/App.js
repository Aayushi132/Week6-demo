import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BarChart from "./BarChart";
import Tree from "./Tree";
import data from "./data";
import SpherePage from "./SpherePage";
import Home from "./Home";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/barChart" exact element={<BarChart />} />
          <Route path="/sphere" element={<SpherePage />} />
          <Route
            path="/tree"
            exact
            element={<Tree data={data} width={600} height={500} />}
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
