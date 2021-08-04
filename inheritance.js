class parent{
    constructor() {
        this.fatherName = 'ferdous khan';
    }
}

class Child extends parent{
    constructor(name){
        super();
        this.name = name;
    }

    getFullName(){
        return this.name+ " " + this.fatherName;
    }
}



const baby = new Child('zubair');
const baby1 = new Child('labiba');
console.log(baby.getFullName());
console.log(baby1.getFullName());

// module(22-8);