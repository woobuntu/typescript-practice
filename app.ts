function combine(input1: number | string, input2: number | string) {
  // const result = input1 + input2;
  // 타입스크립트는 input1과 2가 union type이라는 것만 체크하여 + 연산자가 동작하지
  // 않는다고 판단하기에(실제로는 가능하지만), 아래와 같이 동적 타입 체킹으로 이를 회피한다.
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("Max", "Anna");
console.log(combinedNames);
