// class와는 달리 청사진 역할이 아니라 그저 타입 정의일 뿐이다.
interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "woobuntu",
  age: 30,
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  },
};

user1.greet("Hi there - I am");
