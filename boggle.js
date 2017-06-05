'use strict'

class Boggle {
  constructor(size) {
    this.board = this.create(size);
  }

  create(size) {
    let matrix = [];

    for (var i = 0; i < size; i++) {
      let row = [];
      for (var j = 0; j < size; j++) {
        let rand = Math.ceil(Math.random()*26);
        row.push(String.fromCharCode(64 + rand));
      }
      matrix.push(row);
    }

    return matrix;
  }

  printBoard() {
    let arr = this.board;
    let boggleString = '';

    for (var i = 0; i <= arr.length - 1; i++) {
      for (var j = 0; j <= arr.length - 1; j++) {
        if (j === arr.length - 1) {
          boggleString += `|  ${arr[i][j]}  |`;
        } else {
          boggleString += `|  ${arr[i][j]}  `;
        }
      }
      boggleString += '\n';
    }

    return boggleString;
  }

} // end of Boggle

let game = new Boggle(4);
console.log(game.board);
console.log(game.printBoard());
