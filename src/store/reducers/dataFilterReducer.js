import { DATA_FILTER } from '../actions/actionsTypes';

const dataFilterReducer = (state = '', action) => {
  switch (action.type) {
    case DATA_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default dataFilterReducer;