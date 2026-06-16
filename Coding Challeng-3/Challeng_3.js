// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%
*/
const Car = function (make, speed) {
    this.make = make
    this.speed = speed
}

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make}is Going at ${this.speed} `);
}

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make}is Going at ${this.speed} `);
}
const Ev = function (make , speed , charge) {
    // this.speed = speed
    // this.make = make 
    // this.charge =charge
    Car.call(this , make , speed)
    this.charge = charge
}

Ev.prototype = Object.create(Car.prototype)

Ev.prototype.chargeBattery = function(chargeTO){
    this.charge= chargeTO
}
Ev.prototype.accelerate = function(){
    this.speed += 20
    this.charge--
    console.log(`${this.make} going at ${this.speed}km/h , with a charge of ${this.charge}%`);
}
const tesla = new Ev( 'tesla' , 120 , 30 )

tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

 
