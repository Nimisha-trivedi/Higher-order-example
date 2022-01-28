const data = [10, 20, 5, 30];

function cal_square(x) {
  return x * 2;
}

function cal_addByOne(y) {
  return y + 1;
}

const calculate_Square = function (d, calculate) {
  const output = [];
  for (var i = 0; i < d.length; i++) {
    output.push(calculate(d[i]));
  }
  return output;
};
// console.log(calculate_Square(data, cal_square));
console.log(data.map(cal_square));
console.log(calculate_Square(data, cal_addByOne));
