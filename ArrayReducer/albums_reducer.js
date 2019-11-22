// albums_reducer.js
const initialState = [];

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ALBUM": {
      // => Ask yourself: what is action.payload?
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
}

function getGenreStats(storeState) {
  const genreCount = storeState.reduce((acc, alb) => {
    return {
      ...acc,
      [alb.genre]: acc[alb.genre] ? acc[alb.genre] + 1 : 1
    };
  }, {});
  return genreCount;
}

module.exports = { reducer, getGenreStats };
