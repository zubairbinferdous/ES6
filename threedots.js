
const ages = [12 , 14 , 15 , 18 , 19 ];
const ages2 = [15 , 22 , 19 , 25 ];
const ages3 = [76 , 32 , 18 ];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAge2 = [...ages , ...ages2 , ...ages3];
console.log(allAges);
console.log('ok easy way',allAge2);

const a = 200;
const b = 300;
const c = 400;
const maximum = Math.max( a , b , c);
console.log(maximum);

const taka = [10 , 20 , 30 ];
const maximum2 = Math.max(...taka);
console.log(maximum2);
