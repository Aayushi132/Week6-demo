import React, { Component } from "react";
import AppNavbar from "./Navbar";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <Container fluid>
          <Button className="m-5 nav bg-light">
            <Link to="/barChart" className="nav-link">
              Bar Chart
            </Link>
          </Button>
          <Button className="m-5 nav bg-light">
            <Link to="/tree" className="nav-link">
              Tree
            </Link>
          </Button>
          <Button className="m-5 nav bg-light">
            <Link to="/sphere" className="nav-link">
              Sphere
            </Link>
          </Button>
        </Container>
      </div>
    );
  }
}

export default Home;
