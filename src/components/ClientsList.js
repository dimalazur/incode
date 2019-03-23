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





export default ClientsList;
