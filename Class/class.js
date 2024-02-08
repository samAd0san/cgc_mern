// Class is a blueprint for creating object with predefined properties and methods

class Car {
    // Properties

    constructor(make, model, year) {
        this.make = make;
        this.model = model; 
        this.year = year;
        this.speed = 0; // initialized to 0
    }

    // Methods

    accelerate() {
        this.speed += 10;
        console.log("Accelerating Current Speed:",this.speed);
    }

    brake() {
        this.speed -= 5;
        console.log("Braking! Current speed:",this.speed);
    }
}

// Creating an instance of the class (object)
var car1 = new Car("Toyota","Corolla",2022);

// using the methods of the car Class
car1.accelerate(); // Accelerating Current Speed: 10
car1.brake(); // Braking! Current speed: 5d