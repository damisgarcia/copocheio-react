const _ = require('lodash');

let initialState = {
  topics: []
}

export const ACTIONS = {
  REPLACE: 1,
  PUSH:   2,
  REMOVE: 3,
  CONCAT: 4,
  SEARCH: 5
};

export default function reduce (state = initialState, action) {
  switch (action.type) {
    case ACTIONS.REPLACE:
      return state.merge({
        topics: state.topics.concat(["Lorem", "Lorem2", "Lorem3"])
      });
    case ACTIONS.PUSH:
      console.log("Push")
      return state;
    case ACTIONS.REMOVE:
      console.log("Remove")
      return state;
    case ACTIONS.CONCAT:
      console.log("Concat")
      return state;
    case ACTIONS.SEARCH:
      console.log("Search")
      return state;
    default:
      return state;
  }
};
