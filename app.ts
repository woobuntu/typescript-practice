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

// 위에서부터 0, 1, 2 순으로 값을 할당 받는다.
enum Role {
  ADMIN,
  // 만약 ADMIN = 5와 같은 식으로 할당하면 시작점을 5로 잡을 수 있다.
  READ_ONLY,
  // 시작점과 상관없이 100 같은 숫자를 할당할 수도 있고, 심지어 텍스트를 할당할 수도 있다.
  AUTHOR,
}
// 즉 enum은 어떠한 값과 매핑되어 있는, 읽기 쉬운 식별자를 위해 사용한다.

const employee = {
  role: Role.ADMIN,
};

if (employee.role === Role.ADMIN) {
  console.log("관리자입니다.");
}
