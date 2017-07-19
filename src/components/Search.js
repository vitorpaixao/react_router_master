import React from "react";
import { Link } from 'react-router';

export default class Search extends React.Component {

	constructor(props) {
    super(props);
    this.state = {}
  }

  handleChangeQuery(e) {
    this.setState({
      query: e.target.value,
      title: 'Mercado Libre'
    })
  }

	render() {

		return (
			<div>
				<h1>{this.props.title}</h1>
				<input className="form-control" type="text" value={this.state.query} onChange={this.handleChangeQuery.bind(this)}/>
				<Link to={ '/items/' + this.state.query }>Buscar</Link>
			</div>
		  
		);

	}
}
