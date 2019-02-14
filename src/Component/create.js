import React, { Component } from 'react'
import axios from "axios"
export default class Create extends Component {

    constructor(props) {
        super();
        this.state = {
            username: "",
            fname: "",
            contact: "",
            address: ""
        }
    }

    username(e) {
        this.setState({ username: e.target.value })
    }
    fname(e) {
        this.setState({ fname: e.target.value })
    }
    contact(e) {
        this.setState({ contact: e.target.value })
    }
    address(e) {
        this.setState({address: e.target.value })
    }
submit(){
    var data={
       username: this.state.username,
       fname: this.state.fname,
       contact: this.state.contact,
       address: this.state.address
    }

    axios.post(`http://localhost:5000/create/${data}`).then((res)=>{
        console.log(res)
    })
}
    render() {
        return (
            <div>
                <input type="text" onChange={this.username.bind(this)} className="form-control" placeholder="username" name="username" />
                <input type="text" onChange={this.fname.bind(this)} className="form-control" placeholder="father name" name="fname" />
                <input type="text" onChange={this.contact.bind(this)} className="form-control" placeholder="contact" name="contact" />
                <input type="text" onChange={this.address.bind(this)} className="form-control" placeholder="address" name="address" />
                <center><button onClick={this.submit.bind(this)} className="btn btn-success mx-2">submit</button></center>

            </div>
        )
    }
}
