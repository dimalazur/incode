import { combineReducers } from 'redux';


const initialState = {
  clients: [],
  clientDetailSelect: null,
  clientIsActive: null,
  searchTerm: null,
  clientSelectId: null
}


function clientsStore (state = initialState, action)  {
  switch (action.type) {
    
    

    default: {
      return state;
    }
  }
};



const clientsReducers = combineReducers({
  clientsStore,
})

export default clientsReducers