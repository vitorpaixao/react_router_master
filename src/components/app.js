import React from 'react';
import { Link } from 'react-router';

export default class AppComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      title: "Mercado libre"
    };
  }

  handleChangeQuery(e){
    this.setState({
        query: e.target.value
      })
  }

  render() {
    return (
      <div>

        <h2>{this.state.title}</h2>
        <input className="form-control" type="text" value={this.state.query} onChange={this.handleChangeQuery.bind(this)}/>
        <Link to={ '/items/' + this.state.query }>Buscar</Link>

        { this.props.children }
      </div>
    );
  }
}
