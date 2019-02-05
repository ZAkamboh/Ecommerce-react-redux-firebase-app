import React, { Component } from "react";
import { Router, Link, Route } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    var styling = {
      color: "yellow",
      fontSize: "20px",
      fontFamily: "algerian"
    };
    var student = {
      color: "white",
      fontSize: "20px",
      fontFamily: "algerian",
      marginLeft: "100px"
    };
    var s = {
      color: "white",
      fontSize: "20px",
      fontFamily: "algerian"
    };
    return (
      <div>
        <nav className="navbar navbar-inverse bg-primary">
          <div className="navbar nabar-right">
            <div className="navbar nabar-right" />

            <div className="navbar nabar-right">
              <Link
                className="navbar navbar-content"
                style={styling}
                to="/upload"
              >
                Upload image
              </Link>
              <Link
                className="navbar navbar-content"
                style={styling}
                to="/gallery"
              >
                Gallery
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
