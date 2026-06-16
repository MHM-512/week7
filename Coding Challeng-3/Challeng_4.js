// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

 DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%  */





 class cars {
    constructor(make, speed) {
        this.make = make
        this.speed = speed
    }
    accelerate() {
        this.speed += 10;
        console.log(`${this.make}is Going at ${this.speed} `);
    }
    brake() {
        this.speed -= 5;
        console.log(`${this.make}is Going at ${this.speed} `);
    }
    get speedUS() {
        return this.speed / 1.6;
    }
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }

}
const ford = new cars('ford', 120);
console.log(ford.speedUS); 
ford.speedUS = 50; 
ford.accelerate()
ford.brake()
console.log(ford);

const Student = function ( firstName ,birthYear ,course){
person.call(this , firstName , birthYear)
this.course = course
}
Student.prototype=Object.create(person.prototype)
