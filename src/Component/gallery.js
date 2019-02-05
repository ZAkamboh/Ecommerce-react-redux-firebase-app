import React, { Component } from "react";
import firebase from "../firebase";
import Search from "./search"
export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataa: "",
      fetch: false
    }
  }
  componentWillMount() {
    var value = [];
    firebase.database().ref('uploadimages').on("value", snap => {
      var data = snap.val();
      //console.log(data)

      for (let keys in data) {
        value.push({ ...data[keys],key:keys })
      }
      this.setState({ dataa: value, fetch: true })
    })
  }
  
  render() {
    return (
     
     <div>
       
       <Search dd={this.state.dataa}/>
      <div className="container my-5" >
        <div className="row">

       

          {this.state.fetch === true ? (
            this.state.dataa.map(data => {
              return (
                <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                  <div className="card">
                    <img
                      src={data.url}
                      className="image-card-top"
                      style={{ height: "14rem" }}
                      alt="recipe"
                    />
                    <div className="card-body text-capitalize">
                      <h6>{data.title}</h6>{" "}
                      <h6 className="text-warning text-slanted">
                        provided by kamboh  {" "}
                      </h6>
                      <div className="card-footer">
                        <button onClick={()=>this.props.history.push('/detail',{data:data})}
                          type="button"
                          className="btn btn-primary text-capitalize"
                        >
                          {" "}
                          Details{" "}
                        </button>

                      </div>
                    </div>
                  </div>
                </div>

                // <img src={data.url} height="100px" width="100px"/>





              );
            })
          ) : (
              <center style={{ width: "100%" }}>
                <div className="loader" style={{ marginTop: "20%" }} />
              </center>
            )}

        </div>
      </div>
      </div>
    );
  }
}
