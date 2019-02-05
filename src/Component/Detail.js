import React, { Component } from 'react'

export default class Detail extends Component {
  constructor(props){
    super(props)
    this.state={
      title: "",
      file: null,
      url:"",
      price: "",
      desc: "",
      
    }
  }
  componentDidMount(){
    const data=this.props.location.state.data
    //console.log(data)
    this.setState({title:data.title,price:data.price,url:data.url,desc:data.desc})
  }
  render() {
    return (
      <div className="container my-5" >
      <div className="row">
      <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                  <div className="card">
                    <img
                      src={this.state.url}
                      className="image-card-top"
                      style={{ height: "14rem" }}
                      alt="recipe"
                    />
                    <div className="card-body text-capitalize">
                      <h6>{this.state.title}</h6>{" "}
                      <h6 className="text-warning text-slanted">
                        provided by kamboh  {" "}
                      </h6>
                   
                    </div>
                    <div className="card-body text-capitalize">
                      <h6>{this.state.price}</h6>{" "}
                     
                   
                    </div>
                    <div className="card-body text-capitalize">
                      <h6>{this.state.desc}</h6>{" "}
                     
                   
                    </div>
                  </div>
                </div>

      </div>
      </div>
    )
  }
}
