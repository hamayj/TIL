var someone = {
    name : 'HAMA',
    whoAmI : function() {
        console.log(this);
    }
};

someone.whoAmI(); // 자기 자신이 나왔음.
// whoAMI를 호출한 것은 someone임.


var myWhoAmI = someone.whoAmI; // 다른 호출방식으로 불러보자.
myWhoAmI(); // window가 나옴.
// myWhoAMI는 global에 있고 global은 window객체.
// 브라우저가 실행한 셈이 된 것.

// 호춯하는 방법에 따라 달라지는 this
// 호출을 누가 했냐? 직접 호출하는 코드를 살펴봐야 함.

// 밑 코드의 의미는 someone을 무조건 this로 쓰겠다는 의미. (bind로 묶어주겠다.)
var bindedWhoAmI = myWhoAmI.bind(someone);

var btn = document.getElementById("btn");
// btn.addEventListener('click', someone.whoAmI); // 클릭시 호출할 함수 입력.
bindedWhoAmI();
btn.addEventListener('click', bindedWhoAmI); // bind 되는 것 확인함. this가 someone으로 나옴.
btn.addEventListener('click', myWhoAmI);
// 함수를 실행한 것은 버튼이 됨.

// 호출한 놈(객체) === this


// this를 고정하는 것은 bind

