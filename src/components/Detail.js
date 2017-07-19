import React, { Component } from 'react';
import Request from 'superagent';

export default class Detail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      item_p: []
    };
  }

  componentDidMount() {
    const { params } = this.props;
    this.getProduct(params.product_id);
  }

  getProduct(query = "star") {
    let url = 'https://api.mercadolibre.com/items/' + query;
    Request.get(url).then((response) => {

      console.log(response);
      this.setState({
        item_p: response.body
      })
    })

    
  }

  render() {

    const { params } = this.props;
    const { item_p } = this.state;

    return (
      <div>
        <div>
            <h1>{item_p.title}</h1>
            <p>{item_p.title}</p>
            <img src={item_p.thumbnail} />
            <p>{item_p.title}</p>
        </div>
      </div>
    );

  }
}