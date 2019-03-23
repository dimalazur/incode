import React from 'react';
import PropTypes from 'prop-types';
import ClientDetail from '../components/ClientDetail';
import ClientsDetailEmpty from '../components/ClientsDetailEmpty';

const ClientsDetailWrapper = ({ clientDetailSelect }) => {  
  return (
    <React.Fragment>
      {(clientDetailSelect === null) ? (
        <ClientsDetailEmpty />
      ) : (
         <ClientDetail  client={clientDetailSelect} />
      )}
    </React.Fragment>
  );
}

export default ClientsDetailWrapper;