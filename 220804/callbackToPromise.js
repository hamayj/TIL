const userLeft = true
const userWatchingCatMeme = true

function watchTutorialCallback(callback, errorCallback) {
    if (userLeft) {
        errorCallback({
            name: 'User Left',
            message: ':('
        })
    } else if (userWatchingCatMeme) {
        errorCallback({
            name : 'User Watching Cat Meme',
            message : 'WebDevSimplified < cat'
        })
    } else {
        callback('Thumbs up and Subscribe')
    }
}

watchTutorialCallback ((message) => {
    console.log('Success: ' + message)
}, (error) => {
    console.log(error.name + ' ' + error.message )
})

// promise로 바꾸기
function watchTutorialPromise() { // 1. 파라미터 지우기. 더 이상 콜백이 아냐!
    return new Promise((resolve, reject) => {
        // 2. return new Promise 선언해주고, 파라미터는 2개였지? resolvem reject
        // 이후에 콜백 함수 내용 갖다 붙여넣어주면 끝!
        if (userLeft) {
        reject ({ // 3. reject될 함수는 함수명 reject로 변경! resolve될 함수는 resolve!
            name: 'User Left',
            message: ':('
        })
        } else if (userWatchingCatMeme) {
        reject ({
            name : 'User Watching Cat Meme',
            message : 'WebDevSimplified < cat'
        })
        } else {
        resolve('Thumbs up and Subscribe')
        }
    })
}

// promise에서 resolve반환할 때는 .then으로 받고 reject처리할 때는 .catch로 연결해서 error 잡아주기.
watchTutorialPromise().then((message) => {
    console.log('Success: ' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message )
})