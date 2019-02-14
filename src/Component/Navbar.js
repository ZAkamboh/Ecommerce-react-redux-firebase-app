import React, { Component } from "react";
import { Router, Link, Route } from "react-router-dom";
import { connect } from 'react-redux'
import Appaction from "../store/action";
class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      admin: undefined,
      cartItem: ""
    }
  }
  componentWillMount() {
    const admin = JSON.parse(localStorage.getItem("admin"))
    if (admin !== null) {
      var key = Object.keys(admin);
      var vals = admin[key[0]];
      this.setState({ admin: vals })
    }
    // const cartItem = JSON.parse(localStorage.getItem("cart"));
    // if (cartItem !== null && cartItem.length > 0) {
    //   this.setState({ cartItem: cartItem.length })
    // }
    this.props.localdata()
    this.props.navbar()
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.cartItemss.length > 0) {

      this.setState({ cartItem: nextProps.cartItemss.length })
    }
  }
  dropdown() {

  }
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


    };
    return (
      <div>

        {this.state.admin ? (<nav className="navbar navbar-inverse bg-primary">
          <div className="navbar nabar-right">
            <div className="navbar nabar-right" />

            <div className="navbar nabar-right">


              <div>
                {this.state.admin && this.state.admin.name}
              </div>
              <Link
                className="navbar navbar-content"
                style={styling}
                to="/uploadimages"
              >
                upload images
              </Link>
              <Link
                className="navbar navbar-content"
                style={styling}
                to="/seeimages"
              >
                see uploaded images
              </Link>
              <Link
                className="btn btn-primary"
                to="/logout"
              >
                Logout
              </Link>

            </div>
          </div>
        </nav>) : (<nav className="navbar navbar-inverse bg-primary">
          <div className="navbar nabar-right">
            <div className="navbar nabar-right" />

            <div className="navbar nabar-right">



              <Link
                className="navbar navbar-content"
                style={styling}
                to="/mobiles"
              >
                Mobiles
              </Link>
              <Link
                className="navbar navbar-content"
                style={styling}
                to="/cameras"
              >
                Cameras
              </Link>
              <Link
                className="btn btn-primary"
                to="/cart"
                style={{ padding: 20, display: "flex" }}
              >

                <i className="fas fa-cart-plus" />
                {this.state.cartItem && <div style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: "red", top: -10 }}>{this.state.cartItem}</div>}
              </Link>

            </div>
          </div>
        </nav>)}


      </div>
    );
  }
}
function mapState(state) {
  return {
    cartItemss: state.appReducer.cartItem
  }
}
function mapDispatch(dispatch) {
  return {
    localdata: () => {
      dispatch(Appaction.localdata())
    },
    navbar:()=>{
      dispatch(Appaction.navbar())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)