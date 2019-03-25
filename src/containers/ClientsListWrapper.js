import React from 'react';
import PropTypes from 'prop-types';
import ClientsList from '../components/ClientsList';

const ClientsListWrapper = ({ clientList, clientSelectId, onClientsSetEditableClient }) => {
  
  return (
    <div className="clients-list-holder" >
    	<ClientsList 
        clientList={clientList} 
        clientSelectId={clientSelectId} 
        onClientsSetEditableClient={onClientsSetEditableClient} 
      />
    </div>
  );
}

ClientsListWrapper.propTypes = {
  onClientsSetEditableClient: PropTypes.func,
  clientSelectId: PropTypes.oneOfType([
    PropTypes.shape,
    PropTypes.string,
  ]),
  clientList: PropTypes.arrayOf(PropTypes.shape({
      address: PropTypes.shape({
        street: PropTypes.string,
        city: PropTypes.string,
        zipCode: PropTypes.string,
        country: PropTypes.string
      }),
      contact: PropTypes.shape({
        email: PropTypes.string,
        phone: PropTypes.string
      }),
      general: PropTypes.shape({
        avatar: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string
      }),
      job: PropTypes.shape({
        company: PropTypes.string,
        title: PropTypes.string
      }),
      id: PropTypes.string

  })).isRequired
};


export default ClientsListWrapper;