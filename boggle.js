const ALPHABET =
  [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z',
  ];

const random = (min, max) => Math.floor(Math.random() * (max - (min + 1))) + min;

const getRandomFont = () => ALPHABET[random(0, 27)];

const shake = (cellCount) => {
  const result = new Array(cellCount);
  for (let i = 0; i < cellCount; i += 1) {
    result[i] = new Array(cellCount);
    for (let j = 0; j < cellCount; j += 1) {
      result[i][j] = getRandomFont();
    }
  }
  return result;
};

const matrix = shake(4);
console.log(matrix);
