// 기존
// function startAsync(age) {
//   return new Promise((resolve, reject) => {
//     if (age > 20) resolve(`${age} success`);
//     else reject(new Error(`${age} is not over 20`));
//   });
// }


// async로 바꿈
async function startAsync(age) { // 함수 선언시 async를 붙여줌. return new Promise(resolve, reject) 부분 날아감.
    if (age > 20) return `${age} success`; // resolve 지우고 return 붙여줌.
    else throw new Error (`${age} is not over 20`); // reject 지우고 throw 붙여주기. (throw new Error(던질 내용))
}

const promise1 = startAsync(25);
promise1
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });

const promise2 = startAsync(15);
promise2
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });

