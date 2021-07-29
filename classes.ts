// 이와 같은 추상 클래스는 스스로 인스턴스를 생성할 수 없고,
// 이러한 추상 클래스를 상속한 자식 클래스만이 인스턴스를 생성할 수 있다.
abstract class Department {
  static fiscalYear: number = 2020;

  constructor(
    protected readonly id: string,
    private name: string,
    protected employees: string[] = []
  ) {}
  // field의 선언과 생성자에서의 초기화를 합친 문법으로 자바스크립트에서는 지원하지 않는다.
  // readonly키워드 역시 자바스크립트에서는 지원하지 않는다.
  // private으로 하면 상속 클래스에서는 접근할 수 없기 때문에 protected

  // 인스턴스가 아닌 클래스를 매개로 호출하는 static 메서드
  static createEmployee(name: string) {
    return { name };
  }

  // 이 Department라는 추상 클래스를 상속하는 자식 클래스는
  // return값이 없는 describe메소드를 '반드시' 구현해야 한다.
  // 또한 자식 클래스에서의 this는 Department클래스에 기반한 클래스면 무엇이든 가능하다.
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  private static instance: ITDepartment;

  // 생성자를 private으로 지정하면 new 키워드로 새 인스턴스를 생성할 수 없다.
  private constructor(
    id: string,
    public admins: string[],
    private lastAdmin: string = admins[0]
  ) {
    super(id, "IT");
    // 부모 클래스의 생성자를 호출하는 키워드
  }

  // 싱글톤 클래스의 유일한 인스턴스를 반환하는 static 메서드
  static getInstance() {
    if (this.instance) return this.instance;
    this.instance = new ITDepartment("id머시기", []);
    return this.instance;
  }

  get mostRecentAdmin() {
    if (this.lastAdmin) return this.lastAdmin;

    throw new Error("관리자가 한 명도 없습니다.");
  }

  set mostRecentAdmin(value: string) {
    if (!value) throw new Error("관리자 이름을 인자로 넘겨야 합니다.");
    this.addEmployee(value);
  }

  describe(this: ITDepartment) {
    console.log("IT Department ID : ", this.id);
  }

  addEmployee(name: string) {
    if (name === "자격미달자") return;
    this.employees.push(name);
    this.lastAdmin = name;
  }
}

const it = ITDepartment.getInstance();

it.addEmployee("abc");
it.addEmployee("def");
it.addEmployee("자격미달자");

it.describe();
it.printEmployeeInformation();
