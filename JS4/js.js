//Write a function "getLength" that will count a length of any given array
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 12];

function getLength(){
	return arr1.length;
}
console.log(getLength(arr1));

//Write a function "getArgsLength" that will get any number of arguments, and return a length of all arguments
var arr2 = [5, 9, 3];

function getArgsLength(){
	return arguments.length;
}
console.log(getArgsLength(arr1, arr2, 5));

/*Write a function "removeEmptyElements" that will delete all empty elements in array given to it, 
also check inside of it that the argument is an array*/
var arr = [0, 1, null, 2, "", 3, undefined, 3,,,,,, 4,, 4,, 5,, 6,,,,],
	cleanArr = [];
function removeEmptyElements(arr){
	for(let elem in arr){
		elem && cleanArr.push(elem);
	}
	return cleanArr;
}

console.log(removeEmptyElements(arr));

//Write a function "sortReverse" that will sort an array elements in revers order

function sortReverse(arr1){
	return arr1.reverse();
}
console.log(sortReverse(arr1));

/*Create a function that will get a date as an argument (also check if it's a date), 
and return an object: { day: your_value, month: your_value, year: your_value }*/
var date = new Date();
var dateReadable = date.toDateString();

function GetDate(date){
	if(Object.prototype.toString.call(date) === '[object Date]'){
		dateObj = {
			day: date.getDate(), 
			month: date.getMonth() + 1, 
			year: date.getFullYear() 
		}
	}
	return dateObj;
}
console.log(GetDate(date));

/*Write a function, that counts a number of object properties,
 and alerts the result number after 1 second 
(also should works for arrays)*/
var Person = {
	name: 'Dan',
	age: 25,
	height: 180
};

function countNum(Person){
	let l = Object.keys(Person).length;
    setTimeout(function() {
        alert('Number of properties: ' + l);
    }, 1000)}
	
countNum(Person);
//countNum(arr1);

/*Write a function that every 2 seconds will ask user for his name, 
and will stops only if he will enter your name,
 else will ask for a name again*/
 
var myName = 'Elena'; 

function getMyName(){
	var name = prompt('Введите имя тут');
	if(name === myName){
		alert("ok");
	}else{
		setTimeout(function() {
		  getMyName();
	}, 2000);
};
}
getMyName();

























