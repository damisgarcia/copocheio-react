const _ = require('lodash');

const initialState = {
  count: 0,
  data: []
}

export function products (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      state.data = action.data.map(mapProductArray)
      return state
    default:
      return state;
  }
}

export function counter (state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      state.count++
      return state;
    case 'DECREMENT':
      state.count--
      return state;
    default:
      return state;
  }
};

function mapProductArray(p) {
  return p.name;
}
