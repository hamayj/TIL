function closure() {
    let cnt = 0; // cnt는 cntPlus에서만 쓰이는 변수. 전역변수로 놓으면 다른 곳에서 사용될 위험 있음.
    function cntPlus(){
        cnt = cnt + 1;
    }
    function setCnt(value){
        cnt = value;
    }
    function printCnt() {
        console.log(cnt);
    }
    return {
        cntPlus,
        printCnt,
        setCnt
    } // cntPlus를 return 해줌. // 추가적인 기능이 필요할 때는 함수를 return 하는 방식으로 사용 가능.
}

const cntClosure = closure();
console.log(cntClosure); // { cntPlus: [Function: cntPlus] }
cntClosure.printCnt();
cntClosure.cntPlus();
cntClosure.printCnt();
cntClosure.setCnt(100);
cntClosure.printCnt();