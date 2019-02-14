import React, { Component } from 'react'
import { Table, Container } from "react-bootstrap";
export default class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }
  componentWillMount() {
    var items = JSON.parse(localStorage.getItem("cart"));
    if (items !== null && items.length > 0) {
      this.setState({ items:items })
    }
  }
  removeItem = (index) => {
    var items = this.state.items;
    var newItems = items.filter((item, i) => i !== index);
    this.setState({ items: newItems },()=>{
      localStorage.setItem("cart", JSON.stringify(newItems))
    })
  }
  render() {
    return (
      <div style={{ marginTop: 20 }}>
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
        </Container>
      </div>
    )
  }
}
