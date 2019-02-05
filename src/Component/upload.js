import React, { Component } from "react";
//import firebase from "firebase";
import firebase from "../firebase";
import {storage} from "../firebase";

export default class Upload extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      file: null,
      url:"",
      price: "",
      desc: "",
      progress:''
    };
    
  }

  upload() {
  
   const {file}=this.state
   const uploadTask= storage.ref(`images/${file.name}`).put(file)
 uploadTask.on('state_changed',(snapshot)=>{
  const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});

 },
(error)=>{
  console.log(error)
},

 ()=>{
   storage.ref('images').child(file.name).getDownloadURL().then(url=>{
     console.log(url)
     this.setState({url:url},()=>{
     // console.log(this.state.url);
     })
   
   })
 
 })
 
  }

  submit(){
    var data = {
      title: this.state.title,
      url: this.state.url,
      price: this.state.price,
      desc: this.state.desc
    };
    console.log(data);
    firebase
      .database()
      .ref("uploadimages")
      .push(data)
      .then(() => {
        alert("upload successfully");
      });
  }

  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <input
            className="form-control"
            type="text"
            placeholder="Title"
            onChange={e =>
              this.setState({ title: e.target.value }, () => {
                //console.log(this.state.desc);
              })
            }
          />
          <input
            className=""
            type="file"
            placeholder="upload image"
            onChange={e =>
              this.setState({ file: e.target.files[0] }, () => {
                console.log(this.state.file);
              })
            }
            
          />
              <button
            onClick={this.upload.bind(this)}
            className="btn btn-success mx-auto"
          >
            upload
          </button>
          
            <progress className="mx-auto" value={this.state.progress} max="100"/> 
          
            
          <input
            className="form-control"
            type="text"
            placeholder="price"
            onChange={e =>
              this.setState({ price: e.target.value }, () => {
                //console.log(this.state.desc);
              })
            }
          />
          <input
            className="form-control "
            type="text"
            placeholder="description"
            onChange={e =>
              this.setState({ desc: e.target.value }, () => {
                // console.log(this.state.desc);
              })
            }
          />
      
          <button
            onClick={this.submit.bind(this)}
            className="btn btn-success mx-auto"
          >
            submit
          </button>
         
        </div>
     
      </div>
    );
  }
}
