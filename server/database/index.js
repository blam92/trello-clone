const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/boards');

let boardSchema = mongoose.Schema({
  title: String,
  description: String,
  cards: [
    {
      title: String,
      items: [
        {
          type: String
        }
      ]
    }
  ]
});

let Board = mongoose.model('Board', boardSchema);

bObj = {
  title: 'Test Board',
  description: 'Testing mongoose',
  cards: [
    {title: 'first card', items: ['1', '2']},
    {title: 'second card', items: ['3', '4']}
  ]
}

module.exports.Board = Board;

// testBoard = new Board(bObj);
// testBoard.save((err, board) => {
//   if(err) return console.log(err);
//   console.log('saved!', board);
// });

// Board.find((err, boards) => {
//   if(err) return console.log(err);
//   console.log('BOARD:', boards);
// });