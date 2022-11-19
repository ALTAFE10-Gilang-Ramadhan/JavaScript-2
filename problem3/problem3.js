function makeDiamond(size) {
  let huruf = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let angka = 0;
  let s = '';
  for (let i = 0; i < huruf.length; i++) {
    if (huruf[i] == size) {
      angka += i + 1;
    }
  }
  // upper
  for (i = 1; i < angka + 1; i++) {
    s += '\n';
    for (j = 2; j <= angka - i + 1; j++) {
      s += '.';
    }
    for (j = 1; j <= 2 * i - 1; j++) {
      if (j == 1 || j == 2 * i - 1) {
        s += `${huruf[i - 1]}`;
      } else {
        s += '.';
      }
    }
    for (j = 2; j <= angka - i + 1; j++) {
      s += '.';
    }
  }
  // bellow
  for (i = angka - 1; i > 0; i--) {
    s += '\n';
    for (j = 2; j <= angka - i + 1; j++) {
      s += '.';
    }
    for (j = 1; j <= 2 * i - 1; j++) {
      if (j == 1 || j == 2 * i - 1) {
        s += `${huruf[i - 1]}`;
      } else {
        s += '.';
      }
    }
    for (j = 2; j <= angka - i + 1; j++) {
      s += '.';
    }
  }
  return s;
}
console.log(makeDiamond('E'));

module.exports = makeDiamond;
