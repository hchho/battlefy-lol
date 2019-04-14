import React from 'react'
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../styles'

const Match = ({ match }) => {
  return (
  <Paper >
    <ul>
      <li>Game ID: {match.gameId}</li>
      <li>Champion: {match.champion}</li>
      <li>Time: {match.timestamp}</li>
    </ul>
  </Paper >
)}

export default withStyles(styles)(Match)
