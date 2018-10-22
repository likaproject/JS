//--1--
/*var person = {};
var Name = prompt('Как ваше имя?') ;// Elena

function Poll(){
    return this.name = Name;
}
person.name = Poll(Name);
console.log(person.name);//Elena
//window.Poll(Name);
//console.log(window.name);//Elena, but person.name - undefined

//--2-
/*
sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10

function sumTo(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log( sumTo(5) );
//--3--
//var a;
//var b;
function hello(a, b){
	var result;
	if (a > b){
		return result = b;
	}else if(b > a){
		return result = a;
	}else{
		return result = 'a = b';
	}
}
console.log(hello(8, 8));
console.log(hello(3, 5));
console.log(hello(5, 2));*/

//--4--
var obj = {};
Object.defineProperty(obj, 'number', {
  enumerable: false,//if you set it to 'true', you'll see this property (line 59)
  value: 9
});
obj.name = 'Stranger';

function getProp(obj){
	for (key in obj) {
		console.log(key);
	}
}
console.log(getProp(obj));// only value 'name' is visible




















