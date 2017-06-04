"use strict"

class Board {
  constructor() {
    // this.panjang = panjang;
    // this.lebar = lebar;
    this.board = []
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  }

  shake(panjang, lebar) {
    for (let i = 0; i < panjang; i++) {
      this.board.push([]);
      // console.log('test panjang',this.board);
      for (let j = 0; j < lebar; j++) {
        let random = Math.floor(Math.random() * 26);
        // console.log('test lebar', random)
        this.board[i].push(this.alphabet[random]);
      }
    }
    return this.board
  }

}

var board = new Board()
console.log(board.shake(4,4))
