"use strict";

function _templateObject2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/*task1*/
function sumDia() {
  var a = parseInt(prompt("Put the first num"));
  var b = parseInt(prompt("Put the second num"));
  var sum = 0;

  while (a <= b) {
    sum += a;
    a++;
  }

  alert(sum);
}
/*task2*/


function maxDiv() {
  var a = parseInt(prompt("Choose the first num"));
  var b = parseInt(prompt("Choose the second num"));
  var d = "";
  var lim = a <= b ? a : b;
  var divider = 1;

  while (divider <= lim) {
    if (a % divider == 0 && b % divider == 0) {
      final = divider + "";
    }

    divider++;
  }

  alert(final);
}
/*task3*/


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
/*task4*/


function letCount() {
  var a = parseInt(prompt("Type any number"));
  alert(String(a).length);
}
/*task5*/


function statistic() {
  var a = 0,
      b = 0;
  var N = prompt("введите 10 чисел: ");

  if (N) {
    N.split(" ").map(function (s) {
      var num = parseInt(s);

      if (num !== NaN) {
        if (num > 0 && num != 0) {
          a++;
        } else {
          b++;
        }
      }
    });
  }

  if (a > 0) {
    alert("Количество положительных: " + a);
  } else {
    alert("Положительных чисел нет");
  }

  if (a > 0) {
    alert("Количество отрицательных: " + b);
  } else {
    alert("Отрицательных чисел нет");
  }
}
/*task6*/


function calcCyc() {
  var _loop = function _loop() {
    var a = +prompt('Введите первое число');
    var b = +prompt('Введите второе число');
    var sign = prompt('Выберете знак - + / *');
    var action = {
      '+': function _() {
        return a + b;
      },
      '-': function _() {
        return a - b;
      },
      '/': function _() {
        return a / b;
      },
      '*': function _() {
        return a * b;
      }
    }[sign];
    if (action) alert(action());
    if (!confirm('Хотите ли вы решить еще один пример?')) return "break";
  };

  while (true) {
    var _ret = _loop();

    if (_ret === "break") break;
  }
}
/*task7*/


function arrShift() {
  var count = prompt('Введите число');
  var a = prompt('steps of shift');
  arr = count.split(_templateObject());

  for (var i = 0; i < count; i++) {
    arr.push(arr.shift(a));
  }

  alert(arr.join(_templateObject2()));
}
/*task8*/


function nextDay() {
  var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var currDay = 0;

  while (confirm("".concat(days[currDay], ". Wanna to see the next day?"))) {
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