import {createStore} from 'redux';

const initialState = {
  title: 'hello',
};

const reducer = (state = initialState, action) => {
  return {
    ...state,
  };
};

const store = createStore(reducer);

export default store;
