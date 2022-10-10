function foo() {
	console.log(this.height);
}


var height = 50;

foo(); // undefined가 뜸. 왜 그런거지?? 50 떠야되는거 아냐? 전역 변수 불러오는게 아닌가?


var tony = {
	height: 170,
	foo: foo
};
var elon = {
	height: 200,
	foo: function () {
		console.log(this.height);
	}
};

tony.foo(); // 50이라 생각했으나 170 출력
elon.foo(); // 200생각 200출력.

// console.log보기 위해 node this.js입력하니 콘솔 출력됨.