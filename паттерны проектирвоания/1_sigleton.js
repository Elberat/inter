//* singleton - это паттерн, который позволяет использовать один и тот же объект в программе не создавая новый объект.
//* Пример использования:
//* При попытке открыть один и тот же объект в программе не создавая новый объект, программа возвращает один и тот же объект.

// let instance;

class Counter {
    constructor() {
        if (!instance) instance = this;
        instance.count = 0;
        return instance;
    }

    getCount() {
        return this.count;
    }
    increaseCount() {
        return this.count++;
    }
}

let counter1 = new Counter();
let counter2 = new Counter();

counter1.increaseCount();
counter1.increaseCount();
counter2.increaseCount();
counter2.increaseCount();
console.log(counter1.getCount()); //*4
console.log(counter2.getCount()); //*4
