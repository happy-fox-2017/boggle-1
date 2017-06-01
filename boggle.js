class Boggle {
  constructor(num) {
    this.board = this.make(num);
  }

  make(number) {
    let board = [];
    let alphabeth = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = 0; i < number; i++) {
      board.push([]);
      for (var j = 0; j < number; j++) {
        board[i].push(alphabeth.charAt(Math.floor(Math.random()*26)))
      }
    }
    // console.log(board);
    return board;
  }
}

let boggle = new Boggle(4)
console.log(boggle.board)