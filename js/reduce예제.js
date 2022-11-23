// reduce 예제 1) 배열의 모든 값 더하기

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum1 = numbers.redece((accmulator, currentNumber) => {
    accmulator + currentNumber
}) 

function solution(array) {
    const counts = array.redece((a,c) => (a[c] ? { ...a, [c]: a[c] + 1}))
}