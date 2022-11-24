
for (i = 0; i<100; i++){
    console.log("우리철희사랑행 우리애기사랑행");
}


// 1) for문 while문으로 써보기.
let num = 100;
while(num--){
    console.log(`처리가최고죠+${num}`);
} // (num--)와 (--num)의 차이 : --num은 num에서 -1바로 빼고 들어가고, num--는 num출력 후 돌아올 때 -1 처리됨.

let num1 = 101; // 100, 99, 98 ... 1, 0 . 처음에 100으로 했더니 100부터 더해지지 않았었음.
let result1 =0
while(num1--){
    result1 += num1;
}
console.log(result1);

// 1번 쌤 풀이
let result = 0;
let j = 0;
while (j <= 100) {
    result += j;
    j++;
}
console.log(result);




// 2) 다음 배열의 홀수인 것의 합을 구하시오.
const a = [1, 2, 123, 123, 12323, 234, 234534];
let sum = 0;
for (i = 0; i < a.length; i++){ // 오류 떴던게 nan이 들어가서였음. 배열에 없는 값을 넣으니까.
    if (a[i]%2 !== 0){
        sum += a[i];
    }
}
console.log(sum);


