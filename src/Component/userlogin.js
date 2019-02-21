import React, { Component } from 'react'
import firebase from "../firebase";
import { connect } from 'react-redux'
import Appaction from "../store/action";

 class Userlogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    userlogin(){

        var userlogin={
            email:this.state.email,
            password:this.state.password,
        
        }
        //    firebase
        //     .auth()
        //     .signInWithEmailAndPassword(this.state.email, this.state.password)
        //     .then(response => {
        //         firebase
        //             .database()
        //             .ref(`userrecords/${response.user.uid}`)
        //             .on("value",snap=>{
        //                // var data=snap.val();
        //                 localStorage.setItem("userrecords",JSON.stringify(snap.val()))
        //             });
        //        this.props.history.push("/cart");
        //       // alert("successfully login")
               
        //     })
        //     .catch(error => {
        //         alert(error.message);
        //     });
        this.props.userlogin(userlogin);
    }


  render() {
    return (
        <div style={{ marginTop: 60 }}>
                           <center>
                       <h1 style={{color:"green"}}>USER LOGIN FORM</h1>
                            <input
                                type="email"
                                style={{ marginTop: "30px", width: "400px" }}
                                className="form-control"
                                onChange={event => {
                                    this.setState({ email: event.target.value });
                                }}
                                placeholder=" Email"
                            />
                            
                            <input
                                type="text"
                                style={{ marginTop: "30px", width: "400px" }}
                                className="form-control"
                                onChange={event => {
                                    this.setState({ password: event.target.value });
                                }}
                                placeholder="password"
                            />
                        

                    <button
                        style={{ marginTop: "30px" }}
                        className="btn btn-success"
                        onClick={this.userlogin.bind(this)}
                    >
                        Login
          </button>
          <button
                        style={{ marginTop: "30px" }}
                        className="btn btn-primary mx-2"
                        onClick={()=>this.props.history.push("/usersignup")}
                    >
                        signup
          </button>
          {this.props.loginUser && this.props.history.push('/cart')}
        
          </center>
                  
            </div>
    )
  }
}
function mapState(state){
return{
    loginUser:state.appReducer.loginuser
}
}
function mapDispatch(dispatch){
    return{
userlogin:(payload)=>{
    dispatch(Appaction.userlogin(payload))
}
    }
}

export default connect(mapState,mapDispatch)(Userlogin)