// catch로  연결됩니다.
const throwError = new Promise(( resolve, reject ) => {
    throw Error("error");
});
throwError
    .then(() => console.log("throwError success"))
    .catch(() => console.log("throwError catched"));


// 아무런 영향이 없습니다.
const ret = new Promise((resolve, reject) => {
    return "returned";
});

ret
    .then(() => console.log("ret success"))
    .catch(() => console.log("ret catched"));


// resolve만 됩니다.
const several1 = new Promise((resolve, reject) => {
    resolve();
    reject();
});



