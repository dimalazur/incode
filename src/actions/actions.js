export const GET_CLIENTS_REQUEST = 'GET_CLIENTS_REQUEST';
export const GET_CLIENTS_SUCCESS = 'GET_CLIENTS_SUCCESS';
export const GET_CLIENTS_FAILURE = 'GET_CLIENTS_FAILURE';
export const CLIENTS_SET_EDITABLE_CLIENT = 'CLIENTS_SET_EDITABLE_CLIENT';
export const CLIENTS_SEARCH = 'CLIENTS_SEARCH';


export const getClientsRequest = payload => ({
  type: GET_CLIENTS_REQUEST,
  payload,
});

export const getClientsSuccess = payload => ({
  type: GET_CLIENTS_SUCCESS,
  payload,
});

export const getClientsFailure = payload => ({
  type: GET_CLIENTS_FAILURE,
  payload,
});

export const clientsSetEditableClient = payload => ({
  type: CLIENTS_SET_EDITABLE_CLIENT,
  payload,
});

export const clientsSearch = payload => ({
  type: CLIENTS_SEARCH,
  payload,
});