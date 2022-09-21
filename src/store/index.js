import { createStore, combineReducers } from "redux";

export const initialState = {
  names: [ "pippo", "pluto"
  ],
  ids: "2",
  count: {
    value: 0,
    default: 100
  },
  user: {
    userName: '',
  },
}

function countReducer(state = {}, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { ...state, value: state.value + 1 }
    case 'DECREMENT':
      return { ...state, value: state.value - 1 }
    case 'MEGA_ULTRA_BIG_RANDOM':
      return { ...state, value: action.payload }
    default:
      return state
  }
}

function userReducer(state={}, action) {
  switch(action.type) {
    case 'SET_USERNAME':
      return { ...state, userName: action.payload }
    default:
      return state
  }
}

function nameReducer(state={}, action) {
  switch(action.type) {
    case 'SET_PIPPO':
      return { ...state, userName: action.payload }

    case "AddName":
      let names = state.names
      let id = state.ids
        return { ...state =  [...names, ...id] + action.payload}    

    default:
      return state
  }
}

const rootReducer = combineReducers({count: countReducer, user: userReducer, names: nameReducer, ids:nameReducer})
const store = createStore(rootReducer, initialState);

export default store;