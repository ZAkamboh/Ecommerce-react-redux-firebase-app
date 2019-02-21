import React, { Component } from "react";
import firebase from "../firebase";
import { connect } from 'react-redux'
import Appaction from "../store/action";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
            email: "",
            password: "",
            name:""
          

        };
    }

    userlogin() {


        var adminlogin={
            email:this.state.email,
            password:this.state.password,
        
        }
    
        this.props.login(adminlogin)

        // firebase
        //     .auth()
        //     .signInWithEmailAndPassword(this.state.email, this.state.password)
        //     .then(response => {
                
            
        //         firebase
        //             .database()
        //             .ref(`detailagain/${response.user.uid}`)
        //             .on("value",snap=>{
        //                // var data=snap.val();
        //                 localStorage.setItem("admin",JSON.stringify(snap.val()))
        //             });
        //        this.props.history.push("/home");
               
        //     })
        //     .catch(error => {
        //         alert(error.message);
        //     });
    }


   
    render() {
        return (
    
                  <div style={{marginTop:50}}>
                           <center>
                       <h1>ADMIN LOGIN FORM</h1>
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

          {this.props.loginA && this.props.history.push('/home')}
          </center>
                  
            </div>
        );
    }
}

 function mapState(state){
     return{
loginA:state.appReducer.loginadmin
     }
 }
 function mapDispatch(dispatch){
     return{
         login:(payload)=>{
             dispatch(Appaction.login(payload))
         }
     }
 }

export default connect(mapState,mapDispatch)(Login) 