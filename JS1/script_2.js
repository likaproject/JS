//--1--
var r = '9' + 0;// 90
console.log(r);
var r = 9 + '0';// 90
console.log(r);
var r = 4 + 9;// 13
console.log(r);
var r = null + 7;//7
console.log(r);
var r = '6' + null; //6null
console.log(r);
var r = '6' + [];//6
console.log(r);
var r = '6' + null;//6null
console.log(r);

//--2--
//Будет ли верным выражение:
console.log(2/3 + 1 + 1/3 == 2); //false
//Опишите почему да или нет?
/*Two divided by three and 
one divided by three
have an accuracy of calculation.
Js exsecute actions with priority of devide*/

//--3--
var r = 6 && 0 && 7;//false
console.log(r);
var r = -9 && -8; //-8
console.log(r);
var r = 6 && 0 && 7;//false
console.log(r);
var r = "string" && 0;//false
console.log(r);
var r = [] && {} && 7;//7
console.log(r);
var r = [] || 7;//[]
console.log(r);
var r = {} || 0;//{}
console.log(r);
var r = false || true;//True
console.log(r);
var r = "2" > "3";//false
console.log(r);
var r = "ab" <= "fg";//true
console.log(r);
var r = "2k" <= "8l";//true
console.log(r);
var r = "2" != 2;//true
console.log(r);
var r = "2" !== 2;//true
console.log(r);
//var r = ++2 + 2;//Invalid left-hand side expression in prefix operation

//var r = ++2 + 2--;

//var r = 1++ - 2--;