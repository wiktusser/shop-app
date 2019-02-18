function counterReducer(state = 0, action) {
    switch (action.type) {
      case 'increment':
        return state + action.payload
      case 'decrement':
        return state - action.payload
      default:
        return state
    }
  }

//   const counterReducer = createReducer(0, {
//     increment: (state, action) => state + action.payload,
//     decrement: (state, action) => state - action.payload
//   })