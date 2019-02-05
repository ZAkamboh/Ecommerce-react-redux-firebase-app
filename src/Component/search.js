import React, { Component } from "react";
import firebase from "../firebase";
export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: "",
      dataa: "",

    }


  }
  handlesearch(e) {
    this.setState({ search: e.target.value }, () => {
      //console.log(this.state.search)
    })
  }

  search() {
 
    
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
              <div className="text-capatalize">


                <label htmlFor="search">
                  <div className="input-group">
                    <input onChange={this.handlesearch.bind(this)} type="text" name="search" placeholder="search any thing" />
                    <div className="input-group-append ">
                      <button onClick={this.search.bind(this)} type="submit" className="input-group-text bg-primary text-white">
                        <i className="fas fa-search" />

                      </button>


                    </div>
                  </div>

                </label>



              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
