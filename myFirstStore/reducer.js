// reducer.js
const initialState = 0;

// reducer.js
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD": {
      // => Ask yourself: what is action.payload?
      return state + action.payload;
    }
    case "REPLACE": {
      // => Ask yourself: what is action.payload?
      return action.payload;
    }
    case "MULTIPLY":
      return state * action.payload;
    default: {
      return state;
    }
  }
}

module.exports = { reducer };
