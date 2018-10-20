//--1--
var n = 1;

while (n <= 50){
    console.log(n);
    n++;
}

//--2--
var someArr = [1, 2, 3, 4, 5];
var Str = " ";

for (var i = 0; i < someArr.length; i++){
    var n = someArr[i] + ",";
    Str = Str + n;
}
document.getElementById('target1').innerHTML = Str.substring(0, Str.length - 1);

//--3--
var arr = [2, 3, 4, 5];
var product = arr[0];
for (var i = 0; i < (arr.length - 1); i++){
    var m;
    m = arr[i + 1];
    product *= m;
}
//console.log(product);
document.getElementById('target2').innerHTML = product;
//--4--
var obj;
obj = { Минск:'Беларусь', Москва:'Россия', Киев:'Украина'}
var task = '';
for (var capital in obj) {
    if (obj.hasOwnProperty(capital)){
        document.getElementById('target3').innerHTML = task += capital + " - это " + obj[capital] + ". ";
    }
}

//--5--
/*We need five iterations to make n < 50
The last execution returns 31.25 - doesn't meet the condition,
so next loop won't be executed*/
var n=1000;
var num = 0;

while (n > 50){
    n /= 2;
    num++;
    console.log(num);
    console.log(n);
}

//--6--
var Arr;
Arr = [2, 5, 9, 15, 0, 4];
var col = " ";
for (var i =0; i < Arr.length ; i++){
    if (Arr[i] > 3 && Arr[i] < 10){
        document.getElementById('target4').innerHTML = col += Arr[i] + "<br>";
    }
}

//--7--
var month = 'October';
var year = [
    'January',
    'Fabruary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    month,
    'November',
    'December'
];
var n = 1;
var list = '';

for (var i = 0; i < year.length; i++){
    if (year[i] == month){
        document.getElementById('target5').innerHTML = list += n + ". " + "<b>" + year[i] + "</b>" + "<br>";
        n++;
    }else{
        document.getElementById('target5').innerHTML = list += n + ". " + year[i] + "<br>";
        n++;
    }
}










































