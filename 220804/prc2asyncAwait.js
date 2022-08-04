function delayp(sec){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Date().toISOString());
        }, sec * 1000);
    });
}

// 함수 앞에 async를 붙이면 함수 안에서 await을 쓸 수 있게 됨
//

function myFunc(){
    return 'func';
}

// async는 그 함수를 promise를 return하는 함수로 만들어줌.
async function myAsync(){
        const result = await delayp(3).then((time) => {
            return 'x' // return 값이 result로 들어감. 
            // 일반 함수 앞에 await을 넣어도 실행됨.
        });
    // await delayp(3).then((time)=>{});
        console.log(result);
    // await 하면서 기다리고,, 그 다음에 찍힐 수 있게..
    
    // await은 promise가 resolve돼서 결과값이 넘어올 때까지 기다리는 애.
    return 'async'; // resolve로 넘기고 싶은 값은 return
    // reject을 하고 싶으면 error를 throw해야 함.

}

// console.log(myFunc());
// console.log(myAsync());
// // console 찍어보니 promise로 나타남. -> then을 쓸 수 있단 소리.
// console.log(delayp(3));

// result는 return값.
myAsync().then((result) => {
    console.log(result);
});



// 결론!
// 1. async의 return이 resolve값!
// 2. await 붙인 함수 실행 기다림!