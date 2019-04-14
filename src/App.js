import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles'
import SummonerForm from './components/SummonerForm'
import Results from './components/Results'
import Grid from '@material-ui/core/Grid';

const App = (props) => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <SummonerForm {...props} />
          <Results />
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(App)
