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

ClientsDetailWrapper.propTypes = {

  clientDetailSelect: PropTypes.oneOfType([
    PropTypes.shape({
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

  	}),
    PropTypes.shape,
  ]),
};

export default ClientsDetailWrapper;