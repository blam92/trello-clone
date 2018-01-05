const express = require('express');
const app = express();
const model = require('./database/index');
const bodyParser = require('body-parser');

let jsonParser = bodyParser.json();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.get('/api/boards', (req, res) => {
  model.getBoardsFromDB().then((boards) => {
    res.status(200).json(boards);
  });
});

app.post('/api/boards', jsonParser, (req, res) => {
  model.addBoardToDB(req.body).then(() => {
    res.status(201).send('201 Saved.');
  });
});

app.put('/api/boards', jsonParser, (req, res) => {
  model.updateBoardInDB(req.body, () => {
    console.log('updated!');
    res.status(204).send('204 updated');
  });
});

app.delete('/api/boards', jsonParser, (req, res) => {
  model.deleteBoardInDB(req.body, () => {
    console.log('deleted!');
    res.status(204).send('204 deleted.');
  });
});

app.listen(process.env.PORT || 4000, () => {
  console.log('Example app listening on port', process.env.PORT || 4000);
});

