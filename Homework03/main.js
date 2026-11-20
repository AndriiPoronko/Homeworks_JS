//Task_01.
let a = 17;
let b = 5;

let sum = a + b;
let diff = a - b;
let multi = a * b;
let dev = a / b;
let rest = a % b;
let pow = a ** b;

console.log(sum, diff, multi, dev, rest, pow);
console.log(typeof sum, typeof diff, typeof multi, typeof dev, typeof rest, typeof pow);

//Task_02.
const totalSeconds = 7385;
const seconds = totalSeconds % 60;
const minutes = ((totalSeconds - seconds) % 3600) / 60;
const hours = (totalSeconds - seconds - minutes * 60) / 3600;

console.log(hours, minutes, seconds);

// Task_03.
let points = 100;
points += 50;
points -= 20;
points *= 2;
points /= 2;
points++;
points--;

console.log(points);

//Task_04;
const idNumber = 9007199254740992;
const idBigInt = 9007199254740992n;

const newIdNumber = idNumber + 1;
const newIdBigInt = idBigInt + 1n; 

console.log(idNumber === newIdNumber);
console.log(idBigInt === newIdBigInt);



