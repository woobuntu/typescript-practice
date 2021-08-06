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
