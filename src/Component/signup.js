import React, { Component } from "react";
import firebase from "../firebase";
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "student",
            name: "",
            email: "",
            password: "",
            roll: ""

        };
    }

    usersignup() {

        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(response => {
                
                const details = {
                    name: this.state.name,
                    email: this.state.email,
                    roll: this.state.roll,
                  //  response:response.user.uid
                };
            
                firebase
                    .database()
                    .ref(`detailagain/${response.user.uid}`)
                    .push(details);
               // this.props.history.push("/login");
               alert("successfully signup")
            })
            .catch(error => {
                alert(error.message);
            });
    }


   
    render() {
        return (
    
                  <div>
                            <input
                                type="text"
                                style={{ marginTop: "30px", width: "400px" }}
                                className="form-control"
                                onChange={event => {
                                    this.setState({ name: event.target.value });
                                }}
                                placeholder=" name"
                            />
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
                            <input
                                type="text"
                                style={{ marginTop: "30px", width: "400px" }}
                                className="form-control"
                                onChange={event => {
                                    this.setState({roll: event.target.value });
                                }}
                                placeholder="enter roll"
                            />

                    <button
                        style={{ marginTop: "30px" }}
                        className="btn btn-success"
                        onClick={this.usersignup.bind(this)}
                    >
                        Sign Up
          </button>
                  
            </div>
        );
    }
}

export default Signup;