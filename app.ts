class Department {
  private employees: string[] = [];
  // 이렇게 접근자를 키워드로 설정해주는 것은 자바스크립트에서는 지원하지 않는 기능이다.

  constructor(private readonly id: string, private name: string) {}
  // field의 선언과 생성자에서의 초기화를 합친 문법으로 자바스크립트에서는 지원하지 않는다.
  // readonly키워드 역시 자바스크립트에서는 지원하지 않는다.

  // 파라미터로 this의 타입을 명시해주는 것은
  // describe메소드가 Department의 구조를 따르는 객체에서만 호출되도록 하는 안전장치라고 볼 수 있다.
  // 꼭 Department의 인스턴스일 필요는 없음
  describe(this: Department) {
    console.log(`Department(${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    // 부모 클래스의 생성자를 호출하는 키워드
  }
}

const it = new ITDepartment("id1", ["a", "b", "c"]);

it.addEmployee("abc");
it.addEmployee("def");

it.describe();
it.printEmployeeInformation();

console.log(it);
