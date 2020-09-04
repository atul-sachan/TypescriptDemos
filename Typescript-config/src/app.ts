/*********************************************Basics function**************************** */
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input!');
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);


/*********************************************functions with callback **************************** */

function addValue(n1: number, n2: number) {
  return n1 + n2;
}

function printFunctionResult(num: number): void {
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printFunctionResult(addValue(5, 12));

let combineValues: (a: number, b: number) => number;  // callback function like delegate

combineValues = addValue;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

// let someValue: undefined;

addAndHandle(10, 20, (result) => {
  console.log(result);
});

/*********************************************Emums **************************** */
enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };

/*********************************************Objects **************************** */
const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

/*********************************************Arrays **************************** */
let favoriteActivities: string[];
favoriteActivities = ['Sports'];

/*********************************************Tuples **************************** */
let product: [number, string] = [1, "Bag"]; // its a fixed Array length

/**********************************Examples of Enum, Objects, Array and Tuples **************************** */

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}

if (person.role === Role.AUTHOR) {
  console.log('is author');
}

product.push('Box'); // its is exception 
// product[1] = 10; // !!! ERROR !!!

// product = [0, 'Bag', 'Box']; // !!! ERROR !!!


/********************************************* Unknown **************************** */
// we can assign anything but its is different from any. 
// Always need to check typeof before assigned to any variable.
let userInput: unknown;  
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}

/********************************************* Never **************************** */
// It is different from void. Never ensure it exits function before return.

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}

// generateError('An error occurred!', 500);

/********************************************* Union and Alias **************************** */

type Combinable = number | string;   // Unions
type ConversionDescriptor = 'as-number' | 'as-text';  // Alias Types or Literal Objects

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);

/********************************************* Rest Operator **************************** */
const atul = {
  personName: "atul sachan",
  website: "https://atul.com/",
  twitterHandle: "@atul"
};

// const { personName, ...accounts} = atul;
// const { twitterHandle, ...rest} = atul;
// const { personName: fullName, ...accounts} = atul;

/********************************************* Spread Operator **************************** */
const defaultOptions = {
  method: "GET",
  credentials: "same-origin"
};

const requestOptions = {
  method: "POST",
  redirect: "follow"
};

const options = {
  ...defaultOptions,
  ...requestOptions
};
console.log(options);
// {
//   method: "POST",
//   credentials: "same-origin",
//   redirect: "follow"
// }

//******************************** */
// Making Shallow Copies of Objects
//******************************** */
const todo = {
  text: "Water the flowers",
  completed: false,
  tags: ["garden"]
};

const shallowCopy = { ...todo };

console.log(todo === shallowCopy);
// false

console.log(shallowCopy);
// {
//   text: "Water the flowers",
//   completed: false,
//   tags: ["garden"]
// }

/********************************************* Array and Object Destructring **************************** */
var rect = { x: 0, y: 10, width: 15, height: 20 };

// Destructuring assignment
var {x, y, width, height} = rect;
console.log(x, y, width, height); // 0,10,15,20

rect.x = 10;
({x, y, width, height} = rect); // assign to existing variables using outer parentheses
console.log(x, y, width, height); // 10,10,15,20

var {w, x, ...remaining} = {w: 1, x: 2, y: 3, z: 4};
console.log(w, x, remaining); // 1, 2, {y:3,z:4}

var x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // 2,1

var [x, y, ...remainings] = [1, 2, 3, 4];
console.log(x, y, remainings); // 1, 2, [3,4]

var [x, , ...remainingss] = [1, 2, 3, 4];
console.log(x, remainingss); // 1, [3,4]

/********************************************* Classes **************************** */
//******************************** */
// abstract class
// readonly Properties
// public , private and protected Access modifier
// static property and methods
// getter and setter for property
// singleton class
//******************************** */
abstract class Department {
  static fiscalYear = 2020;
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    // console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id);
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

// it.employees[2] = 'Anna';

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();

/********************************************* Interfaces **************************** */

// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let addNumber: AddFn;

addNumber = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi!');
    }
  }
}

let user1: Greetable;

user1 = new Person();
// user1.name = 'Manu';

user1.greet('Hi there - I am');
console.log(user1);

/*************************************** Intersection Types **************************** */

type Admin ={
  name: string,
  privileges: string[]
}

type Employee ={
  name: string,
  startDate: Date
}

type ElevatedEmployee = Admin & Employee;


// Must require properties from Admin & Employee
const e1: ElevatedEmployee = {
  name: 'Atul',
  privileges: ['Admin'],
  startDate: new Date()
}

/*************************************** Union Types **************************** */

type Combinables = string | number;
type Numeric = number | boolean;

type Universal = Combinables & Numeric;

function addTypes(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}

printEmployeeInformation({ name: 'Manu', startDate: new Date() });

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

/*************************************** Discriminated Union Types **************************** */

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving at speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});

/*************************************** Index Properties **************************** */
interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character!' }
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character!'
};

/*************************************** Function Overload **************************** */
function FnOverLoading(a: number): number;
function FnOverLoading(a: number, b: number): number;
function FnOverLoading(a: string, b: string):string;
function FnOverLoading(a: string | number, b?: string| number) {
  if ((typeof a === 'string' || typeof b === 'string') && b ) {
    return a.toString() + b.toString();
  }else if(!b){
    return a;
  }else{
    return +a + +b;
  }
  
}

/*************************************** Nullish Coalescing & Channing  **************************** */
type UserResponse = {
  occupation?: string
}
const userss: UserResponse = {};
// without optional chaining
let userOccupation = userss && userss.occupation;
// with optional chaining
userOccupation = userss?.occupation;


let userInputs = undefined;
const storedData = userInputs ?? 'Default';
console.log(storedData);
// null value
null || 20 // returns 20
null ?? 20 // returns 20

// undefined value
undefined || 20 // returns 20
undefined ?? 20 // returns 20

// boolean
true ?? 10 // returns trueb
false ?? 10 // returns false

// NaN
NaN ?? 20 // returns NaN

// empty string
'' ?? 5 // returns ''

/*************************************** Generics  **************************** */

// const names: Array<string> = []; // string[]
// // names[0].split(' ');

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then(data => {
//   // data.split(' ');
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'Max' }, 'name');

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); // -1
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'Max'};
// objStorage.addItem(maxObj);
// objStorage.addItem({name: 'Manu'});
// // ...
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu'); !!! Error !!!!
// names.pop(); !!! Error !!!!