const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');
const fetch = require('node-fetch');
const config = require('./config.js')

const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.param('summonerName', (req, res, next) => {
  var summonerName = req.params.summonerName
  var fetchData = fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${config.key}`)
  fetchData
    .then(res => res.json())
    .then(json => res.send(json))
})

app.get('/summoner/:summonerName', (req, res, next) => {
  next()
})

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '/dist')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));