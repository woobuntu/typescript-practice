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

printResult(add(5, 12));
