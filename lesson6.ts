// const func = (str:string):null|number => {
//     return 315;
// }
//
//
// func('olejo')

// | ----дає зрозуміти що тип даних може бути або ... або ...;


// ---------------------------------------------------------------------------------------------------------------------------

// const user:{name:string,age:number,status?:boolean}={name:'Olejo',age:31}

// ? Одноокий Елвіс дає зрозуміти що у нам може бути цей ключ(status) із таким значенням або і не може його бути.

// Але такий тип відображення не дуже зручний, тому краще його виводити за допомогою ІНТЕРФЕЙСІВ АБО КЛАСІВ

// --------------------------------------------ВИВІД З ДОПОМОГОЮ ІНТЕРФЕЙСІВ-----------------------------------------------------

// 1.Створюємо нову папку interface.
// 2. Створюємо в ній файл тайпскріпта user.inerface.
// 3. Експортуємо в цьому файлі наш інтерфейс. Зазвичай прийнято називати інтерфейс з великої букви I.


// import {Iuser} from "./interface/user.interface";
//
// const user: Iuser = {name: 'Olejo', age: 31, status: true};


// можна передати Iuser в функцію(фле обовязко щоб значення було ним протипізовано):

// const usetCounter =(user:Iuser):Iuser=>{
//     return user;
// }
//
// usetCounter({name: 'Vasya', age: 50, status: true});

// ---------------------------------------------------------------------------------------------------------------------------

// можна передавати часткову типізацію через Partial <Iuser>(ця штукка огортання в скобки називається generic)
// Тобто тепер це означає що в нашому юзері всюди в ключах стоять ще Елвіси.
// Тобто можна якісь дані не передавати і все буде добре. Але якісь нові додавати ключі з даними не можна(тобто тих яких немає в Iuser)

// const usetCounter =(user:Partial<Iuser>):Partial<Iuser>=>{
//     return user;
// }
//
// usetCounter({name: 'Vasya'});

// ---------------------------------------------------------------------------------------------------------------------------

// Перенесемо логіку в якийсь запит

// Створимо ной інтерфейс user.uinterface2 з даними з https://jsonplaceholder.typicode.com/

// В нього пропишемо опис даних об'єкта з https://jsonplaceholder.typicode.com/

// Створимо папку service, а в ній файл user.service


// import {userService} from "./service/user.service";
//
// userService.getAll().then(value=>value.data).then(users=>{
//
//     for (let user of users) {
//         console.log(user.address.geo.lng)
//     }
// })


// -----------------------------------------------------------------------------------------------------------------------------

// ПЕРЕДАЧА ЧЕРЕЗ КЛАСИ


// class User {
//     name: string;
//     age: number;
//     status: boolean;
//
//     constructor(name:string,age:number,status:boolean) {
//         this.name = name;
//         this.age = age;
//         this.status = status;
//     }
// }
//
// const user = new User('Olejo', 31, true);


// МОЖНА ЗРОБИТИ ПОЛЯ ПРИВАТНИМИ.ЦЕ РОБИТЬСЯ ДЛЯ ТОГО ЩОБ ЦИМИ ЗМІНАМИ МОЖНА БУЛО КОРИСТУВАТИСЬ ТІЛЬКИ В КЛАСІ.
// ТОБТО ЯКЩО ЗНИЗУ ПОПРОБУВАТИ ВИВЕСТИ У ЮЗЕРА ПОЛЕ ВІКУ НЕ ВИЙДЕ ТОМУ ЩО ВОНО НЕ БУДЕ ЙОГО ВІДОБРАЖАТИ БО ВОНО СТАЛО ПРИВАТНИМ.
// ТЕПЕР ДО ЦИХ ЗМІННИХ МОЖНА ДОСТУПАТИСЬ МЕТОДАМИ
// МЕТОД private

// class User {
//     private name: string;
//     private age: number;
//     private status: boolean;
//
//     constructor(name:string,age:number,status:boolean) {
//         this.name = name;
//         this.age = age;
//         this.status = status;
//     }
//
//     getName(): string {
//        return this.name;
//     }
// }
//
// const user = new User('Olejo', 31, true);
// console.log(user.getName())


// МОЖНА ВСЕ ЦЕ СКОРОТИТИ:

// class User {
//       constructor(private name:string,private age:number,private status:boolean) {
//          this.name = name;
//         this.age = age;
//         this.status = status;
//     }
//
//     getName(): string {
//        return this.name;
//     }
// }
//
// const user = new User('Olejo', 31, true);
// console.log(user.getName())


// -------------------------------------------------------------------------------------------------------------------------

// Є ЩЕ МЕТОД protected
// ТАКОЖ ДО ЗМІННОЇ НЕ ДОСТУПИТИСЬ
// ДО НЕЇ МОЖНА БУДЕ ДОСТУПИТИСЬ В КЛАСІ НАЩАДКА


// class User {
//     name: string;
//     age: number;
//     status: boolean;
//
//     constructor(name:string,age:number,status:boolean) {
//         this.name = name;
//         this.age = age;
//         this.status = status;
//     }
//
//     protected getName(): string {
//        return this.name;
//     }
// }
//
// const user = new User('Olejo', 31, true);
//
// class UserChild extends User {
//     constructor(name:string,age:number,status:boolean) {
//         super(name,age,status);
//     }
//
//     getParentName(): string {
//         return this.name;
//     }
//
//     protected getName(): string {
//         return super.getName();
//     }
// }
//
// const child = new UserChild('Bill', 56, false);
// console.log(child.getParentName())

// ---------------------------------------------------------------------------------------------------------------------------

// ЩЕ Є МЕТОД ПО ЗАМОВЧУВАННЮ public
// ВІДОБРАЖАЄ ПРОСТО ЗВИЧАЙНІ ВІДКРИТІ ДАНІ

// ------------------------------------------------------------------------------------------------------------------------------


// КЛАСАМИ ТАКОЖ МОЖНА ЩОСЬ ТИПІЗУВАТИ(НЕ ТІЛЬКИ ІНТЕРФЕЙСАМИ):


// class User {
//     constructor(private name: string, private age: number, private status: boolean) {
//     }
// }
//
// const userObj:User={age:25,name:"Karl",status:true}

// ----------------------------------------------------------------------------------------------------------------------------




// import {IShapesActionInterface} from "./interface/ShapesAction.interface";
//
// class Rectangle implements IShapesActionInterface {
//     constructor(private a:number,private b:number) {
//     }
//
//     area(): number {
//         return this.a*this.b;
//     }
//
//     perimeter(): number {
//         return this.a+this.b;
//     }
// }
//
//
//
// class Triangle implements IShapesActionInterface {
//     constructor(private a:number,private b:number,private c:number) {
//     }
//
//     area(): number {
//         return this.a*this.b*this.c;
//     }
//
//     perimeter(): number {
//         return this.a+this.b+this.c;
//     }
// }
//
//
// const shapes:IShapesActionInterface[]=[new Rectangle(1,3),new Triangle(2,3,4)]
//
// for (let shape of shapes) {
//     console.log(shape.constructor['name'],'Area',shape.area())
//     console.log(shape.constructor['name'],'Perimeter',shape.perimeter())
//
// }


// -----------------------------------------------------------------------------------------------------------------------------

import {MyEnum} from './interface/enum'

console.log(MyEnum.FRI)









