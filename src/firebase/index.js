
import React, { Component } from "react";
import * as firebaseconfig from "firebase";

var config = {
    apiKey: "AIzaSyDEgR90WTpQxTjaKpy4YaTkS8djGSz135g",
    authDomain: "attribechatapp.firebaseapp.com",
    databaseURL: "https://attribechatapp.firebaseio.com",
    projectId: "attribechatapp",
    storageBucket: "attribechatapp.appspot.com",
    messagingSenderId: "875522707605"
  };
   var firebase=firebaseconfig.initializeApp(config);

  const storage= firebase.storage();
  export {storage,firebase as default}