const _ = require('lodash');

const initialState = {
  count: 0,
  products: []
}

export function store (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      state.products = action.data.map(mapProductArray)
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
