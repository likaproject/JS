//--1--
var person = {};
var Name = prompt('Как ваше имя?') ;// Elena

function Poll(){
    return this.name = Name;
}
person.name = Poll(Name);
//console.log(person.name);//Elena
window.Poll(Name);
console.log(window.name);//Elena, but person.name - undefined

//--2--

