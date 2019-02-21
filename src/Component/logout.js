import React from "react";
import firebase from "../firebase";
import { connect } from 'react-redux'
import Appaction from "../store/action";


 class Logout extends React.Component {
  componentWillMount() {
    this.props.logout()
    // firebase
    //   .auth()
    //   .signOut()
    //   .then(() => {
    //     localStorage.removeItem("admin");
     
    //     this.props.history.push("/");
    //   });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.logoutsuccess === true) {
      this.props.history.push("/");
    }
  }
  render() {
    return <div />;
  }
}


function mapState(state){
  return{
logoutsuccess:state.appReducer.logoutsuccessfull
  }
}
function mapDispatch(dispatch){
  return{
      logout:()=>{
          dispatch(Appaction.logout())
      }
  }
}

export default connect(mapState,mapDispatch)(Logout) 