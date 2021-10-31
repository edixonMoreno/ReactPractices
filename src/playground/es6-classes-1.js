
class Person {
    
    constructor(name = "Anónimo", edad = 0) {
        this.name = name;
        this.edad = edad;
    }
    getGretting() {
        return `Hi! I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.edad} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, edad, major) {
        super(name, edad);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, edad, homelocation) {
        super(name, edad);
        this.homelocation = homelocation;
    }
    homeLocation() {
        return !!this.homelocation;
    }
    getGretting() {
        let gretting = super.getGretting();

        if(this.homeLocation()) {
            gretting += ` I'm visitting from ${this.homelocation}.`;
        }
        return gretting;
    }
}

// Traveler -> Person
//Add support for homelocation
// Overwrite getGretting
// 1. Hi i am Edixon Moreno. Im visitting from Phila.
// 2. Hi. I am Andrew Mead

const me = new Traveler("Edixon Moreno", "Los Teques");
console.log(me.getGretting());
const other = new Traveler();
console.log(other.getGretting());


