// function doubleIT(num) {
//     return num * 2 ; 
// }

// const doubleIT = function (num) {
//     return num * 2 ;
// }

const doubleIT = num => num*2;
const add = (x , y) =>  x + y ;
const give5 = () => 5;
const doMath = (x , y ) =>{
    const sum = x+y;
    const diff = x-y;
    const result3 = sum * diff;
    return result3;
}

const result = doubleIT(50);
const addme = add(10 , 20);
const five = give5();
const doMa = doMath(10 , 8);

console.log(result);
console.log('show me the add' , addme);
console.log('five me ' , five);
console.log('doMath' , doMa);
