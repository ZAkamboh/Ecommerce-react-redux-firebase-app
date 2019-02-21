import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import firebase from "../firebase";
export default class Orders extends Component {
    constructor() {
        super();
        this.state = {
            data: "",
            fetch: false
        }
    }
    componentWillMount() {  
        firebase.database().ref(`orders`).on("value", snap => {
            var data = snap.val();
            // console.log(data)
            var value = [];
            for (let keys in data) {
                value.push(data[keys])
            }
            var newArr=[];
            for(var i = 0;i<value.length;i++){
                for(var j =0;j<value[i].length;j++){
                    newArr.push(value[i][j])
                }
            }
            console.log(newArr)
            this.setState({ data: newArr, fetch: true }, () => {
                //console.log(this.state.data)
            })
        })
    }
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <h1>Order</h1>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>title</th>
                                        <th>Type</th>
                                        <th>Pice</th>
                                        <th>Description</th>
                                        <th> Name</th>
                                        <th>email</th>
                                        <th>address</th>
                                        <th>Mobile no</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {this.state.fetch === true ? (
                                        this.state.data.map((data, index) => {
                                            return (
                                                <tr key={index}>

                                                    <td>{data.title}</td>
                                                    <td>{data.type}</td>
                                                    <td>{data.price}</td>
                                                    <td>{data.desc}</td>
                                                    <td>{data.name}</td>
                                                    <td>{data.email}</td>
                                                    <td>{data.address}</td>
                                                    <td>{data.mobileNo}</td>

                                                </tr>
                                            );
                                        })
                                    ) : (
                                            <center style={{ width: "100%" }}>
                                                <div className="loader" style={{ marginTop: "20%" }} />
                                            </center>
                                        )}

                                </tbody>
                            </Table>;</Col>


                      
                    </Row>

                </Container>;
      </div>
        )
    }
}
