import React from 'react';
import PropTypes from 'prop-types';
import ClientsSearch from '../components/ClientsSearch';

const ClientsSearchWrapper = ({onClientsSearch}) => {
  return (
    <div className="search-holder">
    	<ClientsSearch onClientsSearch={onClientsSearch}/>
    </div>
  );
}


export default ClientsSearchWrapper;