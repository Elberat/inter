function bmwProducer(kind) {
    return kind === 'sport' ? sportCarFactory : familyCarFactory;
}

function sportCarFactory() {
    return new Z4();
}

function familyCarFactory() {
    return new I3();
}

class Z4 {
    info() {
        return 'Z4 is a Sport car!';
    }
}

class I3 {
    info() {
        return 'i3 is a Family car!';
    }
}

const produce = bmwProducer('sport');
const myCar = new produce();
const produce2 = bmwProducer('family');
const myCar2 = new produce2();
console.log(myCar.info());
console.log(myCar2.info());
