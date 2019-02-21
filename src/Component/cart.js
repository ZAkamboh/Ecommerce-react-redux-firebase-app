import React, { Component } from 'react'
import { Table, Container } from "react-bootstrap";
import { connect } from "react-redux";
import Appaction from "../store/action";
import firebase from "../firebase";
class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      cartItems: JSON.parse(localStorage.getItem("cart"))
    }
  }
  componentWillMount() {
    var items = JSON.parse(localStorage.getItem("cart"));
    if (items !== null && items.length > 0) {
      this.setState({ items: items })
    }
  }
  removeItem = (index) => {
    var items = this.state.items;
    var newItems = items.filter((item, i) => i !== index);
    this.setState({ items: newItems }, () => {
      this.props.removeItem(index);
    })
  }
  confirm() {
    var user = JSON.parse(localStorage.getItem("userrecords"))
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    if (user) {
      for (var i = 0; i < cartItems.length; i++) {
        cartItems[i]['email'] = user.email;
        cartItems[i]['name'] = user.fname;
        cartItems[i]['mobileNo'] = user.mobileno;
        cartItems[i]['address'] = user.address;
      }
      firebase
        .database()
        .ref(`orders/${user.uid}`)
        .set(cartItems).then((res) => {
          console.log(res)
          alert(" order successfully confirmed")
        })
    }
    else {
      alert("plz login first")
      this.props.history.push('/userlogin')
    }
  }

  render() {
    return (
      <div style={{ marginTop: 60 }}>


        <Container>

          <Table striped hover bordered>
            <thead>
              <tr>
                <td>Items No</td>
                <td>Item Name</td>
                <td>Item Type</td>
                <td>Item Price</td>
                <td>Item Description</td>
                <td>Item Image</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {this.state.items && this.state.items.map((item, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{item.title}</td>
                  <td>{item.type}</td>
                  <td>{item.price}</td>
                  <td>{item.desc}</td>
                  <td><img src={item.url} style={{ height: 75, width: 150 }} /></td>
                  <td><button onClick={this.removeItem.bind(this, index)} className="btn btn-primary">Remove Item</button></td>

                </tr>

              ))}

            </tbody>
          </Table>
          {(this.props.cartItems === null || this.props.cartItems.length === 0) && <div>You Dont have Items in Cart</div> || <button onClick={this.confirm.bind(this)} className="btn btn-success mx-2" style={{ marginBottom: "5px" }}>confirm order</button>}
        </Container>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    cartItems: state.appReducer.cartItem
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (payload) => dispatch(Appaction.removeItem(payload))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);