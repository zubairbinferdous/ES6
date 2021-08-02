console.log("hello world zubair bin ferdous");

const a = 100;
const b = 20;
if (a < b) {
  console.log("ok done");
} else {
  console.log("ok done to");
}

const number = [12, 22];
number[1] = 30;
number.push(34);
console.log(number);
const nayok = { name: "sakib khan", phone: 4587 };


let patientName = "rohim chaca";
patientName = "zubair bin ferdous";
console.log(patientName);


let sum = 10;
for (let i = 0; i < 0; i++) {
  let sum = sum + i;
}
console.log(sum);


function add(num1, num2 = 15) {
//   num2 = num2 || 20;
  return num1 + num2;
}
const total = add(15 , 5);
console.log("toatl number = ", total);
