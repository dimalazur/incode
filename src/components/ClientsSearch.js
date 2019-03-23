import React, { Component } from 'react'
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class ClientsSearch extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const { onClientsSearch } = this.props
    onClientsSearch(event.target.value);
  };

  render() {

    return (
      <Input  
        id="searchClient"
        className="search"
        type="text"
        name="search"
        onChange={this.handleChange} 
        placeholder='Search...' 
      />
    );
  }
}

ClientsSearch.propTypes = {
  onClientsSearch: PropTypes.func.isRequired,
};

export default ClientsSearch;