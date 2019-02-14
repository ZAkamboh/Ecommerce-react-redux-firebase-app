import React, { Component } from "react";
//import firebase from "firebase";
import firebase from "../firebase";
import { storage } from "../firebase";
import { connect } from 'react-redux'
//import appReducer from "../store/reducer";
import Appaction from "../store/action";
class UploadImages extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      file: null,
      url: "",
      price: "",
      desc: "",
      progress: '',
      type:""
    };

  }
  componentWillMount() {
    const admin= JSON.parse(localStorage.getItem("admin")) 
    if(!admin){
        alert("you are not admin");
        this.props.history.push("/")
    }
    this.props.clear();
  }

  upload() {

    const { file } = this.state
    const uploadTask = storage.ref(`images/${file.name}`).put(file)
    uploadTask.on('state_changed', (snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      this.setState({ progress });

    },
      (error) => {
        console.log(error)
      },

      () => {
        storage.ref('images').child(file.name).getDownloadURL().then(url => {
          console.log(url)
          this.setState({ url: url }, () => {
            // console.log(this.state.url);
          })

        })

      })

  }

  submit() {
    var data = {
      title: this.state.title,
      url: this.state.url,
      price: this.state.price,
      desc: this.state.desc,
      type:this.state.type
    };
    this.props.uploadd(data)
    // console.log(data);
    // firebase
    //   .database()
    //   .ref("uploadimages")
    //   .push(data)
    //   .then((res) => {
    //     //alert("upload successfully");
    //     localStorage.setItem("uploaddata",JSON.stringify(res))
    //     //console.log(res)
    //   });
  }
  select(e){
    this.setState({type:e.target.value},()=>{
      alert(this.state.type)
    })
  }

  render() {
    return (
      <div className="container my-5">
        <div className="row">

          <select className="form-control mx-2" onChange={this.select.bind(this)} >
            <option  >select item which you want to upload</option>
            <option value="mobiles">mobiles</option>
            <option value="shirts">shirts</option>
            <option value="cameras">cameras</option>
            <option value="furniture">furniture</option>
          </select>


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

          <progress className="mx-auto" value={this.state.progress} max="100" />


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

          {this.props.uploads && alert("successfully upload data")}
        </div>

      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    uploads: state.appReducer.uploads,

  }
}
function mapDispatch(dispatch) {
  return {
    uploadd: (payload) => {
      dispatch(Appaction.uploadd(payload))
    },
    clear: () => {
      dispatch(Appaction.clear());
    }
  }
}
export default connect(mapStateToProps, mapDispatch)(UploadImages)