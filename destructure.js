const person = {

    name :'joni',
    age : 14,
    gfName: 'josna',
    job: 'facebook',
    address:'kocu bari',
    phone : 1720105752,
    friends: ['navid' , 'dadu', 'songoku', 'fahim']

}

const complexObject = { 
    name : 'zubair',
    info: {
        adress :'kolaba gan',
        job : 'facebook',
        leader: 'baby'
    }
}

const {job} = complexObject.info;
console.log(job);

// const {phone} = person;
// const {phone , gfName , address} = person;
// const gfName = person.gfName;
// const phone =  person.phone;
// const age =  person.age;
// console.log(gfName , phone , address);
