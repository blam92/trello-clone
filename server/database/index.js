const mongoose = require('mongoose');
let Promise = require('bluebird');
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

module.exports.getBoardsFromDB = () => {
  return new Promise((resolve, reject) => {
    Board.find((err, boards) => {
      if(err) {
        reject(err);
      } else {
        resolve(boards);
      }
    });
  });
}

module.exports.addBoardToDB = (board) => {
  boardInstance = new Board(board);

  return new Promise((resolve, reject) => {
    boardInstance.save((err, board) => {
      if(err) return reject(err);
      resolve('Board saved');
    });
  });
}

module.exports.updateBoardInDB = (board, cb) => {
  Board.findByIdAndUpdate(board._id, board, cb);
}

module.exports.deleteBoardInDB = (board, cb) => {
  Board.findByIdAndRemove(board._id, cb);
}