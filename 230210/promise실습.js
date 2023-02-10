// setTimeout Promise 버전으로 만들기

function setTimeoutPromise(delay) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
}

console.log("setTimeoutPromise가 시작됩니다.");

const promise = setTimeoutPromise(1000);


promise.then(() => {
    console.log(" 끝 ! ");
});