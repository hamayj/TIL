function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`)
        // ``을 적어주면 좀 더 편하게 es2016 쓸 수 있음.
        if (location === 'Google') {
            resolve('Google says hi')
        } else {
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    })
}

// makeRequest('Facebook').then(response => {
//     console.log('Response Received')
//     return processRequest(response)
//     // 이거 리턴 꼭 해줘야 되는거얌?
// }).then(processedResponse => {
//     console.log(processedResponse)
// }).catch(err => {
//     console.log(err)
// })

// .then, .catch로 넣어주기 좀 그러니까 async, await로 처리해보자.
async function doWork() {
    try { // try 안에 성공할 때 들어갈 부분.
        const response = await makeRequest('Facebook') //Google, 혹은 아무거나 넣어보자!
    // resolve의 promise 부분.
    console.log('Response Received')
    const processedResponse = await processRequest(response)
    console.log(processedResponse)
    } catch (err) {
        console.log(err)
    }
    }

// promise와 동일한 비동기 기능을 수행!
doWork()


// async 함수 사용법.
// 1. 함수 정의 시작을 async로 감싸기
// 2. 안에 await으로 다른 함수를 감싸주고
// 3. try, catch로 resolve, reject 나누기 끝.