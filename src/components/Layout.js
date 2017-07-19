import React from "react";
import { IndexLink, Link } from "react-router";

export default class Layout extends React.Component {

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
    const { location } = this.props;

    return (
      <div>

        <div location={location}></div>

        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              
              <h1>{this.props.title}</h1>
              <input className="form-control" type="text" value={this.state.query} onChange={this.handleChangeQuery.bind(this)}/>
              <Link to={ '/items/' + this.state.query }>Buscar</Link>
              
              <IndexLink to="/">Home</IndexLink>

              <Link to="results">Results</Link>

              <Link to="settings">Settings</Link>
              
              {this.props.children}

            </div>
          </div>

        </div>
      </div>

    );
  }
}
