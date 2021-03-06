type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;
// interface ElevatedEmployee extends Admin, Employee {} 도 가능
// type을 extends해서 interface를 정의할 수 있다...?

// interface Admin {
//   name: string;
//   privileges: string[];
// }

// interface Employee {
//   name: string;
//   startDate: Date;
// }

// interface ElevatedEmployee extends Admin, Employee {}
// type ElevatedEmployee = Admin & Employee; 도 가능

const e1: ElevatedEmployee = {
  name: "woobuntu",
  privileges: ["create-server"],
  startDate: new Date(),
};

// 이렇게 교차 타입을 만드는 것은 객체의 타입을 정의할 때 특히 유용하지만
// 아래와 같이 모든 종류의 타입에 적용 가능하다.

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
// 교집합이 number이므로 Universal의 타입은 number이다.

function add(a: number, b: number): number;
function add(a: string, b: number): string;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  // typeof를 사용한 type guard
  return typeof a === "string" || typeof b === "string"
    ? a.toString() + b.toString()
    : a + b;
}

const result = add("a", 1);
// add 함수를 overload해두었기에 타입스크립트가 result를 string으로 인식할 수 있는 것
// 그렇지 않았다면 result는 Combinable타입으로만 인식된다.

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(employee: UnknownEmployee) {
  console.log(`Name : ${employee.name}`);
  // in문을 이용한 type guard
  if ("privileges" in employee)
    console.log(`privileges : ${employee.privileges}`);
  if ("startDate" in employee) console.log(`startDate : ${employee.startDate}`);
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo ... ${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // class의 경우 in보다는 instanceof type guard가 바람직하다.
  if (vehicle instanceof Truck) vehicle.loadCargo(1000);
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  // discriminated Union을 위한 property의 이름은 꼭 type이어야 하는 것은 아니다.
  // interface의 정의이기 때문에 여기서의 'bird'는 value가 아니라 literal type이다.
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log(`Moving with speed : ${speed}`);
}

// 아래의 두 방법으로 type casting이 가능하지만 첫번째 방법은 jsx와는 양립할 수 없다.
// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );
// const userInputElement = document.getElementById(
//   "user-input"
// )! as HTMLInputElement;
// 타입스크립트가 html파일까지 관찰하지 않기 때문에 이 element가 input태그임을 미리 알지는 못한다.
// 따라서 type casting 없이는 userInputElement의 value에 접근한다던가 하는 작업을 할 수 없다.
// 하지만 개발자인 우리는 알고 있으므로, 개발자의 책임 하에 type casting을 하는 것
// !는 절대 null값일 수 없다는 것을 의미한다.

// userInputElement.value = "Hi there!";

// 만약 userInputElement가 반드시 null이 아니라고 장담할 수 없을 경우 아래와 같은 방법을 사용할 수도 있다.
const userInputElement = document.getElementById("user-input");
if (userInputElement)
  (userInputElement as HTMLInputElement).value = "Hi there!";

interface ErrorContainer {
  // index type
  [key: string]: string;
  // 이렇게 인덱스 타입을 설정해두면 ErrorContainer의 모든 속성의 값은 string타입만 허용된다.
  // 그리고 key는 string으로 전환될 수 있는 값이면 모두 가능하다.
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  1: "숫자 1은 문자열 '1'로 전환이 되죠",
};

const fetchedUserData = {
  id: "u1",
  name: "Max",
  // job: { title: "CEO", descriptioin: "My onw company" },
};

// console.log(fetchedUserData?.job?.title);

const userInput = 0;

const storedData = userInput ?? "DEFAULT";
// userInput이 null이거나 undefined일 때만 후자값을 적용하고,
// ""나 0같은 값이면 그 값을 그대로 사용한다.

console.log(storedData);
