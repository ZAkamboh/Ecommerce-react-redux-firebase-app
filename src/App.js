import React, { Component } from "react";
import { TextField, List, ListItem, ListItemText } from "@material-ui/core";
// import firebase from "firebase";
// import  "firebase/storage";
import "./App.css";
import createBrowserHistory from "history/createBrowserHistory";
import { Router, Link, Route } from "react-router-dom";

// import Userone from "./Component/user1";


import Navbar from "./Component/Navbar";
import Upload from "./Component/upload";
import Gallery from "./Component/gallery";
import  Detail from "./Component/Detail";


const customHistory = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // text: "",
      // messages: []
    };
  }
  componentWillMount() {
    // var config = {
    //   apiKey: "AIzaSyDEgR90WTpQxTjaKpy4YaTkS8djGSz135g",
    //   authDomain: "attribechatapp.firebaseapp.com",
    //   databaseURL: "https://attribechatapp.firebaseio.com",
    //   projectId: "attribechatapp",
    //   storageBucket: "attribechatapp.appspot.com",
    //   messagingSenderId: "875522707605"
    // };
    // firebase.initializeApp(config);
  }
  render() {
    return (
      <div>
        <Router history={customHistory}>
          <div>
            {/* <Route exact path="/" component={Home} />
            <Route path="/chat" component={Chat} /> */}
            <Route path="/" component={Navbar} />
            <Route path="/upload" component={Upload} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/detail" component={Detail} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
