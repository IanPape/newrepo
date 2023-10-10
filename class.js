class Vehicle {
    constructor (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    }
    honk () {
        return "BEEP!";
    }
    toString () {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }

} 

class Car extends Vehicle {
    constructor (make, model, year) {
        super (make, model, year);
        this.numWheels= 4;
    }
}

class Motorcycle extends Vehicle {
    constructor (make, model, year) {
        super (make, model, year);
        this.numWheels = 2;
    }
    revEngine () {
        return "VROOM!";
    }
}

class Garage {
    constructor (capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add (newVehicle) {
        if (typeOf newVehicle !== 'string' && typeOf newVehicle !=='number') {
            return "Only vehicles are allowed in here!"
        }
        if (this.vehicles.lenght >= this.capacity) {
            return "Sorry, we're full."
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
    }
}