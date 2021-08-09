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

function add(a: Combinable, b: Combinable) {
  // typeof를 사용한 type guard
  return typeof a === "string" || typeof b === "string"
    ? a.toString() + b.toString()
    : a + b;
}

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
