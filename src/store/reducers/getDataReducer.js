import { GET_DATA } from '../actions/actionsTypes';

const getDataReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default getDataReducer;