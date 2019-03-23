import React from 'react';
import PropTypes from 'prop-types';
import ClientsList from '../components/ClientsList';

const ClientsListWrapper = ({ clientList, clientSelectId, onClientsSetEditableClient, searchTerm }) => {
  
  let clientsListrender = (searchTerm === null) ? clientList : searchTerm;

  return (
    <div className="clients-list-holder" >
    	<ClientsList 
        clientList={clientsListrender} 
        clientSelectId={clientSelectId} 
        onClientsSetEditableClient={onClientsSetEditableClient} 
      />
    </div>
  );
}



export default ClientsListWrapper;