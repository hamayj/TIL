const promise1 = new Promise((resolve, reject) => {
    resolve();
});

promise1
    .then(()=> {
        console.log("then!"); 
        // 이 Promise 에서는 바로 resolve가 호출되었기 때문에 성공으로 간주하여 then에 있는 동작만 실행됨.
    })
    .catch(()=> {
        console.log("catch!");
    });


const promise2 = new Promise ((resolve, reject) => {
    reject();
});

promise2
    .then(()=> {
        console.log("then.");
    })
    .catch(() => {
        console.log("catch..");
    });

    