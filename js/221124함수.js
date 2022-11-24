// 함수 선언문. (가장 많이 쓰임.)
function aaa(name){
    return name + "world"
} 

console.log(aaa("하마"));

// 함수 표현식
const bbb = function(name) {
    return name + "world";
}

// 화살표 함수. (편리) cf. 람다 표현식.
const ccc = (name) => {
    return name + "world";
}

// 미션1) 두 개의 숫자를 파라미터로 받아서 그 합을 반환하는 함수.
function add(n, m) {
    // 파라미터 개수를 체크하는 방법
    if(arguments.length !== 2){
        return "인자를 두개 넣어주세요."; // 반환할 때 return을 꼭 써주자.
    } else {
        return n+m;
    }
}
console.log(add(1,2));
console.log(add(1));

// 미션2) 파라미터로 값과 배열을 받고, 특정값이 숫자인지 확인해서 맞다면 배열에 추가해서 반환하는 함수.
// 변수 타입 확인. typeof()
function foo(num1, arr1){
    if(typeof(num1) == 'number'){ // Number로 썼다가 number로 썼다가 'number'로 고침.
        arr1.push(num1);
        return arr1;
    } else {
        return arr1;
    }
} 

// 굳이 이렇게 쓰지 않고 return을 한번만 해주고 if 한 번만 써주면 됨.
function foo1(num, arr){
    if(typeof(num) == 'number') {
        arr.push(num);
    } 
    return arr; // else 굳이 안써도 됨.
}

console.log(foo(22,[12]));
console.log(foo("22", [12]));

// 미션3) 객체에 들어있는 커피 종류를 배열로 묶어서 반환하는 함수.
const coffees = [{
    "store" : "서울시 종로구",
    "kinds" : [
        {
            "name" : "아메리카노",
            "price" : 2000,
            "productCount" : 100
        },
        {
            "name" : "카페라떼",
            "price" : 3000,
            "productCount" : 80
        },
        {
            "name" : "카페모카",
            "price" : 3500,
            "productCount" : 60
        }
    ]
}];

// function getCoffeeName(coffees){
//     let names = [];
//     // console.log(coffees[0].kinds[1].name);
//     for(i = 0; i<3; i++) { // 반복문 어떻게 멈춰야 될지 모르겠네. 문제에서 3개라고 지정해줘서 풀 수 있었음...
//         names.push(coffees[0].kinds[i].name);
//     }  
//     return(names);
// }

function getNames(product){
    const result = [];
    for(let i = 0; i < product.length; i++) { // 우선 length만큼 한 번 돌아
        let {kinds} = product[i]; // 그냥 product만 쓰면 안됨.
        for (let j = 0; j < kinds.length; j++) {
            let {name} = kinds[j]; 
            // kinds 내부에 name이 많으니까 for문으로 한 번 돌려줘서 하나씩 넣은거임.
            result.push(name);
        }        
    }
    return result;
}

console.log(`미션3 : ${getNames(coffees)}`);

// 배열의 참조
function arr1(arr, num){
    arr.push(num);
    return arr;
}

const arr = [123];
arr1(arr, 456);
console.log(arr);