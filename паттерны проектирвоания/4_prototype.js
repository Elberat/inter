class TeslaCar {
    constructor(model, price, interior, autopilot) {
        this.model = model;
        this.price = price;
        this.interior = interior;
        this.autopilot = autopilot;
    }

    produce() {
        return new TeslaCar(
            this.model,
            this.price,
            this.interior,
            this.autopilot
        );
    }
}

prototypeCar = new TeslaCar('Model S', 100000, 'black', true);

car1 = prototypeCar.produce();
car2 = prototypeCar.produce();
car3 = prototypeCar.produce();

console.log(car1);
console.log(car2);
console.log(car3);
