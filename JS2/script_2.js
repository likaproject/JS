//--1--
var number = 0;
var content = " ";
for (var i = 0; i <= 15; i++){
    if (number % 2 == 0){
        document.getElementById('target11').innerHTML = content += '<ul><li>"' + number + ' is even"</li></ul>';
        number++
    } else {
        document.getElementById('target11').innerHTML = content += '<ul><li>"' + number + ' is odd"</li></ul>';
        number++
    }
}

//--2--
var multiples3 = 'Fizz';
var multiples5 = 'Buzz';
var multiples35 = 'FizzBuzz';
var content = " ";
var i = 1;
while (i <= 100){
    if (i % 3 == 0 && i % 5 == 0) {
         content += multiples35 + " ,";
         i++;
    }  else if (i % 3 === 0){
        content += multiples3 + " ,";
        i++;
    } else if (i % 5 === 0){
        content += multiples5 + " ,";
        i++;
    } else {
        content += i + " ,";
        i++;
    }
}
document.getElementById('target1').innerHTML = content.substring(0, content.length - 1);

//--3--
var x = 24;//prompt('Number 1');
var y = 90;//prompt('Number 2');
var dx, dy;
var resultX = " ";
var resultY = " ";
var gcd;
//lets find divisors of x
function CommonDeviderX (x) {
    for (var i = 1; i <= x; i++) {
        dx = x % i;
        if (dx == 0) {
            resultX += +i + ',';
            //console.log(resultX);
        }
    };
    return resultX;
}
CommonDeviderX(x);
//lets find divisors of y
function CommonDeviderY (y) {
    for (var i = 1; i <= y; i++){
        dy = y % i;
        if (dy == 0){
            resultY += +i + ',';
            //console.log(resultY);
        }
    };
    return resultY;
}
CommonDeviderY(y);

while (x != y)
{
    if (x > y)
    {
        x = x - y;
    }
    else
    {
        y = y - x;
    }
}
gcd = x;
console.log(gcd);
document.getElementById('target2').innerHTML =
    'X: ' + resultX.substring(0, resultX.length - 1) + '<br>' +
    'Y: ' + resultY.substring(0, resultY.length - 1) + '<br>' +
    'GCD: ' + x;

//--4--
var S = 0;
for (var x = 0; x < 1000; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
        S += x;
    }
}
document.getElementById('target3').innerHTML = S;

//--5--
var x = 10;
var str = '';
for(var i = 0; i <= 80; i++){
    if (x % 3 == 0 || x % 5 == 0){
        console.log(x);
        str = str + x + ",";
    }
    x++;
};
document.getElementById('target51').innerHTML = str.substring(0, str.length - 1);
//--6--
var x = 70;
for(var i = 70; i >=11; i--){
    if (x == 70){
        console.log(x);//starting with 70(it is even number)
    } else if (x % 2 !== 0){
        console.log(x);//all odd numbers till x = 11
    }
    x--;
}

//--7--
var x = 78;
for(var i = 78; i >=13; i--){
    if (x % 2 == 0 && x % 3 == 0){
        console.log(x);//all even numbers that divide to 2 and 3 till x = 13
    }
    x--;
}


























