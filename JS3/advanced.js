//--1--
var person = {};
var Name = prompt('Как ваше имя?') ;// Elena

function Poll(){
    return this.name = Name;
}
person.name = Poll(Name);
console.log(person.name);//Elena
//window.Poll(Name);
//console.log(window.name);//Elena, but person.name - undefined

//--2-

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
console.log(hello(5, 2));

//--4--
var obj = {
    name: 'Stranger',
    getProp: function(){
        for (var key in obj) {
            console.log(key)
        }
    }
}

Object.defineProperty(obj, 'number', {
  enumerable: false,
  value: 9
});
console.log(obj.getProp());//name, getProp, undefined

var Param;// it can be prompt();
obj.setDouble = function(Param){
    Param  = Param * 2;
    return (Param); //18
}

obj.getDouble = function(Param){
    Param  = Param / 3; 
    return (Param); //6
}

console.log(obj.setDouble(9)); //18
console.log(obj.getDouble(9)); //3
console.log(obj.getProp()); //name, getProp, setDouble, getDouble, undefined

//--5--
var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(function(a, b){
    var c = a.age - b.age;
    return c;
});
// теперь people: [vovochka, masha, vasya]
console.log(people[0].age) // 6

var Names = [];
people.forEach(function(person, people){
    Names += person.name + ' '; 
});
console.log(Names);// Вовочка Маша Вася

//--6--
var arr = ['qwerty', 
       'union', 
       'qaz', 
       '123', 
       'qwerty',
       'default'];

//let unique = [...new Set(arr)]; //ES6
function F(value, index, self) { 
    return self.indexOf(value) === index;
}

var unique = arr.filter(F);
    
console.log(unique);//["qwerty", "union", "qaz", "123", "default"]






























