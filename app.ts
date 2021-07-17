function add(n1: number, n2: number) {
  // 일반적으로는 타입스크립트가 타입 추론을 하게끔 return type을 명시하지 않는다고 한다.
  return n1 + n2;
}

function printResult(num: number) {
  // 함수가 아무것도 반환하지 않을 때의 타입을 명시하고자 한다면 void를 사용해야 한다.
  // undefined type은 변수에는 적용 가능하지만 함수의 반환 타입으로는 사용할 수 없다.
  // return; 또는 return undefined;를 명시하면 사용할 수 있지만 굳이...
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  // cb의 return type이 void임에도 막상 전달되는 함수가 특정 값을 반환해도 타입스크립트는 에러로 인식하지 않는다.
  // 여기서 void는 반환 값이 없다는 의미라기 보다는 반환값을 무시한다는 의미에 가깝기 때문
  // cb의 반환값으로 무언가를 하지 않는다는 것
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;
// 함수 선언문의 타입을 화살표 함수(표현식)으로 지정할 수 있다니...

combineValues = add;

addAndHandle(10, 20, (result) => {
  console.log(result);
  return 3;
});
