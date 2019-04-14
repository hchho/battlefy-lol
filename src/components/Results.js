import React from 'react'
import { connect } from 'react-redux'
import Match from './Match'

const Results = (props) => (
  <ul>
    {props.results.matches.map(result => <Match match={result} />)}
  </ul>
)

const mapStateToProps = state => ({
  results: state.matchRequest.response || { matches: [] },
})

export default connect(mapStateToProps)(Results)
