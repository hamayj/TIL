let p = new Promise((resolve, reject) => {
    let a = 1 + 3
    if ( a == 2 ) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

p.then((message) => {
    console.log('This is in the then ' + message )
}).catch((message) => {
    console.log('This is in the catch ' + message)
})

// then은 resolve에 해당.
// catch는 reject에 해당.
// 에러를 잡을 수 있으려면 .catch 버전을 쓸 수 있어야 함.