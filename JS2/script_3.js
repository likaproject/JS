//--1--
var one = "1" + 2 + 3; // '123'
var two = 4 + false + "5" + 6; // '456'
var three = 7 + true + 6 + "8"; // '148'
var four = false + true; // 1

//--2--
var t = 0;
var h = 8;

t && h && console.log(9); // error?

//--3--
var pr = 9;
var g = 0;

(g || pr) && console.log(9); // 9

//--4--
var i = '1';
var j = 8;
var m = 7;

(m - j) == j;
(m - j) === j;

(m - 6) && j && console.log('Hi'); // hi

//--5--
var obj = {
    h: 0,
    i: 'hello'
}

var phrase = obj.i;
delete obj.i;

console.log(phrase); // hello

//--6--
var obj = {
    h: [1,2,3],
    i: {
        y: 9
    }
}

var num = obj.i.y; // 9

obj.i.y = obj.i.y + 1; // 10

console.log(num, obj.i.y); // 9, 10

//--7--
var obj = {
    h: [1,2,3],
    i: {
        y: 9
    }
}

var arr = obj.h;

obj.h[1] = 9;

console.log(arr[1], obj.h[1]); // 9, 9