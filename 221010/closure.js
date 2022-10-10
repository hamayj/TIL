var d = 'X';

function outer(){
    var a = 1;
    var b ='B'
    function inner(){
        var a = 2;
        console.log(d);    
    }
    inner();
};

var someFun = outer();
someFun; // someFun();로 치면 type 에러 나옴. 
// TypeError: someFun is not a function