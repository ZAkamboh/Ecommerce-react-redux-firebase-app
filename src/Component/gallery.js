import React, { Component } from "react";
import firebase from "../firebase";
import Navbar from "./Navbar"
export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataa: "",
      fetch: false,
      searchedData: []
    }
  }
  render() {
    return (
      <div>
          Home page hai bhai ye
      </div>
    );
  }
}
