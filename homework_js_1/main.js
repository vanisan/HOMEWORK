/*TASK 1*/
/*Достал с инпута ввод и перевёл его в число
С помощью условий раздробил на категории*/
function countAge(){
    let age = document.getElementById("one").value;
    if (age >= 0 && age < 12)
    {
        alert('CHILD AGE');
    }
    else if (age >= 12 && age < 18)
    {
        alert('TEEN AGE');
    }
    else if (age >= 18 && age < 60)
    {
        alert('ADULT');
    }
    else if (age >= 60)
    {
        alert('OLD PERSON');
    }
}
/*TASK 2*/
/*Конструкция свитч содержит в себе заранее подготовленые кейсы ввода и инструкции на вывод
А вообще задчка с Stepik глава Вветвления,недавно решал*/
function symbolsGet(){
    let key = prompt("Choose and enter a number from 0 to 9")
    switch(key) {
        case '0':
            alert('0 is )');
            break;
        case '1':
            alert('1 is !');
            break;
        case '2':
            alert('2 is @');
            break;
        case '3':
            alert('3 is #');
            break;
        case '4':
            alert('4 is $');
            break;
        case '5':
            alert('5 is %');
            break;
        case '6':
            alert('6 is ^');
            break;
        case '7':
            alert('7 is &');
            break;
        case '8':
            alert('8 is *');
            break;
        case '9':
            alert('9 is (');
            break;
    }
}
/*TASK 3*/
/*Вот тут посложнее.Пришлось много всего прошуршать.Узнал разницу между = == и ===)
Условие из 3 неравеностей перебирает переменную как массив(я так понимаю) на наличии равности значений.Осчет с 0! )))
*/
function checkNum(){
    let chknum = prompt('Type the number between 100 to 999 (includinly)');
    if (chknum[0] == chknum[1] || chknum[0] == chknum[2] || chknum[1] == chknum[2])
    {
        alert('same chars FOUND');
    }
    else
        alert('same chars NOT FOUND');
}
/*TASK 4*/
/*Проще предыдущих. Проверяем на кратость 4 (400 можна не считать т.к. это дублирование 4*100)
и некратность 100*/
function yearCheck(){
    let year = prompt('Enter a year');
    if (year%4 == 0 && year%100 !== 0)
    {
        alert('Year is leap');
    }
    else
        alert('Year is not leap');
}
/*TASK 5*/
/*Честно говоря подлизано с стековерфлоу но именно принцип методов сплит ревёрс и джоин понял)(работает с строкой как с array) */
function palindrome(){
    let numinp = prompt('Enter a name or value');
    if (numinp === numinp.split('').reverse().join(''))
        alert('Your number is palindrome!');
    else
        alert('It is not palindrome');
}
