// //!инкапсуляция
//* Суть инкапсуляции — спрятать код и данные модуля внутри этого модуля, исключить бесконтрольный доступ к ним извне.
// //!пример1
// class Rectangle {
//     private _width: number; // _ - приватный метод
//     private _height: number;

//     constructor(width: number, height: number) {
//         // конструктор
//         this._width = width;
//         this._height = height;
//     }

//     public get width(): number {
//         // getter
//         return this._width;
//     }

//     public set width(value: number) {
//         // setter
//         if (value <= 0) {
//             this._width = 1;
//         } else {
//             this._width = value;
//         }
//     }
// }

// const rect = new Rectangle(5, 10);
// rect.width = -5;
// console.log(rect.width);

//!пример2
// class User {
//     private _username: string;
//     private _password: string;
//     private _id: number;

//     constructor(username: string, password: string) {
//         this._username = username;
//         this._password = password;
//         this._id = Date.now();
//     }

//     get username(): string {
//         return this._username;
//     }

//     set username(value: string) {
//         this._username = value;
//     }

//     get password(): string {
//         return this._password;
//     }

//     set password(value: string) {
//         this._password = value;
//     }

//     get id(): number {
//         return this._id;
//     }
// }

//!пример 3

// class Database {
//     private _URL: string;
//     private _Port: string;
//     private _username: string;
//     private _password: string;
//     private _tables: string[] = [];

//     constructor(URL: string, Port: string, username: string, password: string) {
//         this._URL = URL;
//         this._Port = Port;
//         this._username = username;
//         this._password = password;
//         this._tables = [];
//     }

//     public addTable(table: string): void {
//         this._tables.push(table);
//     }

//     public clearTables(): void {
//         this._tables = [];
//     }

//     get URL(): string {
//         return this._URL;
//     }

//     get Port(): string {
//         return this._Port;
//     }

//     get username(): string {
//         return this._username;
//     }

//     get password(): string {
//         return this._password;
//     }

//     get tables(): string[] {
//         return this._tables;
//     }
// }

// const db = new Database('localhost', '3306', 'root', 'root');
// db.addTable('users');
// db.clearTables();

//!наследование
// class Person {
//     private _firstName: string;
//     private _lastName: string;
//     private _age: number;

//     constructor(firstName: string, lastName: string, age: number) {
//         this._firstName = firstName;
//         this._lastName = lastName;
//         this._age = age;
//     }

//     public get fullName(): string {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     get firstName(): string {
//         return this._firstName;
//     }

//     set firstName(value: string) {
//         this._firstName = value;
//     }

//     get lastName(): string {
//         return this._lastName;
//     }

//     set lastName(value: string) {
//         this._lastName = value;
//     }

//     get age(): number {
//         return this._age;
//     }

//     set age(value: number) {
//         if (value < 0) {
//             this._age = 0;
//         } else {
//             this._age = value;
//         }
//     }
// }

// class Employee extends Person {
//     private inn: number;
//     private number: number;
//     private snils: number;

//     constructor(firstName: string, lastName: string, age: number, inn: number, number: number, snils: number) {
//         super(firstName, lastName, age); //* вызов конструктора родителя
//         this.inn = inn;
//         this.number = number;
//         this.snils = snils;
//     }
// }
// const employee1 = new Employee('Иван', 'Иванов', 25, 123456789, 123456789, 123456789);
// console.log(employee1);

// class Developer extends Employee {
//     private level: string;
//     private language: string;

//     constructor(
//         firstName: string,
//         lastName: string,
//         age: number,
//         inn: number,
//         number: number,
//         snils: number,
//         level: string,
//         language: string
//     ) {
//         super(firstName, lastName, age, inn, number, snils);
//         this.level = level;
//         this.language = language;
//     }
// }

// const developer1 = new Developer('Иван', 'Иванов', 25, 123456789, 123456789, 123456789, 'junior', 'typescript');
// developer1.fullName;

//!полиморфизм
//* 2 вида полиморфизма
//* параметрический(истинный) и ad-hoc(мнимый)

// *ad-hoc

// class Calculator {
//     public add(a: number, b: number): number {
//         return a + b;
//     }

//     public add(a: string, b: string): string {
//         return a + b;
//     }
// }

// add(5, 5); -> res = 10
// add('5', '5'); -> res = '55'

//*параметрический

// class Person {
//     private _firstName: string;
//     private _lastName: string;
//     private _age: number;

//     constructor(firstName: string, lastName: string, age: number) {
//         this._firstName = firstName;
//         this._lastName = lastName;
//         this._age = age;
//     }

//     public get fullName(): string {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     public greeting() {
//  //* будет переопределяться в дочерних классах
//         console.log(`привет, я человек и меня зовут ${this._firstName}`);
//     }

//     get firstName(): string {
//         return this._firstName;
//     }

//     set firstName(value: string) {
//         this._firstName = value;
//     }

//     get lastName(): string {
//         return this._lastName;
//     }

//     set lastName(value: string) {
//         this._lastName = value;
//     }

//     get age(): number {
//         return this._age;
//     }

//     set age(value: number) {
//         if (value < 0) {
//             this._age = 0;
//         } else {
//             this._age = value;
//         }
//     }
// }

// class Employee extends Person {
//     private inn: number;
//     private number: number;
//     private snils: number;

//     constructor(firstName: string, lastName: string, age: number, inn: number, number: number, snils: number) {
//         super(firstName, lastName, age); //* вызов конструктора родителя
//         this.inn = inn;
//         this.number = number;
//         this.snils = snils;
//     }

//     public greeting() {
//         console.log(`привет, я работник и меня зовут ${this._firstName}`);
//     }
// }

// class Developer extends Employee {
//     private level: string;
//     private language: string;

//     constructor(
//         firstName: string,
//         lastName: string,
//         age: number,
//         inn: number,
//         number: number,
//         snils: number,
//         level: string,
//         language: string
//     ) {
//         super(firstName, lastName, age, inn, number, snils);
//         this.level = level;
//         this.language = language;
//     }

//     public greeting() {
//         console.log(`привет, я разработчик и меня зовут ${this._firstName}`);
//     }
// }
// const person1 = new Person('Иван', 'Иванов', 25);
// const employee1 = new Employee('Иван', 'Иванов', 25, 123456789, 123456789, 123456789);
// const developer1 = new Developer('Иван', 'Иванов', 25, 123456789, 123456789, 123456789, 'junior', 'typescript');

// //*функция greeting работает по разному во всех классах
// const pesonList: Person[] = [person1, employee1, developer1];

// function massGreeting(persons: Person[]) {
//     for (let i = 0; i < persons.length; i++) {
//         persons[i].greeting();
//     }
// }

// massGreeting(pesonList);

//! композиция и агрегация

// class Engine {
//     drive() {
//         console.log('Двигатель работает');
//     }
// }

// class Wheel {
//     drive() {
//         console.log('колеса едут');
//     }
// }

// class Freshener {}

// class Flat {
//     freshener: Freshener;
//     //*агрегация
//     constructor(freshener) {
//         this.freshener = freshener;
//     }
// }

// class Car {
//     engine: Engine;
//     wheels: Wheel[];
//     freshener: Freshener;

//     constructor(freshener) {
//         //*агрегация
//         this.freshener = freshener;
//         //* композиция
//         this.engine = new Engine();
//         this.wheels.push(new Wheel());
//         this.wheels.push(new Wheel());
//         this.wheels.push(new Wheel());
//         this.wheels.push(new Wheel());
//     }

//     //*делегирование метода drive
//     //*вызов одного метода из нескольких классов
//     drive() {
//         this.engine.drive();
//         for (let i = 0; i < this.wheels.length; i++) {
//             this.wheels[i].drive();
//         }
//     }
// }

// const bmw = new Car();
// bmw.drive();

//! абстрактные классы и интерфейсы

// abstract class Client {
//     connect(url: string): void {
//         console.log(`Подключение к ${url}`);
//     }

//     abstract read(): string;
//     abstract write(data: string): void;
// }

// interface Client {
//     connect(url: string): void;
//     read(): string;
//     write(data: string): void;
// }

// class User {
//     username: string;
//     age: number;
// }

// interface Repository<T> {
//     create: (obj: T) => T;
//     get: () => T;
//     delete: (obj: T) => T;
//     update: (obj: T) => T;
// }

// class UserRepo implements Repository<User> {
//     create(obj: User): User {
//         return undefined;
//     }

//     get(): User {
//         return undefined;
//     }

//     delete(obj: User): User {
//         return undefined;
//     }

//     update(obj: User): User {
//         return undefined;
//     }
// }

//! реализация dependency injection

// interface UserRepo {
//     getUsers: () => User[];
// }

// class UserMongoDBRepo implements UserRepo {
//     getUsers(): User[] {
//         console.log('Получение данных из MongoБД');
//         return [{ age: 15, username: 'user from mongo' }];
//     }
// }
// class UserPostgresRepo implements UserRepo {
//     getUsers(): User[] {
//         console.log('Получение данных из Postgres');
//         return [{ age: 15, username: 'user from postgres' }];
//     }
// }

// class UserService {
//     userRepo: UserRepo;

//     constructor(userRepo: UserRepo) {
//         //*агрегация
//         this.userRepo = userRepo;
//     }

//     filterUserByAge(age: number) {
//         const users = this.userRepo.getUsers();
//         //логика фильрации
//         console.log(users);
//     }
// }

// const userServise = new UserService(new UserMongoDBRepo());
// userServise.filterUserByAge(15);

//!паттерн singleton

// class Database {
//     url: string;
//     //static - для того чтобы можно было вызвать метод без создания объекта
//     private static instance: Database;

//     constructor() {
//         //* проверка на существование объекта
//         if (Database.instance) {
//             return Database.instance;
//         }
//         this.url = Math.random().toString();
//         Database.instance = this;
//     }
// }
// const db1 = new Database();
// const db2 = new Database();

// //получаем один и тот же результат при каждом вызове
// console.log(db1.url);
// console.log(db2.url);
