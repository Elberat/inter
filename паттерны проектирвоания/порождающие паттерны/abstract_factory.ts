// Абстрактная фабрика Секция статьи "Абстрактная фабрика"
// Абстрактная фабрика (англ. abstract factory) — это фабрика фабрик 😃

// Этот шаблон группирует связанные или похожие фабрики объектов вместе, позволяя выбирать нужную в зависимости от ситуации.

// Абстрактная фабрика не возвращает конкретный объект, вместо этого она описывает тип объекта, который будет создан.

// Проще всего объяснить смысл абстрактной фабрики, используя TypeScript и понятие интерфейса. Представим, что у нас есть приложение, которое управляет музыкальным инвентарём для концертного оркестра.

// Инструменты разные, но все их мы можем описать интерфейсом Instrument:

interface Instrument {
    playNote(note: MusicNote): void;
}

class Violin implements Instrument {
    playNote(note) {
        console.log(`Playing ${note} on violin!`);
    }
}

class Cello implements Instrument {
    playNote(note) {
        console.log(`Playing ${note} on cello!`);
    }
}

// Музыканты оркестра играют строго каждый на своём инструменте, но всех музыкантов мы можем описать интерфейсом Musician:

interface Musician {
    play(piece: MusicPiece): void;
}

// Тогда, например, скрипачей и виолончелистов мы сможем представить так:

class Violinist implements Musician {
    private instrument: Instrument = new Violin();

    play = piece => piece.forEach(note => this.instrument.playNote(note));
    // Playing A# on violin!
    // Playing C on violin!
    // ...
}

class Cellist implements Musician {
    private instrument: Instrument = new Cello();

    play = piece => piece.forEach(note => this.instrument.playNote(note));
    // Playing A# on cello!
    // Playing C on cello!
    // ...
}

// Теперь напишем часть приложения, которая резервирует места и инструменты для каждого музыканта в оркестре.

class ViolinReservation {
    reserveViolin = () => new Violin();
    notifyPlayer = () => new Violinist();
}

class CelloReservation {
    reserveCello = () => new Cello();
    notifyPlayer = () => new Cellist();
}

// Пусть места резервируются функцией reserve. Проблема появляется, когда мы хотим использовать одинаковую функцию с разными классами для резервирования мест. Непонятно, какой тип должен быть у аргумента, также неясно, какой метод вызывать для резервации инструмента:

// В аргументе можно использовать объединение типов,
// но если добавится ещё какой-то класс,
// придётся обновлять и это объединение тоже :–(
function reserve(reservation: ViolinReservation | CelloReservation): void {
    // Уведомить музыканта, допустим, мы можем:
    reservation.notifyPlayer();

    // А вот для вызова метода резервирования инструмента,
    // потребуется знать, какой перед нами класс :–(
    if (reservation instanceof ViolinReservation) {
        reservation.reserveViolin();
    } else if (reservation instanceof CelloReservation) {
        reservation.reserveCello();
    }
}
// Такая функция будет очень хрупкой, и её придётся обновлять при изменении состава оркестра. Нам хочется создать один интерфейс для резервирования любых инструментов. Этот интерфейс будет гарантией того, что сколько бы ни было музыкантов, какие бы они ни были, мы всегда сможем вызвать один метод для резервирования.

// Для решения этой задачи как раз подойдёт абстрактная фабрика:

// Общий интерфейс:
interface ReservationFactory {
    reserveInstrument(): Instrument;
    notifyPlayer(): Musician;
}

// Реализации под разные инструменты:
class ViolinReservation implements ReservationFactory {
    reserveInstrument = () => new Violin();
    notifyPlayer = () => new Violinist();
}

class CelloReservation implements ReservationFactory {
    reserveInstrument = () => new Cello();
    notifyPlayer = () => new Cellist();
}

// Тогда функция reserve станет прямолинейнее и менее хрупкой:

function reserve(reservation: ReservationFactory): void {
    reservation.notifyPlayer();
    reservation.reserveInstrument();
}
