"use strict"

class Board {
  constructor(input) {
    this.input = input;
  }

  generateBoard() {
    let board =[];
    var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(let i = 0 ; i < this.input ; i ++) {
      board.push([]);
      for(let j = 0 ; j < this.input ; j++) {
        board[i].push(alpha.charAt(Math.floor(Math.random()*26)))
      }
    }
    return board;
  }
}

let board = new Board(6);

console.log(board.generateBoard());
