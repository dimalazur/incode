import { combineReducers } from 'redux';
import UUID from 'uuid';
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
        clients: action.payload.map((item)=>{item.id = UUID(); return item;})
      }
    }

    case CLIENTS_SEARCH: {
      return {
        ...state,
        searchTerm: state.clients.filter((obj1) => {
          for (const val1 in obj1) {
            const obj2 = obj1[val1];
            for (const val2 in obj2) {
              if (obj2[val2].toLowerCase().includes(action.payload.toLowerCase().trim())) {
                return true;
              }
            }
          }
          return false;
        }),
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