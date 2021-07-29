// class와는 달리 청사진 역할이 아니라 그저 타입 정의일 뿐이다.

interface Greetable {
  name: string;
  greet(phrase: string): void;
}

// type Greetable = {
//   name: string;
//   greet(phrase: string): void;
// };

// 이렇게 custom type으로도 타입 체킹이 가능하며,
// interface가 객체의 구조만을 정의할 수 있는 반면,
// custom type은 type 정의에 제한이 없기 때문에 더 유연해 보인다.
// 하지만 interface는 보다 '명확'하다
// 또한 inteface는 class에 적용할 수도 있다.

// 상속과 implements가 다른 점은 implements는 복수의 interface가 적용가능하다는 것이다.
class Person implements Greetable {
  constructor(public name: string, private age: number) {}

  greet() {}
}

let user1: Greetable;

user1 = new Person("woobuntu", 30);
