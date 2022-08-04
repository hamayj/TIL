async function myAsyncFun(){
    throw 'myAsyncError!';
    return 'done!';
} // promise에서의 reject처럼 async에서도 throw를 발생시키고 싶다면
 // 일반 함수처럼 throw 처리를 해주자. 


 // throw를 잡는 방법? ->

function myPromiseFun(){
    return new Promise((resolve, reject) => {
        reject('myError!');
    });
} 
const result = myAsyncFun().catch( e => {
    console.error(e);
});
// 에러 처리는 .catch로 잡자.
const result2 = myPromiseFun().catch(e => {
    console.error(e);
});


// uncaught는 사라졌음.
