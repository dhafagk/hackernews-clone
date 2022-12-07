const str = "NEGIE1";
const strToArr = str.split("");
const getLastElm = strToArr.pop();
const reverseStr = strToArr.reverse();
const combine = reverseStr.concat(getLastElm);
const outputNo1 = combine.join("");

console.log(outputNo1); //EIGEN1

const sentence = "Saya sangat senang mengerjakan soal algoritma";
const sentenceToArr = sentence.split(" ");
const longestStr = sentenceToArr.reduce((a, b) =>
  a.length > b.length ? a : b
);
const outputNo2 = `${longestStr}: ${longestStr.length} karakter`;

console.log(outputNo2); // mengerjakan: 11 karakter

INPUT = ["xc", "dz", "bbb", "dz"];
QUERY = ["bbb", "ac", "dz"];

const outputNo3 = QUERY.map((val) => INPUT.filter((e) => val === e).length);

console.log(outputNo3); // [1, 0, 2]

const Matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

const d1 = Matrix.map((val, index) => val[index]);
const d2 = Matrix.map((val, index) => {
  val.reverse();
  return val[index];
});

const d1Sum = d1.reduce((acc, val) => acc + val, 0);
const d2Sum = d2.reduce((acc, val) => acc + val, 0);
const outputNo4 = d1Sum - d2Sum;
console.log(outputNo4); // 4
