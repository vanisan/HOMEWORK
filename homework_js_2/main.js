/*task1*/
function sumDia(){
    let a = parseInt(prompt("Put the first num"));
    let b = parseInt(prompt("Put the second num"));
    var sum = 0;
    while(a <= b){       
        sum+=a;  
        a++;
    }
    alert(sum)
}
/*task2*/
function maxDiv() {
    let a = parseInt(prompt("Choose the first num"));
    let b = parseInt(prompt("Choose the second num"));
    let d = "";
    let lim = (a<=b)?a:b;
    let divider = 1;
    while (divider<=lim) {
        if(a%divider==0 && b%divider==0){
            final = divider + "";
        }
        divider++;
    }
    alert(final);
}
/*task3*/
function factorial(){
    let a = parseInt(prompt("Please input the various number form 1 to 10"));
    if(a <= 10){
        let res;
        let i=1;
        res = 1;
        while(i<=a){
            res=res*i;
            i++
        }
        alert(res);
    }
    else {
        alert("Too big number!!!")
    }
    
}
/*task4*/
function letCount(){
    let a = parseInt(prompt("Type any number"));
    alert(String(a).length);
}
/*task5*/
function statistic(){
    let a = 0, b = 0;
let N = prompt("введите 10 чисел: ", );
if(N){
    N.split(" ").map(function(s){
        var num = parseInt(s);
        if(num !== NaN){
            if (num > 0 && num != 0){ a++; }
            else { b++; } 
        }
    });
}
if(a>0){
    alert("Количество положительных: " + a);
}
else{
    alert("Положительных чисел нет"); 
}
if(a>0){
    alert("Количество отрицательных: " + b);
}
else {
    alert("Отрицательных чисел нет");
}
}
/*task6*/
function calcCyc(){
    while (true) {
        let a = +prompt('Введите первое число');
        let b = +prompt('Введите второе число');
        let sign = prompt('Выберете знак - + / *');
        let action = {
          '+': () => a + b,
          '-': () => a - b,
          '/': () => a / b,
          '*': () => a * b
        }[sign];
        if (action) alert(action());
       
        if (!confirm('Хотите ли вы решить еще один пример?')) break;
      }
}
/*task7*/
function arrShift(){
    let count = prompt('Введите число')
    let a = prompt('steps of shift')
    arr = count.split``;
 
for(let i = 0; i < count; i++) arr.push(arr.shift(a));
alert(arr.join``);
}
/*task8*/
function nextDay(){
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let currDay = 0;
    while (confirm(`${days[currDay]}. Wanna to see the next day?`)) {
        currDay = (currDay + 1) % days.length;
    }
}
/*task9*/

/*task10*/
/*function fn(b, d) {
    function e() {
        let a = b + Math.random() * (d + 1 - b) | 0,
            c = prompt("Your number (big/small/yes) than. (to ESC print yes) " + a + "?");
        "yes" == c ? alert(a + "YOURS NUMBER!!!") : ("bigger" == c && (b = a), "smaller" == c && (d = a), e())
    }
    e()
};
fn(1,100)*/



