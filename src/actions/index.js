export const getSummoner = () => ({
  type: 'GET_SUMMONER_REQUEST'
})

export const receiveSummoner = summoner => ({
  type: 'GET_SUMMONER_SUCCESS',
  payload: { summoner }
})

export const fetchSummoner = name => dispatch => {
  dispatch(getSummoner())
  return fetch(`/summoner/${name}`)
    .then(data => data.json(), error => console.log(error))
    .then(json => dispatch(receiveSummoner(json)))
}

export const getMatches = () => ({
  type: 'GET_MATCHES_REQUEST'
})

export const receiveMatches = matchesData => ({
  type: 'GET_MATCHES_SUCCESS',
  payload: { matchesData }
})

export const fetchMatches = id => dispatch => {
  dispatch(getMatches())
  return fetch(`/matches/${id}`)
    .then(data => data.json(), error => console.log(error))
    .then(json => dispatch(receiveMatches(json)))
}