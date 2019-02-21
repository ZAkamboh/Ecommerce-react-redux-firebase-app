import React, { Component } from "react";
import { Router, Link, Route } from "react-router-dom";
import { connect } from 'react-redux'
import Appaction from "../store/action";
import Navbar from 'react-bootstrap/Navbar'
class Navbars extends Component {
  constructor(props) {
    super(props)
    this.state = {
      admin: undefined,
      cartItem: 0,
    //  user: ""
    }
  }
  componentWillMount() {
    // const user = JSON.parse(localStorage.getItem("userrecords"))
    // this.setState({ user: user }, () => {
    //   //console.log(this.state.user)
    // })
    // const admin = JSON.parse(localStorage.getItem("admin"))
    // if (admin !== null) {
    //   var key = Object.keys(admin);
    //   var vals = admin[key[0]];
    //   this.setState({ admin: vals })
    // }
    // const cartItem = JSON.parse(localStorage.getItem("cart"));
    // if (cartItem !== null && cartItem.length > 0) {
    //   this.setState({ cartItem: cartItem.length })
    // }
    this.props.localdata()
    this.props.navbar()
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.cartItemss !== null && nextProps.cartItemss.length > 0) {
      console.log(nextProps.cartItemss);
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

        {this.props.navbarss ? (<nav className="navbar navbar-inverse bg-dark">
          <div className="navbar nabar-right">
            <div className="navbar nabar-right" />

            <div className="navbar nabar-right">


              <div>
                {this.props.navbarss && this.props.navbarss.name}
              </div>
              <Link
                className="navbar navbar-content"
                style={styling}
                to="/uploadimages"
              >
                Upload Items
              </Link>
              <Link
                className="navbar navbar-content"
                style={styling}
                to="/seeimages"
              >
                Uploaded Items
              </Link>
              <Link
                className="navbar navbar-content"
                style={styling}
                to="/orders"
              >
                Orders
              </Link>
              <Link
                className="btn btn-primary"
                to="/logout"
              >
                Logout
              </Link>

            </div>
          </div>
        </nav>) : (

            <Navbar fixed="top" className="navbar navbar-inverse bg-dark">

              <div className="navbar nabar-right">
                <div className="navbar nabar-right" />

                <div className="navbar nabar-right">

                  <Link
                    className="navbar navbar-content"
                    style={styling}
                    to="/"
                  >
                    Home
              </Link>

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

                    to="/cart"
                    style={{ padding: 20, display: "flex" }}
                  >

                    <i className="fas fa-cart-plus " />

                    {this.props.cartItemss && this.props.cartItemss.length > 0 && <div style={{ height: 20, width: 20, color: "white", marginLeft: 5 }}>{this.props.cartItemss.length}</div>}
                  </Link>
                  {this.props.loginUser && <Link
                    className="navbar navbar-content"
                    style={styling}
                    to="/logout"
                  >
                    Logout
                  </Link>
                  }
                </div>
              </div>
            </Navbar>)}


      </div>
    );
  }
}
function mapState(state) {
  return {
    cartItemss: state.appReducer.cartItem,
    navbarss: state.appReducer.navbar,
    loginUser:state.appReducer.loginuser

  }
}
function mapDispatch(dispatch) {
  return {
    localdata: () => {
      dispatch(Appaction.localdata())
    },
    navbar: () => {
      dispatch(Appaction.navbar())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbars)