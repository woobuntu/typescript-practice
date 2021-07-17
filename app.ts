let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
// any 타입과 마찬가지로 어떤 값이든 할당할 수 있다.
if (typeof userInput === "string") {
  // 하지만 any와는 다르게 이와 같은 동적 체크 없이는 바로 할당할 수 없다.
  userName = userInput;
}
// 이처럼 unknown은 any보다는 restrictive하기 때문에 any보다 유용하다
// 물론 이 경우에도 userInput을 string과 number의 union으로 지정하는 게 더 나아 보인다.

function generateError(message: string, code: number): never {
  throw {
    message,
    errorCode: code,
  };

  // error 반환은 스크립트 자체를 블락하기 때문에 반환 타입을 never로 명시해주는 것이 좋다.
  // 초기 버전의 타입스크립트에서는 never라는 타입이 없었기에 명시해주지 않으면 void로 타입 추론이 되기 때문
  // while (true) {} 이와 같은 무한 반복문도 never의 예시 중 하나이다.
}

generateError("An error occurred!", 500);
