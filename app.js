function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result : ".concat(num));
}
function addAndHnadle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
console.log(combineValues(2, 8));
addAndHnadle(10, 20, function (res) {
    console.log("res :  ".concat(res));
});
