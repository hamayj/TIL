function wait(sec){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('done!');
            reject('wait Error!')
        }, sec * 1000 );    
    })
}


async function myAsyncFun() {
    console.log(new Date());
    // wait(3); 이렇게 쓰면 바로 return됨. 
    try{
        await wait(3);
    // reject되면 기다리던 것이 throw 됨..(?) 무용 지물
    // throw 됐으니까 잡는 방법은 try catch
    }   catch(e) { 
        console.error(e);
    }
    console.log(new Date());
}

const result = myAsyncFun();

// async 함수 내부에서만 await을 쓸 수 있다. 
// await은 promise를 기다릴 수 있는 애.