
const data = [['철수', 170, 20], ['영희', 165, 24]];
console.log(data[0][0]);

// 배열과 객체의 차이 : 키- 밸류로 구분해줄 수 있다.
// 객체 데이터가 많은 경우 배열 안에 객체를 넣는 방법으로도 해줄 수 있다고 함.
const obj = [
    {
        "name" : "철수", // key 값에 "" 처리 해줘도 되고, 안해줘도 됨. 보통은 해줌.
        "height" : 170,
        "age" : 30
    },
    {
        "name": ["hama","하마"], // 값에 배열을 줄 수도 있음. 모든건 자유롭게 가능하구만..
        height : 169,
        age : 150
    }
]
console.log(obj[1].age); // 배열에서 객체 접근하기.
console.log(obj[1].name[1]); // 하마


// 미션 1) 동일하게 타이핑하기 : coffees 배열 선언하고, 배열 값을 객체로 선언하고, 그 안의 키-밸류 중 일부가 객체로 들어간다.
const coffees = [{
    "store" : "서울시 종로구",
    "kinds" : [
        {
            "name": "아메리카노",
            "price" : 2000,
            "productCount" : 100
        },
        {
            "name": "카페모카",
            "price" : 3000,
            "productCount" : 80
        },
        {
            "name": "카페라떼",
            "price" : 3500,
            "productCount" : 120
        }
    ]
}];

// 2) '카페모카'의 가격을 다른 값으로 바꾸기. 
coffees[0].kinds[1].price = 4000; // dot notation 방법.
// 다른 방법으로 값 바꿔보기
coffees[0].kinds[1]["price"] = 4100;


// 3) '그린티라떼'라는 상품을 추가하기.
coffees[0].kinds[3] = {
    "name" : "그린티라떼",
    "price" : 4500,
    "productCount" : 90
}

// cf) push메소드 써서 추가해보기.
const smoothie = {
    "name" : "smoothie",
    "price" : 6000,
    "productCount" : 30
};

coffees[0].kinds.push(smoothie); 

console.log(coffees[0].kinds);


