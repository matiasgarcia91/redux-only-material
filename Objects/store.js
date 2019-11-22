// store.js
const redux = require("redux");
const { reducer } = require("./reducer");

const store = redux.createStore(reducer);
console.log("Initial state of the store:", store.getState());

// store.js
store.subscribe(() => {
  console.log("The state just changed to:", store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 42
});

store.dispatch({
  type: "REPLACE",
  payload: 5
});
