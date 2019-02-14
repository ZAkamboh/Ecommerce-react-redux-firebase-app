import React, { Component } from "react";
import firebase from "../firebase";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
            email: "",
            password: "",
          

        };
    }

    userlogin() {

        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(response => {
                
            
                firebase
                    .database()
                    .ref(`detailagain/${response.user.uid}`)
                    .on("value",snap=>{
                        var data=snap.val();
                        localStorage.setItem("admin",JSON.stringify(data))
                    });
               this.props.history.push("/home");
               
            })
            .catch(error => {
                alert(error.message);
            });
    }


   
    render() {
        return (
    
                  <div>
                           <center>
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
          </center>
                  
            </div>
        );
    }
}

export default Login;