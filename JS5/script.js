//--1--

/*var str = 'aaa@bbb@ccc';
var newStr = str.replace(/@/g, '!');
console.log(str);
console.log(newStr);*/

//--2--
/*var string =  'aaa bbb ccc';

console.log(string.substring(4, 8));
console.log(string.substr(4, 3));
console.log(string.slice(4, 8));*/

//--3--
/*var date = new Date('2025-12-31');
console.log(date);
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
console.log(day + '/' + month + '/' + year);*/

//--4--
/*var str = 'js';
console.log(str.toUpperCase());*/

//--5--
/*var string = 'я учу javascript!';
console.log(string.length);//17
*/

//--6--
/*var Str = 'Вже давно відомо, що читабельний зміст буде заважати зосередитись людині';
var someStr = 'Вже давно відомо, що читабельний зміст буде заважати зосередитись людині, яка оцінює композицію сторінки. Сенс використання Lorem Ipsum полягає в тому, що цей текст має більш-менш нормальне розподілення літер.';

var m = Str.length;
var n = someStr.length;
var result = '';

if ( n > m ) {
    result = someStr.substr(0, m) + ' ...';
} else {
    result = someStr + '!';
}

document.getElementById('text').innerHTML = result;*/

//--7--
/*var str = 'я учу javascript!';
var arr = str.split(' ');
console.log(arr[0]);*/

//--8, 9, 10--
/*var arr = ['я', 'учу', 'javascript', '!'];
var str = arr.join('+');
console.log(str);
console.log(str[0].toUpperCase() + str.slice(1, str.length));

str = arr.join(' ');
console.log(str);

var arr = str.split(' ');
console.log(arr.length);

for (var i = 0; i < arr.length; i++) {
  arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
}
var s = arr.join(' ')
console.log(s);*/

//--11--
/*var string =  'var_test_text'; // 'varTestText' - expected result

var str = string.split('_');
console.log(str);

function Up(){
    
   for (var i = 0; i < str.length; i++) {
       str[0] = str[0];
       str[i] = str[i][0].toUpperCase() + str[i].slice(1)
       }
    
    str = str.join('');
    str = str[0].toLocaleLowerCase() + str.slice(1);
    
return str;
}

Up(str);
console.log(str); //varTestText
*/

//-- 12 --
/*var string =  'varTestText'; // 'var_test_text' - expected result

function Down(){
    var res = '';
    for (var i = 0; i < string.length; i++) {
       if(string.charAt(i) == string.charAt(i).toUpperCase()){
           res = res + '_' + string[i].toLowerCase();
       } else {
           res = res + string[i].toLowerCase();
       }
       
    }    
    return console.log(res); //var_test_text
}
Down(string);*/

//--13--
/*var number = '12345678';
var res = '';
var result = '';
var Expected = '';

function Separate(){
    var L = number.length;
    
    for (var i = 0; i <= L - 3; i++){
        res = number.substr(-3) + ' ';
        result = number.substring(0, number.length - 3);
        Expected = res + Expected;
        number = result;
    }
    
    return Expected.trim();
}
console.log(Separate(number));*/




























