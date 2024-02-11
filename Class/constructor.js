class Car {
    // Properties
    constructor(make, model, year) {
      this.make = make;     // Property: make
      this.model = model;   // Property: model
      this.year = year;     // Property: year
      this.speed = 0;       // Property: speed, initialized to 0
    }
  
    // Methods
    accelerate() {
      this.speed += 10;     // Method: accelerate, increases speed by 10
      console.log("Accelerating! Current speed:", this.speed);
    }
  
    brake() {
      this.speed -= 5;      // Method: brake, decreases speed by 5
      console.log("Braking! Current speed:", this.speed);
    }
  }
  
  // Creating a new instance of the Car class
  let myCar = new Car("Toyota", "Corolla", 2022);
  
  // Using the methods of the Car class
  myCar.accelerate();  // Outputs: Accelerating! Current speed: 10
  myCar.brake();       // Outputs: Braking! Current speed: 5
  