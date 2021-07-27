class Department {
  protected employees: string[] = [];
  // 이렇게 접근자를 키워드로 설정해주는 것은 자바스크립트에서는 지원하지 않는 기능이다.
  // private으로 하면 상속 클래스에서는 접근할 수 없기 때문에 protected

  static fiscalYear: number = 2020;

  constructor(private readonly id: string, private name: string) {}
  // field의 선언과 생성자에서의 초기화를 합친 문법으로 자바스크립트에서는 지원하지 않는다.
  // readonly키워드 역시 자바스크립트에서는 지원하지 않는다.

  // 인스턴스가 아닌 클래스를 매개로 호출하는 static 메서드
  static createEmployee(name: string) {
    return { name };
  }

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
  constructor(
    id: string,
    public admins: string[],
    private lastAdmin: string = admins[0]
  ) {
    super(id, "IT");
    // 부모 클래스의 생성자를 호출하는 키워드
  }

  get mostRecentAdmin() {
    if (this.lastAdmin) return this.lastAdmin;

    throw new Error("관리자가 한 명도 없습니다.");
  }

  set mostRecentAdmin(value: string) {
    if (!value) throw new Error("관리자 이름을 인자로 넘겨야 합니다.");
    this.addEmployee(value);
  }

  addEmployee(name: string) {
    if (name === "자격미달자") return;
    this.employees.push(name);
    this.lastAdmin = name;
  }
}

const it = new ITDepartment("id1", []);

it.addEmployee("abc");
it.addEmployee("def");
it.addEmployee("자격미달자");

it.describe();
it.printEmployeeInformation();
