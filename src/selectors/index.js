import { createSelector } from 'reselect';

export const getClients = state => state.clientsStore.clients;
export const getSearchTerm = state => state.clientsStore.searchTerm;
export const getClientSelectId = state => state.clientsStore.clientSelectId;

export const getSelectedClient = createSelector(
  [getClients, getClientSelectId],
  (clients, id) => {
    const client = clients.filter(item => item.id === id);
    if (client && client.length === 1) {
      return client[0];
    }
    return null;
  },
);

export const getClientsListRender = createSelector(
  [getClients, getSearchTerm],
  (clients, searchTerm) => {
  	if (searchTerm !== null) {

  		return clients.filter((obj1) => {
		  for (const val1 in obj1) {
		    const obj2 = obj1[val1];
		    for (const val2 in obj2) {
		      if (obj2[val2].toLowerCase().includes(searchTerm.toLowerCase().trim())) {
		        return true;
		      }
		    }
		  }
		  return false;
		});
  	}
  	return clients;
  }
);