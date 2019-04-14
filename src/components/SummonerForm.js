import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'
import { fetchSummoner, fetchMatches } from '../actions'

const SummonerForm = (props) => {
  const { classes } = props

  const [summonerName, setName] = useState('')

  const handleClick = async (name) => {
    props.getData(name)
  }

  return (
    <FormControl component="fieldset" className={classes.FormControl}>
      <Grid container direction="row">
        <TextField
          id="standard-name"
          label="Summoner Name"
          className={classes.textField}
          value={summonerName}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
        />
        <Button variant="contained" className={classes.button} onClick={() => handleClick(summonerName)}>
          Search
        </Button>
      </Grid>
    </FormControl>
  )
}

const mapStateToProps = (state, ownProps) => ownProps

const mapDispatchToProps = dispatch => ({
  getData: name => dispatch(fetchSummoner(name))
    .then(res => dispatch(fetchMatches(res.payload.summoner.accountId)))
})

export default connect(mapStateToProps, mapDispatchToProps)(SummonerForm)
