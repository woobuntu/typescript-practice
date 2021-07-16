function add(
  n1: number,
  n2: number,
  showResult: boolean,
  phrase: string
): number {
  const sum = n1 + n2;
  showResult && console.log(phrase + sum);
  return sum;
}

const number1 = 5;
// const로 선언하였기에 hover해서 보면 type이 단순히 number가 아닌 5임을 알 수 있음
let number2 = 2.8;
// 반면 number2는 let으로 선언하여 type이 number임
// 위와 같이 변수를 선언함과 동시에 값을 할당하는 경우 type을 명시하는 것은 바람직하지 않다.
// 다만, 값의 할당 없이 변수를 선언할 경우에는 type을 명시해주는 것이 바람직하다.
// (명시해주지 않으면 default로 any 타입으로 지정된다)
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
