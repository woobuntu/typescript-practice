function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text" // 리터럴 타입
) {
  // const result = input1 + input2;
  // 타입스크립트는 input1과 2가 union type이라는 것만 체크하여 + 연산자가 동작하지
  // 않는다고 판단하기에(실제로는 가능하지만), 아래와 같이 동적 타입 체킹으로 이를 회피한다.
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    // result = parseFloat(input1) + parseFloat(input2);
    // 자바스크립트 연산자란... 왜 위에는 안 되면서 아래는 되냐...
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
