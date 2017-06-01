
class board{
  constructor(input){
    this.input = input;
  }

  shake(){
    let alphabetArray = [];
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i=0; i<this.input; i++){
      alphabetArray.push([]);
      for (let n=0; n<this.input; n++){
        alphabetArray[i].push(alphabet.charAt(Math.floor(Math.random()*26)));
      }
    }
    console.log(alphabetArray)
  }
}

let boggle = new board(4);
boggle.shake();