import React from 'react'
import { connect } from 'react-redux'

const Results = (props) => (
  <h1>
    {props.result.accountId}
  </h1>
)

const mapStateToProps = state => ({
  result: state.summonerRequest.response || 'No results',
})

export default connect(mapStateToProps)(Results)
