//--1--
myname = "global";
function func() {
    console.log(myname);//undefined
    var myname = "local";
    console.log(myname);//local
}
func();
//--2--
//Only function can create scope
var a = 90100;
function someFunc(){
    if(false){
        var a = 1;
    } else {
        var b = 2;
    }
    console.log(b);//2
    console.log(a);//undefined
}
someFunc();
//--3--
a(); //ok
b(); //error
//b is not a function at all.
//It is variable with a result of function as value,
//so we can't invoke it anywher.
var b = function(){
    alert( 'function b');
}
//anonymous function can be сalled before declaration
function a(){
    alert( 'function a' );
}
//--4--
var i = 0;

for (; i< 10; i ++) {
    console.log(i)  //0123456789
}
//--5--
var n = 4;
function factorial(n) {
    if (n == 1){
        return n;
    }else{
        return n = n * factorial(n - 1);
    }
}

if (factorial(n) % 2 == 0){
    console.log(2 * factorial(n));//48
}
//--6--
console.time('Factorial')
console.log(factorial(n))
console.timeEnd('Factorial')

//--7--
var str = "";
function Make(){
    for (i = 0; i <= 10; i++){
        str = str + (Math.random().toString(36).substring(2, 16) +
            Math.random().toString(36).substring(2, 16)).toUpperCase()+
            Math.random().toString(36).substring(2, 16)+ '_';
    }
    return str;
}
console.log(Make());
//--8--
//union([1, 2, 3], [101, 2, 1, 10], [2, 1]) вернёт [1, 2, 3, 101, 10].
var arr1 = [1, 2, 3];
var arr2 = [101, 2, 1, 10];

function union(){
    var arr3 = [];
    arr3 = [...new Set([...arr1 ,...arr2])];
    console.log(arr3);
}
union(arr1,arr2);
//--9--
//Пример: flatten([1, [2], [3, [[[4]]]]]) вернёт [1, 2, 3, 4].

var arr = [1,[3,7], [3, [4]]];

function flatten(arr){
        var resultArr = [];
        for(var i = 0; i < arr.length; i++) {
            if(Array.isArray(arr[i])) {
                resultArr = resultArr.concat(flatten(arr[i]));
                //console.log(resultArr);
            } else {
                resultArr.push(arr[i]);
                //console.log(resultArr);
            }
        }
        return resultArr;
}
console.log(flatten(arr));
//--10--
var arr = [1, 2, 3, 3, 2, 5, 1, 8];
function unique(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        obj[str] = true;
    }
    console.log(Object.keys(obj));
    return Object.keys(obj);
}
unique(arr);

















