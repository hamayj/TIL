/*
주석 (comment) : 자바스크립트 파서가 읽지 않는 부분

숫자가 10보다 크면 '10보다 커요'라고 출력하고
숫자가 10이면 '10이예요!'라고 출력
10보다 같거나 작으면 '꽤 작은 숫자입니다'라고 출력
*/

let value = 'value';
if(value.length = 5) { // 문자열에는 length라는 메소드가 있음.
    console.log("길이가 5입니다.")
} else if(value.length === 10 ){
    console.log("10이예요")
} else {
    console.log("꽤 작은 숫자입니다")
}


// 삼항연산자
value = "hello world";
const result = (value.length > 10) ? '10보다 길어요':'10보다 짧아요';
console.log(result);

// 미션
const numbers = [80,70,44,55];
const newNumber = 33;

if(newNumber in numbers){ // if(-1) ->true, 0 빼고는 모두 true. 
    console.log("이미 있는 숫자입니다.");
} else {
    console.log("숫자를 추가했습니다. : " + newNumber);
    numbers.unshift(newNumber); // 배열 맨 앞에 추가하는 메서드 unshift()
}

console.log(numbers);

if(numbers.includes(newNumber)){ // includes 메서드 사용해서 
    console.log("이미 있는 숫자입니다.");
} else {
    numbers.unshift(newNumber);
    console.log("숫자를 추가했습니다. : " + numbers);
}