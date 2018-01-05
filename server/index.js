const express = require('express');
const app = express();
const model = require('./database/index');
const bodyParser = require('body-parser');

let jsonParser = bodyParser.json();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/api/boards', (req, res) => {
  model.Board.find((err, boards) => {
    if(err) {
      console.log(err);
    } else {
      console.log('sending reponse');
      res.status(200).json(boards);
    }
  });
});

app.listen(process.env.PORT || 4000, () => {
  console.log('Example app listening on port', process.env.PORT || 4000);
});

