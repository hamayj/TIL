// 문제1
const name1 = 'ken';
 
function foo() {
	console.log(this.name1);  
}
 
foo(); // undefined 뜸. 왜?? window객체에는 name1이 없으니까?

// 문제2
const name = 'something box';
 
function getBoxName() {
	console.log(this.name);
}
 
const obj = {
	name: 'moon',
  	box: getBoxName,
};
 
getBoxName(); // ?
obj.box(); // moon

// obj.box의 형식으로 dot notation방식으로 실행시킬 경우 obj가 this로 바인딩된다.


// 문제 3
var height = 180;
 
function bar() {
	console.log(this.height);
}
 
function foo() {
	var height = 150;
	bar();
}
console.log("문제3:")
foo(); // 150출력이라고 생각했으나 undefined 출력됨.


// 문제 4
var height = 150;
var person = {
	height: 180,
	foo: function foo() {
		console.log(this.height);
	}
};

person.foo(); // 180 person안에서 foo부르니까 180나오네.


// 문제 5

function foo() {
	console.log(this.height);
}
 
var height = 50;
var tony = {
	height: 170,
	foo: foo
};
// 문제2랑 같은 방식. box:getBoxName

var elon = {
	height: 200,
	foo: function () {
		console.log(this.height);
	}
};
 
tony.foo();  //undefined...? 엥 170나옴.
elon.foo();  //200


// 문제 6
var height = 100;
var tony = {
	height: 170,
	foo: function bar() {
		console.log(this.height);
	}
};
var elon = {
	height: 200,
	foo: tony.foo
};
 
var foo = tony.foo;
 
console.log("문제6:")
tony.foo();  // Q1. 170
elon.foo();  // Q2. 170 땡..
foo();      // Q3. 170 땡..

