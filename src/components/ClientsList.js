import React, { Component } from 'react';
import PropTypes from 'prop-types'
import UUID from 'uuid'
import ClientsListItem from './ClientsListItem'
import classNames from 'classnames';
import { Item } from 'semantic-ui-react';

class ClientsList extends Component {
  render() {

  	const { onClientsSetEditableClient, clientList, clientSelectId } = this.props;

    let cnClientItem;
    return (
        <Item.Group className="clients-list">
      	{clientList.map( (client) => {
          
          cnClientItem = classNames('clients-list-item', {
            'client-active': client.id === clientSelectId
          });

      		return ( 
      			<ClientsListItem 
              cnItem={cnClientItem}
      				key={UUID()} 
      				client={client}  
      				onClientsSetEditableClient={() => onClientsSetEditableClient(client)}  
      			/>
      		)
      	})}
        </Item.Group>
    );
  }
}


ClientsList.propTypes = {
  onClientsSetEditableClient: PropTypes.func,
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


export default ClientsList;
