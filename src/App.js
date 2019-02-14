import React, { Component } from "react";
import { TextField, List, ListItem, ListItemText } from "@material-ui/core";
// import firebase from "firebase";
// import  "firebase/storage";
import "./App.css";
import createBrowserHistory from "history/createBrowserHistory";
import { Router, Link, Route } from "react-router-dom";

// import Userone from "./Component/user1";


import Navbar from "./Component/Navbar";
import UploadImages from "./Component/uploadimages";
import Gallery from "./Component/gallery";
import  Detail from "./Component/Detail";
import  Cart from "./Component/cart";
import {Provider} from 'react-redux';
import store from './store'
import Create from './Component/create'
import Camera from './Component/camera'
import Mobile from './Component/mobile'
import Signup from './Component/signup'
import Login from './Component/login'
import AdminHome from './Component/adminHome'
import Logout from './Component/logout'




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
     
        <Provider store={store}>
        <Router history={customHistory}>
          <div>
          <Navbar/>
            <Route exact path="/" component={Gallery} />
            <Route path="/detail" component={Detail} />
            <Route path="/cart" component={Cart} />
            <Route path="/create" component={Create} />
            <Route path="/cameras" component={Camera} />
            <Route path="/mobiles" component={Mobile} />
            <Route path="/admin" component={Login} />
            <Route path="/home" component={ AdminHome} />
            <Route path="/logout" component={Logout} />
            <Route path="/uploadimages" component={UploadImages} />
          </div>
        </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
