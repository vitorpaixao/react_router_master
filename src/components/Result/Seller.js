import React, { Component } from 'react';
import Request from 'superagent';

export default class Seller extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  getseller(salesperson){
    let urlsell = 'https://api.mercadolibre.com/users/' + salesperson;
    Request.get(urlsell).then((response) => {
      this.setState({
        salesperson: response.body.nickname
      })
    })
  }

  componentDidMount(props) {
    this.getseller(this.props.seller);
  }

  render() {
    return (
      <p>{this.state.salesperson}</p>
    );
  }
}