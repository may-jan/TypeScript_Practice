// unknown : 사용자가 무엇을 입력하는지 알 수 없는 경우 타입, 어떤 값이든 저장 가능
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

// unknown은 현재 저장된 타입을 확인해야 할당이 가능하다 (타입 체크가 필요!)
if (typeof userInput === "string") {
  userName = userInput;
}
