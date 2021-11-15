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

