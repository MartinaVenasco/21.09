import { createStore, combineReducers } from "redux";

export const initialState = {
  name: [
    { id: 1,
    user: ""}
  ],
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
        return {...state, name: state.name.push({id:2, user: "pippo"})}
             
    default:
      return state
  }
}

const rootReducer = combineReducers({count: countReducer, user: userReducer, name: nameReducer})
const store = createStore(rootReducer, initialState);

export default store;