import { GET_DATA, DATA_FILTER } from './actionsTypes';

export const getDataAction = (data) => {
  return (dispatch, getState) => {
    dispatch({
      type: GET_DATA,
      payload: data
    })
  }
};

export const dataFilterAction = (data) => {
  return (dispatch, getState) => {
    dispatch({
      type: DATA_FILTER,
      payload: data
    })
  }
};
