"use strict";

/*TASK1*/
function compare() {
  var a = parseInt(prompt('Put the first number)'));
  var b = parseInt(prompt('Put the second number'));

  if (a > b) {
    alert('1');
  } else if (a < b) {
    alert('-1');
  } else if (a = b) {
    alert('0');
  }
}
/*TASK2*/


function factorial() {
  var a = parseInt(prompt("Please input the various number form 1 to 10"));

  if (a <= 10) {
    var res;
    var i = 1;
    res = 1;

    while (i <= a) {
      res = res * i;
      i++;
    }

    alert(res);
  } else {
    alert("Too big number!!!");
  }
}
/*TASK3*/


function numsum() {
  var a = prompt('Put the first number');
  var b = prompt('Put the second number');
  var c = prompt('Put the third number');

  if (a + b + c > 999) {
    alert('wrong input!');
  } else {
    alert(a + b + c);
  }
}
/*TASK4*/


function square() {
  var a = parseInt(prompt('Put the height'));
  var b = parseInt(prompt('Put the lenght'));
  var square = a * b;
  var square2 = a * a;

  if (a != b) {
    alert(square);
  } else {
    alert(square2);
  }
}
/*TASK5*/


function perfNum() {
  function getPerfect(a, b) {
    var result = [];

    for (var i = a; i < b; i++) {
      sum = 0;

      for (var n = 1; n <= i / 2; n++) {
        if (i % n === 0) sum += n;
      }

      if (i === sum) result.push(i);
    }

    return result;
  }

  console.log(getPerfect(1, 1000));
}
/*TASK6*/


function randInt() {
  var a = parseInt(prompt('1'));
  var b = parseInt(prompt('1'));

  function getRandomArbitrary(a, b) {
    alert(Math.random() * (b - a) + a);
  }
}
/*TASK7*/

/*TASK8*/

/*TASK9*/


function secondsFormate() {
  var a = parseInt(prompt('Enter the seconds value'));
  var hours = Math.floor(a / 60 / 60);
  var minutes = Math.floor(a / 60) - hours * 60;
  var seconds = a % 60;
  var formatted = [hours.toString().padStart(2, '0'), minutes.toString().padStart(2, '0'), seconds.toString().padStart(2, '0')].join(':');
  alert(formatted);
}
/*TASK10*/