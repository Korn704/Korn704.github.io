let xs = [-1, 0, 4];
let roundLength = xs.length;
let temp;

for (let i = 0; i < xs.length; i++) {
  for (let j = 0; j < roundLength; j++, roundLength--) {
    console.log(`before => (${j}:${xs[j]}) and (${j+1}:${xs[j+1]})`)
    if (xs[j+1] > xs[j]) {
      temp = xs[j];
      xs[j] = xs[j+1];
      xs[j + 1] = temp;
    } else {
      xs[j] = xs[j];
    }
    console.log(`after => (${j}:${xs[j]}) and (${j + 1}:${xs[j + 1]})`)
  }
}

console.log(xs);
