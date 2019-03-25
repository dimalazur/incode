import { combineReducers } from 'redux';
import {
  CLIENTS_SET_EDITABLE_CLIENT,
  CLIENTS_SEARCH,
  GET_CLIENTS_SUCCESS
} from '../actions/actions';


const initialState = {
  clients: [],
  clientDetailSelect: null,
  clientIsActive: null,
  searchTerm: null,
  clientSelectId: null
}


function clientsStore (state = initialState, action)  {
  switch (action.type) {
    case CLIENTS_SET_EDITABLE_CLIENT: {
      return {
        ...state,
        clientDetailSelect: action.payload,
        clientSelectId: action.payload.id
      };
    }
    case GET_CLIENTS_SUCCESS: {
      return {
        ...state,
        clients: [...action.payload]
      }
    }
    case CLIENTS_SEARCH: {
      return {
        ...state,
        searchTerm: action.payload,
      }

    }    

    default: {
      return state;
    }
  }
};



const clientsReducers = combineReducers({
  clientsStore,
})

export default clientsReducers