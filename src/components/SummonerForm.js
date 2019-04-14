import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'
import { fetchSummoner } from '../actions'

// const getData = async () => {
//   const res = await fetch('http://localhost:8080/summoner/RiotSchmick')
//   const data = await res.json()
//   return data
// }

const SummonerForm = (props) => {
  const { classes } = props

  const handleClick = () => {
    const data = props.getSummoner()
    console.log(props)
  }

  return (
    <FormControl component="fieldset" className={classes.FormControl}>
      <Grid container direction="row">
        <TextField
          id="standard-name"
          label="Summoner Name"
          className={classes.textField}
          margin="normal"
        />
        <Button variant="contained" className={classes.button} onClick={handleClick}>
          Search
      </Button>
      </Grid>
    </FormControl>
  )
}

const mapStateToProps = (state, ownProps) => {
  return ({
  ...ownProps,
  summoner: state.summonerRequest.response,
})
}

const mapDispatchToProps = dispatch => ({
  getSummoner: name => dispatch(fetchSummoner(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(SummonerForm)
