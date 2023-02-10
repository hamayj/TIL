function startAsync(age) {
    return new Promise((resolve, reject) => {
        if (age > 20) resolve(`${age} success`);
        else reject(new Error(`${age} is not over 20`));
    });
}

const promise1 = startAsync(25);
promise1
    .then((value) => {
        console.log(value);
    })
    .catch((err) => {
        console.log(err);
    });


    // startAsync 함수를 호출하는 순간 new Promise()가 실행되어 비동기 작업이 시작됨.


const promise2 = startAsync(15);
promise2
    .then((v) => {
        console.log(v);
    })
    .catch((e) => {
        console.log(e);
    });