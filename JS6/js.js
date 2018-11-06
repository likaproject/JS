var animal = { };
var rabbit = { };

rabbit.__proto__ = animal;

animal.eat = function() {
    this.full = true;
};

rabbit.eat();
console.log(rabbit.full === true);//true

//--2--
/*var animal = { jumps: null };
var rabbit = { jumps: true };

rabbit.__proto__ = animal;

//alert( rabbit.jumps ); // true (1)

delete rabbit.jumps;
//alert( rabbit.jumps ); // null (2)

delete animal.jumps;
//alert( rabbit.jumps);  // undefined (3)

//--3--
/*Присвойте объектам ссылки proto так, 
чтобы любой поиск чего-либо шёл по алгоритму 
pockets -> bed -> table -> head. То есть pockets.pen == 3,
bed.glasses == 1, но table.money == undefined.*/

/*var head = {
  glasses: 1
};

var table = {
  pen: 3
};

var bed = {
  sheet: 1,
  pillow: 2
};

var pockets = {
  money: 2000
};

head.__proto__= pockets;
table.__proto__= head;
bed.__proto__= table;

/*После этого ответьте на вопрос, 
как быстрее искать glasses: 
обращением к pockets.glasses или head.glasses? 
Попробуйте протестировать. //head.glasses is fasteer*/

//--4--
/*function Rabbit() { };
Rabbit.prototype = { eats: true };

var rabbit = new Rabbit();

Rabbit.prototype = {};

alert(rabbit.eats);//true
//А если код будет такой? (заменена одна строка):

function Rabbit(name) { }
Rabbit.prototype = { eats: true };

var rabbit = new Rabbit();

Rabbit.prototype.eats = false; // (*) 

alert(rabbit.eats);//false
//А такой? (заменена одна строка)

function Rabbit(name) { };
Rabbit.prototype = { eats: true };

var rabbit = new Rabbit();

//delete Rabbit.prototype.eats; // (*)
delete rabbit.eats//true
alert(rabbit.eats);//undefined

//--5--
function Rabbit() { };
Rabbit.prototype.test = function() { alert(this); }

var rabbit = new Rabbit();

console.log(rabbit.test());//undefined
rabbit.test();//object Object
rabbit.__proto__.test();//object Object
Rabbit.prototype.test();//object Object
Object.getPrototypeOf(rabbit).test();//object Object
*/
//--6--

function Hamster() {  };

Hamster.prototype.food = [ ]; // пустой "живот"

Hamster.prototype.found = function(something) {//found is a method of prototype
  this.food.push(something);
};

// Создаём двух хомяков и кормим первого
speedy = new Hamster();
speedy.food = [];//reassign method food for speedy,so we'll feed only! speedy;
lazy = new Hamster();

//there is no such method in oblect speedy, 
//so proto chain goes to Hamster.prototype and executes it's method found
speedy.found("яблоко");
console.log(Hamster.prototype.food.length);//1 (0 - because of str112)
speedy.found("орех");
console.log(Hamster.prototype.food.length);//2(0 - because of str112)

console.log(speedy.food.length);//2
console.log(lazy.food.length);//0 - because of str112;

//alert(speedy.food.length); // 2
//alert(lazy.food.length);   // 2 
//lazy has no method found, chain of proto goes to
//Hamster.prototype.found and executes it.
//when prototype is changed -> lazy get the same food as speedy ))

console.log(speedy.found === Hamster.prototype.found);
console.log(lazy.found === Hamster.prototype.found);

//--7--
/*class Person {
  constructor(name, sourname, age){
      //personal data
      this.name = name;
      this.sourname = sourname;
      this.age = age;
      //every instance will have the same features
      this.legs = 2;
      this.hands = 2;
      this.canWalk = true;
  }       
}

let person1 = new Person('Nick', 'Bush', 25);
/*
console.log(person1.legs);//2
console.log(person1.hands);//2
console.log(person1.canWalk);//true
console.log(person1.name);//Nick
console.log(person1.sourname);//Bush
console.log(person1.age);//25
*/

/*class Programmer extends Person {
    constructor(name, sourname, age, mainSkill, sallary, enLevel) {
        super(name, sourname, age);
        this.mainSkill = mainSkill;
        this.sallary = sallary;
        this.enLevel = enLevel;
    }   
}

let person2 = new Programmer('Petya', 'Petrov', 21, 'js', 2000, 'Advansed');
let person3 = new Programmer('Vasya', 'Sidorov', 30, 'java', 1700, 'B2');
let person4 = new Programmer('Vova', 'Ivanov', 28, 'js', 300, 'Так собі...');
//common features for all persons extended from class Person 
console.log(person2.legs);//2
console.log(person2.hands);//2
console.log(person2.canWalk);//true
//defined in Person
console.log(person2.name);//Petya
console.log(person3.sourname);//Sidorov
console.log(person4.age);//28
//defined in Programmer
console.log(person1.mainSkill);//undefined
console.log(person3.sallary);//1700
console.log(person4.enLevel);//Так собі...
*/
//--8--
function Adder(){
	
    this.startingValue = 1;
	
    this.addInput = function(){
        this.startingValue += +prompt('Введите число');
    }
    
    this.showValue = function(){
        return this.startingValue;
    }
}
var adder = new Adder(); // начальное значение startingValue === 1;
adder.addInput(); // вводим, например, 1
adder.addInput(); //вводим 2
//1 + 1 + 2 = 4
console.log(adder.showValue()); // выведет текущее значение - 4;*/

//--9--

/*function Sum(a){
    
     var A = a;
    
    function C(b){
        A = A + b; 
        return C;
    }
    C.toString = function(){
        return A;
    }
    return C;
}

console.log(Sum(3)(2)(1));//6
console.log(Sum(-3)(-2)(10));//5*/

//--10--
/*let str = 'Lorem Ipsum - это текст-"рыба" Lorem Ipsum - это текст-"рыба" ';

let container = document.getElementById('main');
let runningStr = '';

function run(){
   for(var i = 0; i < str.length + 1; i++){
       if(i <= str.length){
            str = str[str.length - 1] + str.substring(str.length - 1, 0);
            container.innerHTML = str;
            /*container.style.color = 'rgb('+ Math.floor(Math.random() * 255) + 1 
                                    + ',' + Math.floor(Math.random() * 255) + 1 
                                    + ',' + Math.floor(Math.random() * 255) + 1 
                                    + ')';
        } 
   }  
}

setInterval('run()', 200);*/


















