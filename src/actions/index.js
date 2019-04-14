export const getSummoner = name => ({
  type: 'GET_SUMMONER_REQUEST',
  name
})

export const receiveSummoner = summoner => ({
  type: 'GET_SUMMONER_SUCCESS',
  payload: { summoner }
})

export const fetchSummoner = name => dispatch => {
  console.log('fetching')
  dispatch(getSummoner(name))
  return fetch('http://localhost:8080/summoner/RiotSchmick')
    .then(data => data.json(), error => console.log(error))
    .then(json => dispatch(receiveSummoner(json)))
}