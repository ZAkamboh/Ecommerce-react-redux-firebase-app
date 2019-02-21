import React, { Component } from 'react'
import firebase from "../firebase";
export default class Usersignup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            email: "",
            password: "",
            address:"",
            mobileno:""

        };
    }

    usersignup() {

        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(response => {
                
                const details = {
                    fname: this.state.fname,
                    lname: this.state.lname,
                    email: this.state.email,
                    address: this.state.address,
                    mobileno:this.state.mobileno,
                    uid:response.user.uid
                };            
                firebase
                    .database()
                    .ref(`userrecords/${response.user.uid}`)
                    .set(details);
                this.props.history.push("/userlogin");
              // alert("successfully signup")
            })
            .catch(error => {
                alert(error.message);
            });
    }

  render() {
    return (
        <center>
        <div className="container" style={{ marginTop:"10%"}}>  
        <input
            type="text"
            style={{ marginTop: "30px", width: "400px" }}
            className="form-control"
            onChange={event => {
                this.setState({ fname: event.target.value });
            }}
            placeholder="First Name"
        />
           <input
            type="text"
            style={{ marginTop: "30px", width: "400px" }}
            className="form-control"
            onChange={event => {
                this.setState({ lname: event.target.value });
            }}
            placeholder="Last Name"
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
                this.setState({address: event.target.value });
            }}
            placeholder="address"
        />
          <input
            type="text"
            style={{ marginTop: "30px", width: "400px" }}
            className="form-control"
            onChange={event => {
                this.setState({mobileno: event.target.value });
            }}
            placeholder="contact No"
        />

 <button
    style={{ marginTop: "30px" }}
     className="btn btn-success"
     onClick={this.usersignup.bind(this)}
>
     Sign Up
 </button> 


</div>

</center>
    )
  }
}
