function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log(`Result : ${num}`);
}

function addAndHnadle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;
combineValues = add;
console.log(combineValues(2, 8));

addAndHnadle(10, 20, (res) => {
  console.log(`res :  ${res}`);
});
