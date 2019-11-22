// reducer.spec.js
const redux = require("redux");
const { reducer } = require("./reducer");

test("Initial state should be 1", () => {
  const store = redux.createStore(reducer);
  expect(store.getState()).toBe(0);
});

test("ADD should work as expected", () => {
  const store = redux.createStore(reducer);

  store.dispatch({
    type: "ADD",
    payload: 1
  });
  expect(store.getState()).toBe(1);

  store.dispatch({
    type: "ADD",
    payload: 99
  });
  expect(store.getState()).toBe(100);
});

test("REPLACE should work as expected", () => {
  const store = redux.createStore(reducer);

  [7, 9999, 0].map(num => {
    store.dispatch({
      type: "REPLACE",
      payload: num
    });
    expect(store.getState()).toBe(num);
  });
});

test("MULTIPLY should work as expected", () => {
  const store = redux.createStore(reducer);

  [0, 1, 2, 6, 9].map(num => {
    store.dispatch({
      type: "REPLACE",
      payload: num
    });
    expect(store.getState()).toBe(num);

    store.dispatch({
      type: "MULTIPLY",
      payload: num
    });
    expect(store.getState()).toBe(num * num);

    store.dispatch({
      type: "MULTIPLY",
      payload: num * num
    });
    expect(store.getState()).toBe(num * num * num * num);
  });
});
