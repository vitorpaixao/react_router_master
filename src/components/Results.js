import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';
import { Link } from 'react-router';

import Seller from "./Result/Seller";

export default class Results extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillReceiveProps(nextProps){
    console.log('nextProps',nextProps);
    if (nextProps.params.s !== this.props.params.s) {
      this.search(nextProps.params.s);
      return true;
    } else {
      return false;
    }
  }

  componentWillMount() {
    let { params } = this.props;
    this.search(params.s);
  }

  search(query = "star") {
    let url = 'https://api.mercadolibre.com/sites/MLA/search?q=' + query;
    Request.get(url).query({limit: 4}).then((response) => {
      this.setState({
        products: response.body.results
      })
    })
  }

  render() {
    const { params } = this.props;

    var products = _.map(this.state.products, (product) => {
      return (
        <li key={product.id}>
          <Link to={'/detail/' + product.id}>{product.title}</Link>
          <Seller seller={product.seller.id}/>
        </li>
      )
    })

    return (
      <div>
        <h1>Resultados de busca para: <strong>{params.s}</strong></h1>
        <div>
          <ul>{products}</ul>          
        </div>
      </div>
    );

  }
}