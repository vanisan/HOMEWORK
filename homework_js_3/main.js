/*TASK1*/
function compare(){
    let a=parseInt(prompt('Put the first number)'));
    let b=parseInt(prompt('Put the second number'));
    if (a>b){
        alert('1');
    }
    else if(a<b){
        alert('-1');
    }
    else if(a=b){
        alert('0');
    }
}
/*TASK2*/
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
/*TASK3*/
function numsum(){
    let a=prompt('Put the first number');
    let b=prompt('Put the second number');
    let c=prompt('Put the third number');
    if (a+b+c >999){
        alert('wrong input!');
    }
    else{
        alert(a+b+c);
    }
}
/*TASK4*/
function square(){
    let a = parseInt(prompt('Put the height'));
    let b = parseInt(prompt('Put the lenght'));
    let square = a*b;
    let square2 = a*a;
    if (a!=b){
        alert(square);
    }
    else{
        alert(square2);
    }
}
/*TASK5*/
function perfNum(){
    function getPerfect(a, b) {
        let result = [];
        for (let i = a; i < b; i++) {
        sum = 0;
        for (let n = 1; n <= i/2; n++) {
            if (i % n === 0) sum += n;
        }
        if (i === sum) result.push(i);
        }
        return result;
    }
    
    console.log(getPerfect(1, 1000));
}
/*TASK6*/
function randInt(){
    let a=parseInt(prompt('1'));
    let b=parseInt(prompt('1'));
    function getRandomArbitrary(a, b) {
        alert(Math.random() * (b - a) + a);
    }
    
}
/*TASK7*/

/*TASK8*/

/*TASK9*/
function secondsFormate(){
    let a = parseInt(prompt('Enter the seconds value'));
    let hours = Math.floor(a / 60 / 60);
    let minutes = Math.floor(a / 60)-(hours*60);
    let seconds = a%60;
    let formatted = [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0')
      ].join(':');
    alert(formatted);

}
/*TASK10*/