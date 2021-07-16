const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //tuple type을 선언하는 방법
} = {
  name: "이인우",
  age: 30,
  hobbies: ["스포츠", "요리"],
  role: [2, "author"],
};

// person.role = [0, "admin", "user"];
// 이처럼 할당 시에는 타입스크립트가 오류를 잡아주지만,

person.role.push("user");
// 이러한 동작까지는 타입스크립트가 예방할 수 없다는 것을 염두에 두어야 한다.
