import React, { Component } from 'react'

export default class AdminHome extends Component {
  componentWillMount() {
    const admin= JSON.parse(localStorage.getItem("admin")) 
    if(!admin){
        alert("you are not admin");
        this.props.history.push("/")
    }
  }
  render() {
    return (
      <div>
        <h1>welcome to admin panel</h1>
      </div>
    )
  }
}
