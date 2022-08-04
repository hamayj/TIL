async function myAsyncFun(){
    return 'done!';
}

function myPromiseFun(){
    return new Promise((resolve, reject) => {
        resolve('done!');
    });
}
const result = myAsyncFun();
console.log(result);

const result2 = myPromiseFun();
console.log(result2);

// 결론 : async에서의 return은 promise에서의 resolve
