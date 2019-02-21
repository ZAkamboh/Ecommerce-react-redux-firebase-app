import React, { Component } from "react";
import firebase from "../firebase";
import Search from "./search"
import { connect } from 'react-redux'
import Appaction from "../store/action";
class Camera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataa: "",
            fetch: false,
            searchedData: [],
        }
    }
    componentWillMount() {
        var value = [];
        firebase.database().ref('uploadimages').on("value", snap => {
            var data = snap.val();
            for (let keys in data) {
                if (data[keys]["type"] === "cameras") {
                    value.push({ ...data[keys], key: keys })
                }
            }

            this.setState({ dataa: value, fetch: true })
        })
    }
    handlesearch = (event) => {
        var dataa = this.state.dataa;
        var newData = dataa.filter((f, i) => f.title.toLowerCase().includes(event.target.value.toLowerCase()))
        this.setState({ searchedData: newData })
    }
    AddToCart(data) {

        // var cartArray = JSON.parse(localStorage.getItem("cart"))
        // if (cartArray === null) {
        //    var newCartArray = []
        //     newCartArray.push(data)
        //     localStorage.setItem("cart", JSON.stringify(newCartArray))
        //     alert("successfully add to cart")
        // }
        // else{
        //     cartArray.push(data);
        //     localStorage.setItem("cart",JSON.stringify(cartArray))
        // }
       
        this.props.cart(data)
    }

    render() {
        return (
            <div className="bg-secondary">
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                            <div className="text-capatalize">
                                <label htmlFor="search">
                                    <div className="input-group">
                                        <input className="form-control" onChange={this.handlesearch.bind(this)} type="text" name="search" placeholder="search any thing" />
                                        <div className="input-group-append ">
                                            {/* <button onClick={this.search.bind(this)} type="submit" className="input-group-text bg-primary text-white">
                        <i className="fas fa-search" />
                      </button> */}
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container my-5" >
                    <div className="row">
                        {this.state.fetch === true ? (
                            !this.state.searchedData.length ? this.state.dataa.map((data, index) => {
                                return (
                                    <div className="col-10 mx-auto col-md-6 col-lg-4 my-3" key={index}>
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
                                                    <button onClick={() => this.props.history.push('/detail', { data: data })}
                                                        type="button"
                                                        className="btn btn-primary text-capitalize"
                                                    >
                                                        {" "}
                                                        Details{" "}
                                                    </button>
                                                    <button onClick={this.AddToCart.bind(this, data)} className="btn btn-danger mx-2">
                                                        <i className="fas fa-cart-plus" />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    // <img src={data.url} height="100px" width="100px"/>





                                );
                            })
                                :
                                this.state.searchedData.map((data, index) => {
                                    return (
                                        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3" key={index}>
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
                                                        <button onClick={() => this.props.history.push('/detail', { data: data })}
                                                            type="button"
                                                            className="btn btn-primary text-capitalize"
                                                        >
                                                            {" "}
                                                            Details{" "}
                                                        </button>
                                                        <button onClick={() => this.cart.bind(this, data.key)} className="btn btn-danger mx-2">
                                                            <i className="fas fa-cart-plus" />
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

function mapStateToProps(state) {
    return {
        cartitemr: state.appReducer.cartItem
    }
}

function mapDispatchToprops(dispatch) {
    return {
        cart: (payload) => {
            dispatch(Appaction.cart(payload))
        },

    }
}

export default connect(mapStateToProps, mapDispatchToprops)(Camera) 
