import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClientFullName from './ClientFullName';
import { Item } from 'semantic-ui-react';

class ClientsListItem extends Component {
  render() {
  	const {client, onClientsSetEditableClient ,cnItem } = this.props;
    return (
        <Item className={cnItem} onClick={onClientsSetEditableClient}>
          <Item.Image size='tiny' src={client.general.avatar} />
          <Item.Content>
            <Item.Header className="client-name">
              <ClientFullName firstName={client.general.firstName} lastName={client.general.lastName} />
            </Item.Header>
            <Item.Description className="client-job">{client.job.title}</Item.Description>
          </Item.Content>
        </Item>
    );
  }
}




export default ClientsListItem;
