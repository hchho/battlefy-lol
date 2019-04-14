import { combineReducers } from 'redux'

const summonerRequest = (state = [], action) => {
  switch (action.type) {
    case 'GET_SUMMONER_REQUEST':
      return Object.assign({}, state, {
        isFetching: true,
      })
    case 'GET_SUMMONER_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        response: action.payload.summoner,
      })
    default:
      return state
  }
}

export default combineReducers({
  summonerRequest,
})
