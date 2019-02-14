import React from "react";
import firebase from "../firebase";

export default class Logout extends React.Component {
  componentWillMount() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem("admin");
     
        this.props.history.push("/");
      });
  }
  render() {
    return <div />;
  }
}