// 3개의 간단한 프로미스.
const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})

const recorVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recorVideoThree
]).then((messages) => {
    console.log(messages)
}) // 모든 값 배열로 들어감.

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recorVideoThree
]).then((messages) => {
    console.log(messages)
}) // 첫번째 것만 나옴.
