import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Grid, Container } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { getClients, getSelectedClient } from './selectors';

import { getClientsRequest, clientsSetEditableClient, clientsSearch } from './actions/actions';
import ClientsListWrapper from './containers/ClientsListWrapper';
import ClientsSearchWrapper from './containers/ClientsSearchWrapper';
import ClientsDetailWrapper from './containers/ClientsDetailWrapper';

class App extends Component {

  componentDidMount() {
    const { onGetClientsRequest } = this.props;
    onGetClientsRequest();
  }

  render() {
    const { 
      onClientsSetEditableClient, 
      clientList, 
      searchTerm, 
      clientSelectId, 
      clientDetailSelect,
      onClientsSearch 
    } = this.props;

    return (
      <div className="App">

      <Container className="clients-container">
      <div className="clients-main">
          <Grid>
            <Grid.Row  columns={2} stretched>
              <Grid.Column  computer={6} tablet={6} mobile={16}>
                <div className="clients-sidebar">
                  <ClientsSearchWrapper onClientsSearch={onClientsSearch} />
                  <ClientsListWrapper 
                    onClientsSetEditableClient={onClientsSetEditableClient}
                    clientList={clientList}
                    searchTerm={searchTerm}
                    clientSelectId={clientSelectId}
                  />
                </div>
              </Grid.Column>

              <Grid.Column computer={10} tablet={10} mobile={16} >
                <div className="clients-content">
                  <ClientsDetailWrapper clientDetailSelect={clientDetailSelect} />
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </div>
        </Container>
          
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
   clientList: getClients(state),
   clientIsActive: state.clientsStore.clientIsActive,
   onClientsSetEditableClient: state.clientsStore.onClientsSetEditableClient,
   clientSelectId: state.clientsStore.clientSelectId,
   clientDetailSelect: getSelectedClient(state),
   searchTerm: state.clientsStore.searchTerm,
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    onGetClientsRequest: (payload) => {
      dispatch(getClientsRequest(payload))
    },
    onClientsSetEditableClient: (payload) => {
      dispatch(clientsSetEditableClient(payload))
    },
    onClientsSearch: (text) => {
      dispatch(clientsSearch(text))
    }
    
  }
}


const AppConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppConnect;