
function generateRandomLetter() {
  let letterArr = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  let randomIndex = Math.floor(Math.random() * (letterArr.length - 0)) + 0;
  return letterArr[randomIndex]
}

function displayBoard(boardLength) {
  let boardArr = []
  for (let i = 0; i < boardLength; i++) {
    let tmpArr = []
    for (let j = 0; j < boardLength; j++) {
      let randomLetter = generateRandomLetter();
      tmpArr.push(randomLetter);
    }
    boardArr.push(tmpArr)
  }
  return boardArr;
}

let displayArr = displayBoard(4)
console.log(displayArr);
