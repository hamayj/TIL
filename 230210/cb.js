function b() {
    console.log("b called!");
} // 함수 b()정의

function a(another) { 
    console.log("a started!");
    another();
    console.log("a ended!");
} // another는 단순히 파라미터임. another말고 c라고 적어도 되고, 그냥 아무거나 적어도 됨.

/**
 * 식별자(변수 이름) 바로 뒤에 괄호() 가 등장하게 되면 이건 함수라 가정하고 일단 호출해보자! 하고 시도를 합니다. 
 * 만약 another 가 함수가 아니라면 호출을 시도할 때 TypeError: another is not a function 에러가 나게 되겠지요.
하여튼 함수 a의 내용 또한 a가 실제로 호출될 때 실행될 텐데, 그 때는 이전과 마찬가지로 2 와 3 사이 입니다. 
a를 호출할 때 인자로 우리는 b 를 전달했고, b 는 another 이 되어 a started! 와 a ended! 사이에서 호출됩니다. 
이윽고 console.log("b called!") 도 호출이 됩니다. 
*/

console.log(1); // 1
console.log(2); // 2
a(b); // a started! b called! a ended! // 콜백 함수 전달
console.log(3); // 3 
console.log(4); // 4